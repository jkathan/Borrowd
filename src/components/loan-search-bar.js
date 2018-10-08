import React from 'react';

export default class SearchBar extends React.Component {
 
 onChange(event) {
    event.preventDefault();
 	let searchTerm = this.searchInput.value.toLowerCase();
 	console.log(searchTerm);
 }
  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
      		<label>Search by Item</label>
	        <input type="text" placeholder="Search..." ref={input => this.searchInput = input}
	        onChange={this.onChange} />
      </form>
    );
  }
}
