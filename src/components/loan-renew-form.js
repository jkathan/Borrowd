import React from 'react';
import './add-form.css';
import {connect} from 'react-redux';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {required, nonEmpty, email} from '../validators';
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

    onSubmitNow(event) {
        event.preventDefault();
        const index = this.props.index;
        console.log(index);
        const date = this.dateInputNow.value.trim();
        console.log(date);
        if (date && this.props.onAdd) {
            this.props.onAdd(date);
        }
        this.dateInputNow.value = '';
         //this.props.dispatch(
        //addLoanCard(date, this.props.listId)
        //);
       //this.props.dispatch(renewLoanItem(date, index))
        this.setEditing(false)
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
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
    
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


export default connect()(RenewLoanForm);