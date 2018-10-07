import React from 'react';

import LoanCard from './loan-card';

export default class LoanSearchList extends React.Component {
	    constructor(props) {
        super(props);
    }
 render() {
	const loancards = this.props.loansList.map((loan, index) => (
            <li key={index}>
                <LoanCard 
                listId={index}
                {...loan} />
            </li>
        )
    )
    console.log(props.loancards);
    return (
        <ul className="character-list" aria-live="polite">
            {loancards}
        </ul>
    	);
	};
}