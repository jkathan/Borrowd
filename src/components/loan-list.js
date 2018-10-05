import React from 'react';
import {connect} from 'react-redux';

import LoanCard from './card';
import LoanForm from './add-form';

import {addLoanCard} from '../actions';

export class LoanList extends React.Component {
    addLoanCard(borrower, email, phone, date) {
        this.props.dispatch(
            //wahat is boardID and why is it necessary?
            addLoanCard(borrower, email, phone, date, this.props.listId, this.props.index)
        );
    }

    goToLoansList(event) {
        event.preventDefault();
        this.props.history.push(`/items/loanform`);
    }

    render() {
        const loancards = this.props.loans.map((loan, index) => (
            <li key={index}>
                <LoanCard 
                index={index}
                listId = {this.props.match.params.listId}
                {...loan} />
            </li>
        ));
        return (
            <div>
                <ul className="list">
                    
                    <li>
                        <button onClick={e => this.goToLoansForm(e)}>
                            <AddForm
                                type="card"
                                onAdd={borower => this.addLoanCard(borrower)}
                                onAdd={email => this.addLoanCard(email)}
                                onAdd={phone => this.addLoanCard(phone)}
                                onAdd={date => this.addLoanCard(date)}
                                />
                        </button>
                    </li>
                    {loancards}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    const loansList = Object.assign(
        //{},
        {
            loancards: []
        },
        state.loanslist[props.match.params.loanId]
    );

export default connect(mapStateToProps)(LoanList);