import React from 'react';
import {addCard} from '../actions/index';
import {removeItemFromList} from '../actions/index';
import ItemLoanForm from './item-loan-form';
import {connect} from 'react-redux';
import moment from 'moment'

class ItemRepo extends React.Component {
	constructor(props) {
        super(props);

    }
//dont unders
	returnItem(e, index){
	    e.preventDefault();
	    console.log(index);
	    this.props.dispatch(removeItemFromList(index));
}
/*	goToCheckoutBoard(event) {
        event.preventDefault();
        this.props.history.push(`/items/itemedit`);
    }*/
    onAdd(borrower, email, phone, date) {
    	var itemType = this.props.itemType.value.trim();
    	var item = this.props.item.value.trim();
    	const dateAdded = moment().format('YYYY-MM-DD');
    	this.props.dispatch(
            //wahat is boardID and why is it necessary?
        addCard(itemType, item, borrower, email, phone, date, dateAdded, null)
        );
    }
    returnItem(e, index){
	    e.preventDefault();
	    console.log(index);
	    this.props.dispatch(removeItemFromList(index));
}
//edit button should be a link
//new form form for borrow and forms
	render() {
		return (
			<div>
				<ul>
				 	<li>Type: {this.props.itemType}</li>
				 	<li>Item: {this.props.item}</li>
				</ul>
				<button>Edit</button>
				<ItemLoanForm
				onAdd= {(borrower, email, phone, date) => this.addCard(borrower, email, phone, date)}
				/>
				<button onClick={(e) => this.returnItem(e, this.props.listId)}>Delete</button>
			</div>
		);
	}
}

export default connect()(ItemRepo);