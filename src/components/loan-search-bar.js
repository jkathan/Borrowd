import React from 'react';

export default class SearchBar extends React.Component {
	    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    /*onSubmit(event) {
        event.preventDefault();
    }
    onSubmit={e => e.preventDefault()}*/
    onChange(event) {
    	event.preventDefault();
    	searchTerm = this.props.onChange(event.target.value)
    }

  render() {
    return (
      <form >
      		<label>Search by Item</label>
	        <input type="text" placeholder="Search..." 
	        onChange={e => this.props.onChange(e.target.value)} />
      </form>
    );
  }
}
