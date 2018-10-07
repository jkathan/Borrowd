import React from 'react';
import RenewLoanForm from './loan-renew-form';
import LoanCard from './loan-card';

export default class LoanSearchList extends React.Component {
	    constructor(props) {
        super(props);
    }
 render() {
	const loancards = this.props.loansList.map((loan, index) => (
            <li key={index}>
               <ul>
	        	 <li>Type: {this.loan.itemType}</li>
				 <li>Item: {this.loan.item}</li>
				 <li>Loanee: {this.loan.borrower}</li>
				 <li>Email: {this.loan.email}</li>
				 <li>Phone: {this.loan.phone}</li>
				 <li>Return Date: {this.loan.returnDate}</li>
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