import React from 'react';

class RenewLoanForm extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        const date = this.dateInput.value.trim();
        if ( date && this.props.onAdd) {
            this.props.onAdd(date);
        }

        this.dateInput.value = '';
    }
	render() {
		if (!this.state.editing) {
            return (
                <button onClick={() => this.setEditing(true)}></button>
            );
        }
		return (
			<form onSubmit={(e) => this.onSubmit(e)}>
				<label>New Return Date:</label>
				<input name="returnDate" type="date" ref={input => this.dateInput = input}/>
	        	<button onClick={() => this.setEditing(false)}>Cancel</button>
	        	<button onClick={() => this.setEditing(false)}>Submit</button>
	        </form>
	    );
	}