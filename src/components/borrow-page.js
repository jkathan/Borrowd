import React from 'react';
import BorrowList from './borrow-list';
import Sidebar from './side-bar';

const BorrowPage = () => (
    <div className='listPage'>
    	<div className="navBar">
        	<Sidebar />
        </div>	
        <BorrowList />
    </div>
);

export default BorrowPage;