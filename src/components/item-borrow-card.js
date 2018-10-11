import {connect} from 'react-redux';
import React from 'react';
import {returnBorrowItem} from '../actions/index';
import './card.css';


class ItemBorrowCard extends React.Component {
	constructor(props) {
        super(props);

    }
//dont unders
	returnItem(e, index){
	    e.preventDefault();
	    console.log(index);
	   this.props.dispatch(returnBorrowItem(index));
}
//edit button should be a link
//new form form for borrow and forms
	render() {
		return (
			<div>
				<ul className="card">
					<li>Borrowed From: {this.props.loaner}</li>
				 	<li>Type: {this.props.itemType}</li>
				 	<li>Item: {this.props.item}</li>
				</ul>
				<button onClick={(e) => this.returnItem(e, this.props.listId)}>
				Return
				</button>
			</div>
		);
	}
}
export default connect()(ItemBorrowCard);