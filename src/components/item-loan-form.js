import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment'
import {addCard} from '../actions/index';
import {BrowserRouter as  Link} from 'react-router-dom';
import {removeItemFromList} from '../actions/index';
import './add-form.css';
import {reduxForm, Field, SubmissionError, focus, reset} from 'redux-form';
import {required, nonEmpty, email} from '../validators';
import Input from './input';
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
        const borrower = values.borrower;
        const email = values.email;
        const phone = values.phone;
        const date = values.date;

        if (borrower && email && phone && date && this.props.onAdd) {
            this.props.onAdd(borrower, email, phone, date);
        }
        const dateAdded = moment().format('YYYY-MM-DD');
        const listId = this.props.index;
        this.props.dispatch(removeItemFromList(listId));
        this.setEditing(false);
        this.props.dispatch(reset('itemLoanForm'));
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
                <form className="card add-form" onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values))}>
                        <Field 
                            label="Borrower:"
                            name="borrower" 
                            component={Input}  
                            type="text" 
                            ref={input => this.input = input}
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

export default reduxForm({
    form: 'itemLoanForm',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('itemLoanForm', Object.keys(errors)[0]))
})(ItemLoanForm);