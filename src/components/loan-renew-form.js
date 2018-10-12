import React from 'react';
import './add-form.css';
import {connect} from 'react-redux';
import {renewItem} from '../actions/index';
//import {addLoanCard} from '../actions';

export class RenewLoanForm extends React.Component {
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
        
        this.dateInput.value = '';
         //this.props.dispatch(
        //addLoanCard(date, this.props.listId)
        //);
        this.props.dispatch(renewItem(date, index))
        this.setEditing(false)
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
                	<button onClick={(this.onSubmit)}>Renew</button>
            	</div>
            );
        }
		return (
			<form onSubmit={(e) => this.onSubmit(e)}>
				<label>New Return Date:</label>
				<input name="returnDate" type="date" ref={input => this.dateInput = input}/>
	        	<button onClick={() => this.setEditing(false)}>Cancel</button>
	        	<button>Submit</button>
	        </form>
	    );
	}
}


export default connect()(RenewLoanForm);