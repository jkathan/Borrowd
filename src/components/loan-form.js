import React from 'react';
import {connect} from 'react-redux';

import {addLoanCard} from '../actions';
//how do I 
export default class LoanForm extends React.Component {
    //in order to communicate between the two, do i need to set state?
    onSubmit(event) {
        event.preventDefault();
        const type = typeInput.value.trim();
        const item = itemInput.value.trim();
        const borrower = borrowerInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const date = dateInput.value.trim();
        console.log(type);
        this.typeInput.value = '';
        this.itemInput.value = '';
        this.borrowerInput.value = '';
        this.emailInput.value = '';
        this.phoneInput.value = '';
        this.dateInput.value = '';
        //will have to put more info here depeding on the selection of item
        //also will have to add new item to item list. is this done in new 
        //on submit?
        //this.props.dispatch(
            //wahat is boardID and why is it necessary?
        //addLoanCard(type, item, borrower, email, phone, date, null)
        //);
        //this.props.history.push(`/items/loans`);
    }

/*
    goToLoansList(event) {
        event.preventDefault();
        this.props.history.push(`/items/loans`);
    }*/
render() {
//within components i can render the buttons
//heres what i want to do here. once the element is chosen or added. I want the 
//element to appear and buttons to disappear. maybe not necessary for the add, but
//for the find in item list. maybe it just makes sense to item pag
        return (
            <div>

                <form className="card add-form" onSubmit={this.onSubmit}>
                        <label>type:</label>
                        <input name="loanee" type="text" ref={input => this.typeInput = input} />
                        <label>item:</label>
                        <input name="loanee" type="text" ref={input => this.itemInput = input} />
                        <label>Borrower:</label>
                        <input name="loanee" type="text" ref={input => this.borrowerInput = input} />
                        <label>Email:</label>
                        <input name="email" type="email" ref={input => this.emailInput = input} />
                        <label>Phone:</label>
                        <input name="phone" type="tel" ref={input => this.phoneInput = input} />
                        <label>Return Date:</label>
                        <input name="returnDate" type="date" ref={input => this.dateInput = input} />
                    <button>Submit</button>
                    <button type="button" /*onClick={e => this.goToLoanList(e)}*/>
                        Cancel
                    </button>
                </form>
            </div>
        );
    }
}

/*
                    <div>
                        <LoanFormFromItem />}
                    </div>
                    <div>
                        <AddItemLoanForm />}
                    </div>
                    */