import React from 'react';
import {addCard} from '../actions/index';
import {edititem} from '../actions/index';
import {removeItemFromList} from '../actions/index';
import ItemLoanForm from './item-loan-form';
import {connect} from 'react-redux';
import moment from 'moment';
import './card.css';

class ItemRepo extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
    }
//dont unders
/*	goToCheckoutBoard(event) {
        event.preventDefault();
        this.props.history.push(`/items/itemedit`);
    }*/
    addCard(borrower, email, phone, date) {
    	var itemType = this.props.itemType;
    	var item = this.props.item;
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
	editItem(e, index) {
		e.preventDefault();
		const itemType = this.typeInput.value.trim();
        const item = this.itemInput.value.trim();
	    console.log(index);
	    this.props.dispatch(editItem(itemType, item, index))
	    this.setState({editing : !this.state.editing})
	}

//edit button should be a link
//new form form for borrow and forms
	render() {
		return (
			<li>
				<div>
					{ this.state.editing ?
					<ul>
					 	<li className="card">Type: {this.props.itemType}</li>
					 	<li>Item: {this.props.item}</li>
					</ul> :
					<label>Type:</label>
					<input type="text" ref={input => this.typeInput = input} value = {this.props.itemType} />
					<label>Item:</label>
					<input type="text" ref={input => this.itemInput = input} value = {this.props.item}
					<button onClick={(e) => this.editItem(e, this.props.listId)}>Submit</button>
					}

					<button onClick={() => this.setState({editing : !this.state.editing})>&#9998;</button>
					<ItemLoanForm
					index = {this.props.listId}
					onAdd= {(borrower, email, phone, date) => this.addCard(borrower, email, phone, date)}
					/>
					<button onClick={(e) => this.returnItem(e, this.props.listId)}>Delete</button>
				</div>
			</li>
		);
	}
}

export default connect()(ItemRepo);