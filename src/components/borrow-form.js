import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field, SubmissionError, focus, reset} from 'redux-form';
import moment from 'moment'
import './add-form.css';
import {addBorrowCard} from '../actions/index';
import {required, nonEmpty, email} from '../validators';
import Input from './input';
import {updateBoard} from '../actions/index';

export class BorrowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(values) {
        const itemType = this.typeInput.value.trim();
        const item = values.item;
        const loaner = values.loaner;
        const email = values.email;
        const phone = values.phone;
        const date = values.returnDate;
        this.typeInput.value = '';
        const dateAdded = moment().format('YYYY-MM-DD');
        this.props.dispatch(
        addBorrowCard(itemType, item, loaner, email, phone, date, dateAdded, null)
        );
        this.props.dispatch(reset('borrowForm'));
        this.props.dispatch(updateBoard());
        this.setEditing(false);
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

render() {      
    if (!this.state.editing) {
            return (
                <div className='buttonCenter'>
                    <button onClick={() => this.setEditing(true)} className='dashboardButton'>Track a Borrow  +</button>
                </div>
            );
        }
        return (
                <div>
                    <div className='buttonCenter'>
                        <button onClick={() => this.setEditing()} className='dashboardButton'>Track a Borrow  +</button>
                    </div>
                    <div className="list-wrapper">
                     <form className="card add-form" onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values))}>
                            <label>Item Type:  </label>
                            <select ref={input => this.typeInput = input}>
                                <option>Tool</option>
                                <option>Money</option>
                                <option>Clothing</option>
                                <option>Electronics</option>
                                <option>Other</option>
                            </select><br />
                            <Field 
                                label="Item:  "
                                name="item" 
                                component={Input} 
                                type="text" 
                                ref={input => this.input = input} 
                                validate={[required, nonEmpty]}
                            />
                            <Field 
                                label="Loaner:  "
                                name="loaner" 
                                component={Input}  
                                type="text" 
                                ref={input => this.input = input}
                                validate={[required, nonEmpty]}
                            />
                            <Field
                                label="Email:  " 
                                name="email" 
                                type="email" 
                                component={Input}  
                                ref={input => this.input = input} 
                                validate={[required, nonEmpty, email]}
                            />
                            <Field 
                                label="Phone:  "
                                name="phone" 
                                type="tel" 
                                component={Input} 
                                ref={input => this.input = input}
                                validate={[required, nonEmpty]}
                            />
                            <Field
                                label="Return Date:   " 
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
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'borrowForm',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('borrowForm', Object.keys(errors)[0]))
})(BorrowForm);