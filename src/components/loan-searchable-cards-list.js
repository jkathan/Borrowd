import React from 'react';

import LoanCard from './loan-card';

class LoanSearchList extends React.Component {
 render() {
	const loancards = props.loansList.map((loan, index) => (
            <li key={index}>
                <LoanCard 
                listId={index}
                {...loan} />
            </li>
        )
    )
    return (
        <ul className="character-list" aria-live="polite">
            {loancards}
        </ul>
    	);
	};
}