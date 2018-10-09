import React from 'react';
import LoanList from './loan-list';
import LoanFilters from './filter-list';

const LoanPage = () => (
    <div className='container__list'>
        <LoanFilters />
        <LoanList />
    </div>
);

export default LoanPage;