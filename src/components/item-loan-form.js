import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment'
import {addCard} from '../actions/index';
import {BrowserRouter as  Link} from 'react-router-dom';
import {removeItemFromList} from '../actions/index';
import './add-form.css';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {required, nonEmpty, email} from '../validators';
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
        const listId = this.props.index;
        this.props.dispatch(removeItemFromList(listId));
        this.setEditing(false);
        //will have to put more info here depeding on the selection of item
        //also will have to add new item to item list. is this done in new 
        //on submit?
        //this.props.dispatch(
            //wahat is boardID and why is it necessary?
        //addCard(borrower, email, phone, date, dateAdded, null)
        //);
        //this.props.history.push(`/items/loans`);
    }
       setEditing(editing) {
        //this.props.history.push(`/items/loans`);
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

        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
    
            if (!this.state.editing) {
            return (
                <div>
                    <button onClick={() => this.setEditing(true)}>Checkout</button>
                </div>
            );
        };

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
                        <label>Borrower:
                        {error}
                        </label>
                        <Field  
                            component="input" 
                            name="borrower" 
                            type="text" 
                            ref={input => this.borrowerInput = input} 
                            validate={[required, nonEmpty]} 
                        />
                        <label>Email:
                        {error}</label>
                        <Field 
                            component="input" 
                            name="email" 
                            type="email" 
                            ref={input => this.emailInput = input} 
                            validate={[required, nonEmpty, email]}
                        />
                        <label>Phone:
                        {error}</label>
                        <Field 
                            component="input" 
                            name="phone" 
                            type="tel" 
                            ref={input => this.phoneInput = input} 
                            validate={[required, nonEmpty]}
                        />
                        <label>Return Date:
                        {error}</label>
                        <Field 
                            component="input" 
                            name="returnDate" 
                            type="date" 
                            ref={input => this.dateInput = input} 
                            validate={[required, nonEmpty]}
                        />
                    <button 
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}
                        >
                        Submit
                    </button>
                    <button 
                        onClick={() => this.setEditing(false)} 
                        >
                        Cancel
                    </button>
                </form>
            </div>
        );
    }
}
}

export default connect()(ItemLoanForm);