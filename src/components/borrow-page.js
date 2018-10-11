import React from 'react';
import BorrowList from './borrow-list';
import Sidebar from './side-bar';

const BorrowPage = () => (
    <div className='container__list'>
    	<Sidebar />
        <BorrowList />
    </div>
);

export default BorrowPage;