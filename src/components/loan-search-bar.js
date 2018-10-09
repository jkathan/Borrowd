import React from 'react';
import {filterText} from '../actions/filter';
import {connect} from 'react-redux';

export class SearchBar extends React.Component {
 
 onChange(event) {
    event.preventDefault();
 	const searchTerm = event.target.value.toLowerCase();
 	console.log(searchTerm);
 	this.props.dispatch(
 		filterText(searchTerm))
 }
  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
      		<label>Search by Item</label>
	        <input type="text" placeholder="Search..." 
	        onChange={this.onChange} />
      </form>
    );
  }
}

export default connect()(SearchBar);
//ref={input => this.searchInput = input}