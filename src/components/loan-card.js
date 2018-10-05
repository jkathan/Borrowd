import React from 'react';

import './card.css';

import RenewLoanForm from './components/loan-renew-form';

export default function LoanCard(props) {
	    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }
//dont understand how i could update Return Date from other component
//my thoughts: set state of return date, have an action handler that 
//listens to onsubmit and sets state to that new state 
render() {    
    return (
        <ul>
			 <li>Type: {props.type}</li>
			 <li>Item: {props.item}</li>
			 <li>Loanee: {props.loanee}</li>
			 <li>Email: {props.email}</li>
			 <li>Phone: {props.phone}</li>
			 <li>Return Date: {props.returnDate}</li>
			 <button onClick={e => this.goToLoanList(e)}>Return</button>
			 <div>
			 	<RenewLoanForm />
			 </div>
		</ul>
    	);
	};
}

LoanCard.defaultProps = {
    type: ''
    item: '' 
    loanee: ''
    email: ''
    phone: ''
    returnDate: ''
};


