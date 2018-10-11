import React from 'react';
import LoanList from './loan-list';
import Sidebar from './sidebar.js';

const LoanPage = () => (
    <div className='container__list'>
        <SideBar />
        <LoanList />
    </div>
);

export default LoanPage;