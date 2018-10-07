import React from 'react';

export default class SearchBar extends React.Component {
	    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
      		<label>Search by Item</label>
	        <input type="text" placeholder="Search..." 
	        onChange={e => props.onChange(e.target.value)} />
      </form>
    );
  }
}
