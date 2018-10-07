import React from 'react';
import RenewLoanForm from './loan-renew-form';
import LoanCard from './loan-card';

export default class LoanSearchList extends React.Component {
	    constructor(props) {
        super(props);
    }
 render() {
	const loancards = props.loansList.map((loan, index) => (
            <li key={index}>
               <ul>
	        	 <li>Type: {loan.itemType}</li>
				 <li>Item: {loan.item}</li>
				 <li>Loanee: {loan.borrower}</li>
				 <li>Email: {loan.email}</li>
				 <li>Phone: {loan.phone}</li>
				 <li>Return Date: {loan.returnDate}</li>
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