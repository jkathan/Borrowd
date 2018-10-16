import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment'
import './add-form.css';
import {required, nonEmpty, email} from '../validators';
import {reduxForm, Field, SubmissionError, focus, reset} from 'redux-form';
import {addCard} from '../actions/index';
import Input from './input';

//how do I 
export class LoanForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    //in order to communicate between the two, do i need to set state?
    onSubmit(values) {

        //console.log(typeInput.value.trim());
        console.log(this.typeInput.value.trim());
        const itemType = this.typeInput.value.trim();
        const item = values.item;
        const borrower = values.borrower;
        const email = values.email;
        const phone = values.phone;
        const date = values.date;
        console.log(itemType);
        //if (itemType && item && borrower && email && phone && date && this.props.onAdd) {
            //this.props.onAdd(itemType, item, borrower, email, phone, date);
        //}
        this.typeInput.value = '';
        const dateAdded = moment().format('YYYY-MM-DD');
        //will have to put more info here depeding on the selection of item
        //also will have to add new item to item list. is this done in new 
        //on submit?
        this.props.dispatch(
            //wahat is boardID and why is it necessary?
        addCard(itemType, item, borrower, email, phone, date, dateAdded, null)
        );
        this.props.dispatch(reset('loanAdd'));
        //this.props.history.push(`/items/loans`);
    }

/*
    goToLoansList(event) {
        event.preventDefault();
        this.props.history.push(`/items/loans`);
    }*/
render() {

    /////loan from list will have to be a search bar that shows values
    //this will then autofill the item and on submit will update item as 
    //checked out

//within components i can render the buttons
//heres what i want to do here. once the element is chosen or added. I want the 
//element to appear and buttons to disappear. maybe not necessary for the add, but
//for the find in item list. maybe it just makes sense to item pag
        return (
            <div className="list-wrapper">
                <form className="card add-form" onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values))}>
                        <select ref={input => this.typeInput = input}>
                            <option>Tool</option>
                            <option>Money</option>
                            <option>Clothing</option>
                            <option>Electronics</option>
                            <option>Other</option>
                        </select><br />
                        <Field 
                            label="Item:"
                            name="item" 
                            component={Input} 
                            type="text" 
                            ref={input => this.input = input} 
                            validate={[required, nonEmpty]}
                        />
                        <Field 
                            label="Borrower:"
                            name="borrower" 
                            component={Input}  
                            type="text" 
                            ref={input => this.input = input}
                            validate={[required, nonEmpty]}
                        />
                        <Field
                            label="Email:" 
                            name="email" 
                            type="email" 
                            component={Input}  
                            ref={input => this.input = input} 
                            validate={[required, nonEmpty, email]}
                        />
                        <Field 
                            label="Phone:"
                            name="phone" 
                            type="tel" 
                            component={Input} 
                            ref={input => this.input = input}
                            validate={[required, nonEmpty]}
                        />
                        <Field
                            label="Return Date:" 
                            name="returnDate" 
                            type="date" 
                            component={Input} 
                            ref={input => this.input = input}
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
export default reduxForm({
    form: 'loanAdd',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('loanAdd', Object.keys(errors)[0]))
})(LoanForm);