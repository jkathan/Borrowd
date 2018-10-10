import React from 'react';
import {connect} from 'react-redux';
import RenewForm from '../loan-renew-form';
import {returnItem} from '..../actions/index';
import {renewItem} from '..../actions/index';
//import * as indexAction from '../actions';
export class BorrowCard extends React.Component  {
		constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
    }
//dont understand how i could update Return Date from other component
//my thoughts: set state of return date, have an action handler that 
//listens to onsubmit and sets state to that new state 
  returnBorrowItem(e, index){
    e.preventDefault();
    console.log(index);
   this.props.dispatch(returnLoanItem(index));
}
	renewBorrowItem(date, index) {
		console.log(index);
		this.props.dispatch(renewBorrowItem(date, index))
	}
//would rather do handleclick in parent but cant specifiy button
render() {    
    return (
        <ul key={this.props.listId}>
        	 <li>Type: {this.props.itemType}</li>
			 <li>Item: {this.props.item}</li>
			 <li>Loanee: {this.props.borrower}</li>
			 <li>Email: {this.props.email}</li>
			 <li>Phone: {this.props.phone}</li>
			 <li>Return Date: {this.props.returnDate}</li>
			 <button onClick={(e) => this.returnItem(e, this.props.listId)}>Return</button>
			 <div>
			 	<RenewForm 
			 	index ={this.props.listId} 
			 	onAdd={(date, index) => this.renewBorrowItem(date, index)}/>
			 </div>
		</ul>
    	);
	};
}

//const mapDispatchToProps = (dispatch) => {
//  return {
//    returnLoanItem: index =>dispatch(indexAction.returnLoanItem(index))
//  } onAdd={(itemType, item, borrower, email, phone, date) => this.addCard(itemType, item, borrower, email, phone, date)}
//};

export default connect()(BorrowCard);
