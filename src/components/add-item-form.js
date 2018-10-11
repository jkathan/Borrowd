import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment'
import {addItem} from '../actions/index';
import './add-form.css';
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
        return (
            <div>
                <form className="card add-form" onSubmit={this.onSubmit}>
                        <label>Type:</label>
                        <select ref={input => this.typeInput = input}>
                            <option>Tool</option>
                            <option>Money</option>
                            <option>Clothing</option>
                            <option>Electronics</option>
                            <option>Other</option>
                        </select>
                        <label>Item:</label>
                        <input name="item" type="text" ref={input => this.itemInput = input} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default connect()(AddItemForm);