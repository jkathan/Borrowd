import React from 'react';
import './add-form.css';
import {connect} from 'react-redux';
import {required, nonEmpty, email} from '../validators';
import {renewBorrowItem} from '../actions/index';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
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
        event.preventDefault();
        const index = this.props.index;
        console.log(index);
        const date = this.dateInputLoan.value.trim();
        console.log(date);
        
        this.dateInputLoan.value = '';
        
        this.props.dispatch(renewBorrowItem(date, index))
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
        let error;
        if (this.props.touched && this.props.error) {
            error = <div className="form-error">{this.props.error}</div>;
    
		return (
            <form onSubmit={this.onSubmitNow}>
                <label>
                New Return Date:
                {error}
                </label>
                <Field
                    component="input"
                    name="returnDate" 
                    type="date" 
                    ref={input => this.dateInputNow = input}
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