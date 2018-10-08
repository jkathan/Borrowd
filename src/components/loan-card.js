import React from 'react';
import {connect} from 'react-redux';
import RenewLoanForm from './loan-renew-form';
import {returnLoanItem} from '../actions';
import * as indexAction from './actions/index';
export class LoanCard extends React.Component  {
//dont understand how i could update Return Date from other component
//my thoughts: set state of return date, have an action handler that 
//listens to onsubmit and sets state to that new state 
  returnLoanItem(e, index){
    e.preventDefault();
    this.props.returnLoanItem(index);
}
//would rather do handleclick in parent but cant specifiy button
render() {    
    return (
        <ul key={listId}>
        	 <li>Type: {this.props.itemType}</li>
			 <li>Item: {this.props.item}</li>
			 <li>Loanee: {this.props.borrower}</li>
			 <li>Email: {this.props.email}</li>
			 <li>Phone: {this.props.phone}</li>
			 <li>Return Date: {this.props.returnDate}</li>
			 <button onClick={(e) => this.returnLoanItem(e, listId)}>Return</button>
			 <div>
			 	<RenewLoanForm />
			 </div>
		</ul>
    	);
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
    returnLoanItem: index =>dispatch(indexAction.returnLoanItem(index))
  }
};

export default connect(mapDispatchToProps)(LoanCard);

