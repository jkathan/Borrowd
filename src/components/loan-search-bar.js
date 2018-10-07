import React from 'react';

export default class SearchBar extends React.Component {
	    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    /*onSubmit(event) {
        event.preventDefault();
    }
    onSubmit={e => e.preventDefault()}*/
    onChange(event) {
    	event.preventDefault();
    	let searchTerm = event.target.value;
    	this.props.onChange(searchTerm);
    	console.log(searchTerm);
}

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
      		<label>Search by Item</label>
	        <input type="text" placeholder="Search..." 
	        onChange={this.props.onChange} />
      </form>
    );
  }
}
