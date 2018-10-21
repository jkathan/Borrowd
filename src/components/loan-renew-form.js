import React from 'react';
import './add-form.css';
import {reduxForm, Field, reset} from 'redux-form';
import {required, nonEmpty} from '../validators';
import Input from './input';
import {updateBoard} from '../actions/index';

export class RenewLoanForm extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        this.onSubmitNow = this.onSubmitNow.bind(this);
    }
    onSubmitNow(values) {
        const date = values.returnDate;
        if (date && this.props.onAdd) {
            this.props.onAdd(date);
        }
        this.props.dispatch(
            reset('loanRenew'));
        this.setEditing(false);
        this.props.dispatch(
            updateBoard());
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
                    <button onClick={() => this.setEditing(true)} className="formButtons">Renew</button>
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
	        	<button
                    className="formButtons"
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}
                >Submit</button>
	        </form>
	    );
	}
}

export default reduxForm({
    form: 'loanRenew',
})(RenewLoanForm);