import React from 'react';
import {addCard} from '../actions/index';
import {removeItemFromList} from '../actions/index';
import ItemLoanForm from './item-loan-form';
import {connect} from 'react-redux';
import moment from 'moment';
import './card.css';

class ItemRepo extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            editing: true,
            itemType: props.itemType,
            item: props.item
        }
    }
    addCard(borrower, email, phone, date) {
    	console.log(borrower);
    	var itemType = this.props.itemType;
    	var item = this.props.item;
    	const dateAdded = moment().format('YYYY-MM-DD');
    	this.props.dispatch(
        addCard(itemType, item, borrower, email, phone, date, dateAdded, null)
        );
    }
    returnItem(e, index){
	    e.preventDefault();
	    console.log(index);
	    this.props.dispatch(removeItemFromList(index));
	}	
	render() {
		return (
			<li>
				<div>
					<ul className="card">
					 	<li>Type: {this.props.itemType}</li>
					 	<li>Item: {this.props.item}</li>
					</ul> 
					<ItemLoanForm
					index = {this.props.listId}
					onAdd= {(borrower, email, phone, date) => this.addCard(borrower, email, phone, date)}
					/>
					<button 
					className="formButtons"
					onClick={(e) => this.returnItem(e, this.props.listId)}>Delete</button>
				</div>
			</li>
		);
	}
}

export default connect()(ItemRepo);