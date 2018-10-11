import React from 'react';
import ItemList from './Item-list';
import Sidebar from './side-bar';

const LoanPage = () => (
    <div className='container__list'>
        <Sidebar />
        <ItemList />
    </div>
);

export default LoanPage;