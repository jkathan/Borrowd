import React from 'react';
import ItemList from './Item-list';
import Sidebar from './sidebar.js';

const LoanPage = () => (
    <div className='container__list'>
        <SideBar />
        <ItemList />
    </div>
);

export default LoanPage;