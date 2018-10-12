import React from 'react';
import './add-form.css';
import {connect} from 'react-redux';
//import {addLoanCard} from '../actions';

export class RenewBorrowForm extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmitThis(event) {
        event.preventDefault();
        const index = this.props.index;
        console.log(index);
        const date = this.dateInput.value.trim();
        console.log(date);
        if ( date && index && this.props.onAdd) {
            this.props.onAdd(date, index);
        }
        this.setEditing(false)}
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
			<form onSubmit={(e) => this.onSubmitThis(e)}>
				<label>New Return Date:</label>
				<input name="returnDate" type="date" ref={input => this.dateInput = input}/>
	        	<button onClick={() => this.setEditing(false)}>Cancel</button>
	        	<button >Submit</button>
	        </form>
	    );
	}
}
export default connect()(RenewBorrowForm);

