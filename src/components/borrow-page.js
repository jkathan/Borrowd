import React from 'react';
import BorrowList from './borrow-list';
import Sidebar from './sidebar';

const BorrowPage = () => (
    <div className='container__list'>
    	<SideBar />
        <BorrowList />
    </div>
);

export default BorrowPage;