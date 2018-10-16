import React from 'react';
import {addCard} from '../actions/index';
import {editItem} from '../actions/index';
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
        this.onSubmit = this.onSubmit.bind(this);
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

	onItemInputChange(value){
		
		console.log(value);
        this.setState({
             item: value
        });
    }
	onSubmit(props) {
        const itemType = this.itemInput.value.trim();        
        const item = this.itemInput.value.trim();
        const index = this.props.listId;
        console.log(itemType);
        console.log(item);
	    console.log(index);
	    this.props.dispatch(editItem(itemType, item, index))
	    this.setState({editing : !this.state.editing})
	}

	onItemTypeInputChange(value){
        this.setState({
             itemType: value
        });
    }



//edit button should be a link
//new form form for borrow and forms
	render() {
		console.log(this.props.itemType);
		console.log(this.props);
		return (
			<li>
				<div>
					{ this.state.editing ?
					<ul>
					 	<li className="card">Type: {this.props.itemType}</li>
					 	<li>Item: {this.props.item}</li>
					</ul> :
					<form onSubmit={this.onSubmit}>
						<label>Type:</label>
						<input type="text" ref={input => this.typeInput = input} value = {this.state.itemType} onChange={e => this.onItemTypeInputChange(e.target.value)} />
						<label>Item:</label>
						<input type="text" ref={input => this.itemInput = input} value = {this.state.item} onChange={e => this.onItemInputChange(e.target.value)}/>
						<button>Submit</button>
					</form>
					}

					<button onClick={() => this.setState({editing : !this.state.editing})}>Edit</button>
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