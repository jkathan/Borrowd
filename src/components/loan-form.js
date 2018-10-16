import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment'
import './add-form.css';
import {required, nonEmpty, email} from '../validators';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {addCard} from '../actions/index';
//how do I 
export class LoanForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    //in order to communicate between the two, do i need to set state?
    onSubmit(event) {
        event.preventDefault();
        //console.log(typeInput.value.trim());
        console.log(this.typeInput.value.trim());
        const itemType = this.typeInput.value.trim();
        const item = this.itemInput.value.trim();
        const borrower = this.borrowerInput.value.trim();
        const email = this.emailInput.value.trim();
        const phone = this.phoneInput.value.trim();
        const date = this.dateInput.value.trim();
        console.log(itemType);
        //if (itemType && item && borrower && email && phone && date && this.props.onAdd) {
            //this.props.onAdd(itemType, item, borrower, email, phone, date);
        //}
        this.typeInput.value = '';
        this.itemInput.value = '';
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
        addCard(itemType, item, borrower, email, phone, date, dateAdded, null)
        );
        //this.props.history.push(`/items/loans`);
    }

/*
    goToLoansList(event) {
        event.preventDefault();
        this.props.history.push(`/items/loans`);
    }*/
render() {

    let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}
            </div>;
    

    /////loan from list will have to be a search bar that shows values
    //this will then autofill the item and on submit will update item as 
    //checked out

//within components i can render the buttons
//heres what i want to do here. once the element is chosen or added. I want the 
//element to appear and buttons to disappear. maybe not necessary for the add, but
//for the find in item list. maybe it just makes sense to item pag
        return (
            <div className="list-wrapper">
                <form className="card add-form" onSubmit={this.onSubmit}>

                        <label>type:</label>
                        <select ref={input => this.typeInput = input}>
                            <option>Tool</option>
                            <option>Money</option>
                            <option>Clothing</option>
                            <option>Electronics</option>
                            <option>Other</option>
                        </select>                        
                        <label>
                        Item:
                        {error}
                        </label>
                        <Field 
                            name="item" 
                            component="input" 
                            type="text" 
                            ref={input => this.itemInput = input} 
                            validate={[required, nonEmpty]}
                        />
                        <label>
                        Borrower:
                        {error}
                        </label>
                        <Field 
                            name="borrower" 
                            component="input" 
                            type="text" 
                            ref={input => this.loanerInput = input} 
                            validate={[required, nonEmpty]}
                        />
                        <label>
                        Email:
                        {error}
                        </label>
                        <Field 
                            name="email" 
                            type="email" 
                            component="input" 
                            ref={input => this.emailInput = input} 
                            validate={[required, nonEmpty, email]}
                        />
                        <label>
                        Phone:
                        {error}
                        </label>
                        <Field 
                            name="phone" 
                            type="tel" 
                            component="input" 
                            ref={input => this.phoneInput = input} 
                            validate={[required, nonEmpty]}
                        />
                        <label>
                        Return Date:
                        {error}
                        </label>
                        <Field 
                            name="returnDate" 
                            type="date" 
                            component="input" 
                            ref={input => this.dateInput = input}
                            validate={[required, nonEmpty]} 
                        />
                    <button
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}
                    >
                    Submit
                    </button>
                    <button type="button" >
                        Cancel
                    </button>
                </form>
            </div>
        );
    }
}
}
export default reduxForm({
    form: 'LoanAdd',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(LoanForm);