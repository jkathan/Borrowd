import React from 'react';
import './add-form.css';
import {connect} from 'react-redux';
import {required, nonEmpty, email} from '../validators';
import {renewBorrowItem} from '../actions/index';
import {reduxForm, Field, SubmissionError, focus. reset} from 'redux-form';
import Input from './input';
//import {addLoanCard} from '../actions';

export class RenewBorrowForm extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        this.onSubmitThis = this.onSubmitThis.bind(this);
    }

    onSubmitThis(event) {
        const index = this.props.index;
        console.log(index);
        const date = value.returnDate;
        console.log(date);      
        this.props.dispatch(renewBorrowItem(date, index))
        this.props.dispatch(reset('borrowRenew'));
        this.setEditing(false)
    }
        //);
       setEditing(editing) {
        this.setState({
            editing
        });
    }

	render() {
		if (!this.state.editing) {
            return (
            	<div>
                	<button onClick={() => this.setEditing(true)}>Renew</button>
            	</div>
            );
        }
		return (
            <form onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values))}>
                <Field
                    label="New Return Date:"
                    component={Input}
                    name="returnDate" 
                    type="date" 
                    ref={input => this.input = input}
                    validate={[required, nonEmpty]} 
                />
                <button onClick={() => this.setEditing(false)}>Cancel</button>
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}
                >Submit</button>
            </form>
	    );
	}
}
}
export default reduxForm({
    form: 'borrowRenew',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('borrowRenew', Object.keys(errors)[0]))
})(RenewBorrowForm);