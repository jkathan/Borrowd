import React from 'react';

import LoanCard from './loan-card';

export default class LoanSearchList extends React.Component {
	    constructor(props) {
        super(props);
    }
 render() {
	const loancards = this.props.loansLists.map((loan, index) => (
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