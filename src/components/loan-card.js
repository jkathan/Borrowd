import React from 'react';
import {connect} from 'react-redux';
import RenewLoanForm from './loan-renew-form';
import {returnLoanItem} from '../actions/index';
import {renewLoanItem} from '../actions/index';
import {addItem} from '../actions/index';
import './card.css';

//import {updateCheckoutStatus} from '../actions/index'
//import * as indexAction from '../actions';
export class LoanCard extends React.Component  {
		constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
    }
//dont understand how i could update Return Date from other component
//my thoughts: set state of return date, have an action handler that 
//listens to onsubmit and sets state to that new state 
  returnLoanItem(e, index){
    e.preventDefault();
    const itemType= this.props.itemType;
	const item = this.props.item;
    console.log(index);
   	this.props.dispatch(returnLoanItem(index));
   	this.props.dispatch(addItem(itemType, item));
  //this.props.dispatch(updateCheckoutStatus());
}

renewLoan (date) {
    console.log(this.props.listId);
    const id = this.props.listId;
    this.props.dispatch(renewLoanItem(date, id))
}
//would rather do handleclick in parent but cant specifiy button
render() {    
    return (
        <ul key={this.props.listId} className="card">
        	 <li>Type: {this.props.itemType}</li>
			 <li>Item: {this.props.item}</li>
			 <li>Loanee: {this.props.borrower}</li>
			 <li>Email: {this.props.email}</li>
			 <li>Phone: {this.props.phone}</li>
			 <li>Return Date: {this.props.returnDate}</li>
			 <button className="formButtons"onClick={(e) => this.returnLoanItem(e, this.props.listId)}>Return</button>
			 <div>
			 	<RenewLoanForm 
			 	onAdd= {(date) => this.renewLoan(date)} 
			 	/>
			 </div>
		</ul>
    	);
	};
}

export default connect()(LoanCard);

