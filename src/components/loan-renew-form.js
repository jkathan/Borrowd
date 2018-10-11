import React from 'react';
import './add-form';
//import {addLoanCard} from '../actions';

export default class RenewForm extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const index = this.props.index;
        console.log(index);
        const date = this.dateInput.value.trim();
        console.log(date);
        if ( date && index && this.props.onAdd) {
            this.props.onAdd(date, index);
        }

        this.dateInput.value = '';
         //this.props.dispatch(
        //addLoanCard(date, this.props.listId)
        //);
    }
       setEditing(editing) {
        this.setState({
            editing
        });
    }

	render() {
		if (!this.state.editing) {
            return (
            	<div>
                	<button onClick={() => this.setEditing(true)}>Renew</button>
            	</div>
            );
        }
		return (
			<form onSubmit={(e) => this.onSubmit(e)}>
				<label>New Return Date:</label>
				<input name="returnDate" type="date" ref={input => this.dateInput = input}/>
	        	<button onClick={() => this.setEditing(false)}>Cancel</button>
	        	<button onClick={() => this.setEditing(false)}>Update</button>
	        </form>
	    );
	}
}


//export default connect()(RenewLoanForm);