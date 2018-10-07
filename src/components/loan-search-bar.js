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
    	const searchTerm = (event.target.value);
    	this.props.onChange(searchTerm);
}

  render() {
    return (
      <form >
      		<label>Search by Item</label>
	        <input type="text" placeholder="Search..." 
	        onChange={this.props.onChange} />
      </form>
    );
  }
}
