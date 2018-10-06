import React from 'react';
import {connect} from 'react-redux';

import LoanCard from './loan-card';
import LoanForm from './loan-form';

export class LoanList extends React.Component {

    render() {
        const loancards = this.props.loansList.map((loan, index) => (
            <li key={index}>
                <LoanCard 
                listId={index}
                {...loan} />
            </li>
        ));
        return (
            <div>
                <ul className="list">
                   <div>
                        <LoanForm />
                    </div>
                    {loancards}
                </ul>
            </div>
        );
    };
}

const mapStateToProps = (state, props) => {
    const loansList = Object.assign(
        {},
        {
            loanList: []
        },
        state.loanList
    );
    return {
        loansList: loansList.loanList
    };

}

export default connect(mapStateToProps)(LoanList);

/*<li>
                        <h2><link to = {`/items/loanform`} >Loan out an item</link></h2>
                    </li>
                    */