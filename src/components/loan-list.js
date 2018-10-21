import React from 'react';
import {connect} from 'react-redux';
import LoanForm from './loan-form';
import LoanCard from './loan-card';
import moment from 'moment';
import './sidebar.css';


export class LoanList extends React.Component {
    render() {
        const dates = this.props.loansList.loanList.map(a => a.returnDate);
        const currentDate = moment().format('YYYY-MM-DD');
        const overdueLoansDate = dates.filter(x => {
            return x < currentDate
        });
        const overdueLoans = overdueLoansDate.length;
            const sortedList = this.props.loansList.loanList.sort((a, b) => (a.returnDate > b.returnDate) ? 1 : ((b.returnDate > a.returnDate) ? -1 : 0));
            const loanlist = sortedList.map((loan, index) => (
            <ul className="list-wrapper-plus"> 
                <LoanCard 
                listId={loan.listId}
                {...loan} />
            </ul>
        )
    )
        return (
            <div className="responsivePage">
                <div className='notifications'>
                    <div className = 'borrowNotificationPage'>
                        <h3>You have:</h3> 
                        <h2>{overdueLoans}</h2> 
                        <h3>Loan(s) Overdue</h3>
                    </div>
                </div>
                <div className='forms'>
                    <LoanForm />
                </div>
                  <div className="lists">
                        <h2 className='sectionHeader'>Loaned Items</h2>
                        <div className='listFormat'>
                            {loanlist}
                        </div>
                    </div>
                </div>
        );
    };
} 

const mapStateToProps = state => ({
        loansList: state.loanList.board
})

export default connect(mapStateToProps)(LoanList);
