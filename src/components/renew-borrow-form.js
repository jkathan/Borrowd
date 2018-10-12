import React from 'react';
import './add-form.css';
import {connect} from 'react-redux';

import {renewBorrowItem} from '../actions/index';
//import {addLoanCard} from '../actions';

export class RenewBorrowForm extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        this.onSubmitThis = this.onSubmitThis.bind(this);
    }

    onSubmitThis(event) {
        event.preventDefault();
        const index = this.props.index;
        console.log(index);
        const date = this.dateInputLoan.value.trim();
        console.log(date);
        
        this.dateInput.value = '';
        
        this.props.dispatch(renewBorrowItem(date, index))
        this.setEditing(false)
    }
        //);
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
			<form onSubmit={this.onSubmitThis}>
				<label>New Return Date:</label>
				<input name="returnDate" type="date" ref={input => this.dateInputLoan = input}/>
                <button onClick={() => this.setEditing(false)}>Cancel</button>
	        	<button >Submit</button>
	        </form>
	    );
	}
}
export default connect()(RenewBorrowForm);

