import React from 'react';
import {addItem} from '../actions/index';
import './add-form.css';
import {required, nonEmpty} from '../validators';
import {Field, reduxForm, focus, reset} from 'redux-form';
import Input from './input';
import {updateBoard} from '../actions/index';

export class AddItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            editing: false
        }
    }
    onSubmit(values) {
        const itemType = this.typeInput.value.trim();
        const item = values.labelItem;
        this.typeInput.value = '';
        this.props.dispatch(
            addItem(itemType, item, null));
        this.props.dispatch(
            reset('addItemForm'));
        this.props.dispatch(
            updateBoard());
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
                    <button onClick={() => this.setEditing(true)} className='dashboardButton'>Add an item to your library +</button>
                </div>
            );
        }
        return (
            <div>
                <div className='buttonCenter'>
                    <button onClick={() => this.setEditing()} className='dashboardButton'>Add an item to your library +</button>
                </div>
                <div className="list-wrapper">
                    <form className="card add-form" onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values))}>
                            <label>Item Type:  </label>
                            <select ref={input => this.typeInput = input}>
                                <option></option>
                                <option>Tool</option>
                                <option>Money</option>
                                <option>Clothing</option>
                                <option>Electronics</option>
                                <option>Other</option>
                            </select>
                            <br />
                            <Field 
                                label="Item:  "
                                name="labelItem" 
                                component={Input} 
                                type="text" 
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
    form: 'addItemForm',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('addItemForm', Object.keys(errors)[0]))
})(AddItemForm);