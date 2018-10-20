import React from 'react';
import LoanList from './loan-list';
import Sidebar from './side-bar';

export default class LoanPage extends React.Component {
	render() {    
    return (

    <div className='listPage'>
        <div className="navBar">
        	<Sidebar />
        </div>	
        <LoanList />
    </div>
)}
}

