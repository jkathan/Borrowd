import React from 'react';
import RenewLoanForm from './loan-renew-form';
import LoanCard from './loan-card';

export default class LoanSearchList extends React.Component {
	    constructor(props) {
        super(props);
    }
 render() {
	const loancards = this.props.loansList.map((loan, index) => (
            <ul key={index}>
	        	 <li>Type: {this.props.itemType}</li>
				 <li>Item: {this.props.item}</li>
				 <li>Loanee: {this.props.borrower}</li>
				 <li>Email: {this.props.email}</li>
				 <li>Phone: {this.props.phone}</li>
				 <li>Return Date: {this.props.returnDate}</li>
				 <button>Return</button>
				 <div>
				 	<RenewLoanForm />
				 </div>

            </ul>
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