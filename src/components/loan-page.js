import React from 'react';
import LoanList from './loan-list';
import Sidebar from './side-bar';
import './sidebar.css';

export default class LoanPage extends React.Component {
	render() {    
    return (
    <div className='listPage'>
        <div className="navBar2">
        	<Sidebar />
        </div>	
        <LoanList />
    </div>
)}
}

