import React from 'react';
import {returnLoanItem} from '../actions/index';
import {connect} from 'react-redux';
import './card.css';


class ItemCheckoutCard extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
    }
//dont unders
	returnItem(e, index){
	    e.preventDefault();
	    console.log(index);
	   this.props.dispatch(returnLoanItem(index));
}
//edit button should be a link
//new form form for borrow and forms
	render() {
		return (
			<div>
				<ul className="card">
					<li>Loaned to: {this.props.borrower}</li>
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

export default connect()(ItemCheckoutCard);