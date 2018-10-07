import React from 'react';

export default class SearchBar extends React.Component {
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
