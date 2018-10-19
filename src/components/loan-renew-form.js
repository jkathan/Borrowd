import React from 'react';
import './add-form.css';
import {connect} from 'react-redux';
import {reduxForm, Field, SubmissionError, focus, reset} from 'redux-form';
import {required, nonEmpty, email} from '../validators';
import Input from './input';
import {updateBoard} from '../actions/index';
//import {renewLoanItem} from '../actions/index';
//import {addLoanCard} from '../actions';

export class RenewLoanForm extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        this.onSubmitNow = this.onSubmitNow.bind(this);
    }

    onSubmitNow(values) {
        const index = this.props.index;
        console.log(index);
        const date = values.returnDate;
        console.log(date);
        if (date && this.props.onAdd) {
            this.props.onAdd(date);
        }
        this.props.dispatch(reset('loanRenew'));
         //this.props.dispatch(
        //addLoanCard(date, this.props.listId)
        //);
       //this.props.dispatch(renewLoanItem(date, index))
        this.setEditing(false)
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
                    <button onClick={() => this.setEditing(true)}>Renew</button>
                </div>
            );
        }
		return (
			<form onSubmit={this.props.handleSubmit(values =>
                    this.onSubmitNow(values))}>
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

export default reduxForm({
    form: 'loanRenew',
    //onSubmitFail: (errors, dispatch) =>
        //dispatch(focus('loanRenew', Object.keys(errors)[0]))
})(RenewLoanForm);