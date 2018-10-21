import React from 'react';
import {connect} from 'react-redux';
import RenewBorrowForm from './renew-borrow-form';
import {returnBorrowItem} from '../actions/index';
import './card.css';

export class BorrowCard extends React.Component  {
		constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
    }
returnItem(e, index){
    e.preventDefault();
    this.props.dispatch(
    	returnBorrowItem(index));
}

render() {
		console.log(this.props.loaner);    
    return (
    	<div>
	        <ul key={this.props.listId} className="card">
	        	 <li>Type: {this.props.itemType}</li>
				 <li>Item: {this.props.item}</li>
				 <li>Loaner: {this.props.loaner}</li>
				 <li>Email: {this.props.email}</li>
				 <li>Phone: {this.props.phone}</li>
				 <li>Return Date: {this.props.returnDate}</li>
				 <button className="formButtons" onClick={(e) => this.returnItem(e, this.props.listId)}>Return</button>
				 <div>
				 	<RenewBorrowForm 
				 	index ={this.props.listId} 
				 	/>
				 </div>
			</ul>
		</div>
    	);
	};
}

export default connect()(BorrowCard);
