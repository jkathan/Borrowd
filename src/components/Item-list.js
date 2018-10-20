import React from 'react';
import {connect} from 'react-redux';
import AddItemForm from './add-item-form';
import ItemRepo from './item-rep';
import {fetchBoard} from '../actions/index';
import moment from 'moment';
import './lists.css';
import BorrowForm from './borrow-form';
import LoanForm from './loan-form';
import {Link} from 'react-router-dom';


export class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchBoard())
    }

    render() {
        const dates = this.props.loanList.loanList.map(a => a.returnDate);
        const currentDate = moment().format('YYYY-MM-DD');
        const overdueLoansDate = dates.filter(x => {
            return x < currentDate
        });
        const overdueLoans = overdueLoansDate.length;
        const borrowDates = this.props.loanList.borrowList.map(b => b.returnDate)
        const overdueBorrowsDate = borrowDates.filter(z => {
            return z < currentDate
        });
        const overdueBorrows = overdueBorrowsDate.length
        /*const itemCheckedOutList = this.props.loanList.loanList.map((item, index) => (
             <ul className="list-wrapper">   
                <ItemCheckoutCard 
                listId={index}
                {...item} />
            </ul>
            )
        )*/

        const itemRepo = this.props.loanList.items.map((item, index) => (
            <ul className="list-wrapper">   
                <ItemRepo
                listId={index}
                {...item} />
            </ul>
            )               
        )
        return (
            <div >
                <div className='notifications'>
                    <div className="loanNotification">
                        <h3>You have:</h3> 
                        <h2>{overdueLoans}</h2> 
                        <h3>Loan(s) Overdue</h3>
                        <Link to= '/items/loans' className="notificationRight">Go to Page</Link>
                    </div>
                    <div className = 'borrowNotification'>
                        <h3>You have:</h3> 
                        <h2>{overdueBorrows}</h2> 
                        <h3>Borrow(s) Overdue</h3>
                        <Link to = '/items/borrows' className="notificationRight">Go to Page</Link>
                    </div>
                </div>
                <div className="forms">                    
                    <BorrowForm />
                    <LoanForm />
                    <AddItemForm />
                </div>
                <ul className="lists">
                        <h2 className='sectionHeader'>Previously Loaned Items:</h2>
                            <div className='listFormat'>{itemRepo}</div>

                </ul>
            </div>
        );
    };
} 

const mapStateToProps = state => ({
        loanList: state.loanList.board,
        username: state.loanList.username
})

export default connect(mapStateToProps)(ItemList);