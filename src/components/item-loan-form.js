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
import {updateBoard} from '../actions/index';

export class ItemLoanForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(values) {
        const borrower = values.borrower;
        const email = values.email;
        const phone = values.phone;
        const date = values.returnDate;
        if (borrower && email && phone && date && this.props.onAdd) {
            this.props.onAdd(borrower, email, phone, date);
        }
        const dateAdded = moment().format('YYYY-MM-DD');
        const listId = this.props.index;
        this.props.dispatch(removeItemFromList(listId));
        this.setEditing(false);
        this.props.dispatch(reset('itemLoanForm'));
        this.props.dispatch(updateBoard());
    }
       setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {
        if (!this.state.editing) {
            return (
                <div>
                    <button onClick={() => this.setEditing(true)} className="formButtons">Checkout</button>
                </div>
            );
        };
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
                        <Field 
                            label="Email:"
                            component={Input} 
                            name="email" 
                            type="email" 
                            ref={input => this.emailInput = input} 
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
                        className="formButtons"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}
                        >
                        Submit
                    </button>
                    <button 
                        className="formButtons"
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