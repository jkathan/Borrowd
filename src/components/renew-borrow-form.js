import React from 'react';
import './add-form.css';
import {required, nonEmpty} from '../validators';
import {renewBorrowItem} from '../actions/index';
import {reduxForm, Field, reset} from 'redux-form';
import Input from './input';
import {updateBoard} from '../actions/index';

export class RenewBorrowForm extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        this.onSubmitThis = this.onSubmitThis.bind(this);
    }

    onSubmitThis(values) {
        const index = this.props.index;
        const date = values.returnDate;
        this.props.dispatch(renewBorrowItem(date, index))
        this.props.dispatch(reset('borrowRenew'));
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
                	<button onClick={() => this.setEditing(true)} className="formButtons">Renew</button>
            	</div>
            );
        }
		return (
            <form onSubmit={this.props.handleSubmit(values =>
                    this.onSubmitThis(values))}>
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
    form: 'borrowRenew',
})(RenewBorrowForm);