import React from 'react';

import LoanCard from './loan-card';

export default class LoanSearchList extends React.Component {
	    constructor(props) {
        super(props);
    }
 render() {
	const loancards = this.props.loansList.map((loan, index) => (
            <li key={index}>
               <ul>
	        	 <li>Type: {this.props.loan.itemType}</li>
				 <li>Item: {this.props.loan.item}</li>
				 <li>Loanee: {this.props.loan.borrower}</li>
				 <li>Email: {this.props.loan.email}</li>
				 <li>Phone: {this.props.loan.phone}</li>
				 <li>Return Date: {this.props.loan.returnDate}</li>
				 <button>Return</button>
				 <div>
				 	<RenewLoanForm />
				 </div>
				</ul>
            </li>
        )
    )
    console.log(loancards);
    return (
        <ul className="character-list" aria-live="polite">
            {loancards}
        </ul>
    	);
	};
}