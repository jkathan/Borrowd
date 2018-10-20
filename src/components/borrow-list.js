import React from 'react';
import {connect} from 'react-redux';
import BorrowForm from './borrow-form';
import BorrowCard from './borrow-card';
import moment from 'moment';
import './sidebar.css';

export class BorrowList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const borrowDates = this.props.borrowList.borrowList.map(b => b.returnDate)
        const currentDate = moment().format('YYYY-MM-DD');
        const overdueBorrowsDate = borrowDates.filter(z => {
            return z < currentDate
        });
        const overdueBorrows = overdueBorrowsDate.length
        const sortedList = this.props.borrowList.borrowList.sort((a, b) => (a.returnDate > b.returnDate) ? 1 : ((b.returnDate > a.returnDate) ? -1 : 0));
        const borrowlist = sortedList.map((borrow, index) => (
            <ul className="list-wrapper">  
                <BorrowCard 
                listId={borrow.listId}
                {...borrow} />
            </ul>
        )
    )
        return (
                <div>
                 <div className='notifications'>
                    <div className = 'borrowNotificationPage'>
                        <h3>You have:</h3> 
                        <h2>{overdueBorrows}</h2> 
                        <h3>Borrow(s) Overdue</h3>
                    </div>
                 </div>
                <div className='forms'>
                    <BorrowForm />
                </div>
                   <div className="lists">
                        <h2 className='sectionHeader'>Borrowed Items</h2>
                        {borrowlist}
                    </div>
                </div>
        );
    };
} 

const mapStateToProps = state => ({
        borrowList: state.loanList.board
})

export default connect(mapStateToProps)(BorrowList);