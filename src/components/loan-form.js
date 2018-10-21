import React from 'react';
import moment from 'moment'
import './add-form.css';
import {required, nonEmpty, email} from '../validators';
import {reduxForm, Field, focus, reset} from 'redux-form';
import {addCard} from '../actions/index';
import Input from './input';
import {updateBoard} from '../actions/index';

export class LoanForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    setEditing(editing) {
        this.setState({
            editing
        });
    }
    onSubmit(values) {
        const itemType = this.typeInput.value.trim();
        const item = values.item;
        const borrower = values.borrower;
        const email = values.email;
        const phone = values.phone;
        const date = values.returnDate;
        this.typeInput.value = '';
        const dateAdded = moment().format('YYYY-MM-DD');
        this.props.dispatch(
            addCard(itemType, item, borrower, email, phone, date, dateAdded, null)
        );
        this.props.dispatch(
            reset('loanAdd'));
        this.props.dispatch(
            updateBoard());
        this.setEditing(false);
    }

render() {
        if (!this.state.editing) {
            return (
                <div className='buttonCenter'>
                    <button onClick={() => this.setEditing(true)} className='dashboardButton'>Track a loan  +</button>
                </div>
            );
        }
        return (
            <div className='buttonCenter'>
                <div>
                    <button onClick={() => this.setEditing()} className='dashboardButton'>Track a loan  +</button>
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
                                label="Borrower:  "
                                name="borrower" 
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
                                label="Return Date:  " 
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
    form: 'loanAdd',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('loanAdd', Object.keys(errors)[0]))
})(LoanForm);