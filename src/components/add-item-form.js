import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment'
import {addItem} from '../actions/index';
import './add-form.css';
import {required, nonEmpty, email} from '../validators';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
//how do I 
export class AddItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    //in order to communicate between the two, do i need to set state?
    onSubmit(event) {
        event.preventDefault();
        const itemType = this.typeInput.value.trim();
        const item = this.itemInput.value.trim();
        console.log(itemType);
        this.typeInput.value = '';
        this.itemInput.value = '';
        //const dateAdded = moment().format('YYYY-MM-DD');
        this.props.dispatch(
        addItem(itemType, item, null)
        );
    }

render() {

        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
}

        return (
            <div className="list-wrapper">
                <h2>Add New Item</h2>
                <form className="card add-form" onSubmit={this.onSubmit}>
                        <label>Type:</label>
                        <select ref={input => this.typeInput = input}>
                            <option></option>
                            <option>Tool</option>
                            <option>Money</option>
                            <option>Clothing</option>
                            <option>Electronics</option>
                            <option>Other</option>
                        </select>
                        <br />
                        <label>
                            Item:
                            {error}
                        </label>
                        <Field 
                            name="item" 
                            component="input" 
                            type="text" 
                            ref={input => this.itemInput = input}
                            validate={[required, nonEmpty]}
                         />
                    <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}
                    >
                    Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'addItemForm',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('addItemForm', Object.keys(errors)[0]))
})(AddItemForm);