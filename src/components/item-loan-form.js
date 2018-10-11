import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment'
import {addCard} from '../actions/index';

//how do I 
export class ItemLoanForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }
    //in order to communicate between the two, do i need to set state?
    onSubmit(event) {
        event.preventDefault();
        const borrower = this.borrowerInput.value.trim();
        const email = this.emailInput.value.trim();
        const phone = this.phoneInput.value.trim();
        const date = this.dateInput.value.trim();

        if (borrower && email && phone && date && this.props.onAdd) {
            this.props.onAdd(borrower, email, phone, date);
        }

        this.borrowerInput.value = '';
        this.emailInput.value = '';
        this.phoneInput.value = '';
        this.dateInput.value = '';
        const dateAdded = moment().format('YYYY-MM-DD');
        //will have to put more info here depeding on the selection of item
        //also will have to add new item to item list. is this done in new 
        //on submit?
        this.props.dispatch(
            //wahat is boardID and why is it necessary?
        addCard(borrower, email, phone, date, dateAdded, null)
        );
        //this.props.history.push(`/items/loans`);
    }
       setEditing(editing) {
        this.props.history.push(`/items/loans`);
        this.setState({
            editing
        });
    }
/*
    goToLoansList(event) {
        event.preventDefault();
        this.props.history.push(`/items/loans`);
    }*/
render() {
            if (!this.state.editing) {
            return (
                <div>
                    <button onClick={() => this.setEditing(true)}>Checkout</button>
                </div>
            );
        }

    //loan from list will have to be a search bar that shows values
    //this will then autofill the item and on submit will update item as 
    //checked out

//within components i can render the buttons
//heres what i want to do here. once the element is chosen or added. I want the 
//element to appear and buttons to disappear. maybe not necessary for the add, but
//for the find in item list. maybe it just makes sense to item pag
        return (
            <div>
                <form className="card add-form" onSubmit={this.onSubmit}>
                        <label>Borrower:</label>
                        <input name="borrower" type="text" ref={input => this.borrowerInput = input} />
                        <label>Email:</label>
                        <input name="email" type="email" ref={input => this.emailInput = input} />
                        <label>Phone:</label>
                        <input name="phone" type="tel" ref={input => this.phoneInput = input} />
                        <label>Return Date:</label>
                        <input name="returnDate" type="date" ref={input => this.dateInput = input} />
                    <button onClick={() => this.setEditing(false)}>Submit</button>
                    <button onClick={() => this.setEditing(false)} >
                        Cancel
                    </button>
                </form>
            </div>
        );
    }
}

export default connect()(ItemLoanFormS);