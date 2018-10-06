import React from 'react';

import RenewLoanForm from './loan-renew-form';

export default class LoanCard extends React.Component  {
    goToLoansList(event) {
        event.preventDefault();
        this.props.history.push(`/items/loans`);
    }
//dont understand how i could update Return Date from other component
//my thoughts: set state of return date, have an action handler that 
//listens to onsubmit and sets state to that new state 
render() {    
    return (
        <ul>
			 <li>Type: {this.props.type}</li>
			 <li>Item: {this.props.item}</li>
			 <li>Loanee: {this.props.loanee}</li>
			 <li>Email: {this.props.email}</li>
			 <li>Phone: {this.props.phone}</li>
			 <li>Return Date: {this.props.returnDate}</li>
			 <button onClick={e => this.goToLoanList(e)}>Return</button>
			 <div>
			 	<RenewLoanForm />
			 </div>
		</ul>
    	);
	};
}



