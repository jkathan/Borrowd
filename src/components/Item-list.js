import React from 'react';
import {connect} from 'react-redux';
//import SearchBar from './loan-search-bar';
//import LoanCard from './loan-card';
import AddItemForm from './add-item-form';
//import LoanSearchList from './loan-searchable-cards-list';
import ItemRepo from './item-rep';
import ItemCheckoutCard from './item-loan-card';
import ItemBorrowCard from './item-borrow-card'
//import {borrowList} from '../actions/index';
//import {returnBorrowItem} from '../actions/index';
//import {loanList} from '../actions/index';
//import {filterText} from '../actions/filter';
//import getVisibleListItem from '../selectors/items';
import {filterDate} from '../actions/filter';
import {fetchBoard} from '../actions/index';
import './lists.css';
import moment from 'moment';

export class ItemList extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {
        //    searchTerm: ''
        //}
                this.onChange = this.onChange.bind(this);

    }
    componentDidMount() {
        this.props.dispatch(fetchBoard())
    }
    onChange(event) {
        const sortFilter = this.menu.value;
        console.log(sortFilter);
        this.props.dispatch(
            filterDate(sortFilter));
    }

    render() {
        console.log(this.props.loanList);
        const dates = this.props.loanList.loanList.map(a => a.returnDate);
        const currentDate = moment().format('YYYY-MM-DD');
        console.log(dates);
        console.log(currentDate);
        const overdueLoansDate = dates.filter(x => {
            return x < currentDate
        });
        const overdueLoans = overdueLoansDate.length;
        const borrowDates = this.props.loanList[0].board[0].borrowList.map(b => b.returnDate)
        const overdueBorrowsDate = borrowDates.filter(z => {
            return z < currentDate
        });
        const overdueBorrows = overdueBorrowsDate.length
        console.log(overdueLoans);
        //console.log(this.props.borrowlist.borrowList);
        const itemCheckedOutList = this.props.loanList[0].board[0].loanList.map((item, index) => (
             <ul className="list-wrapper">   
                <ItemCheckoutCard 
                listId={index}
                {...item} />
            </ul>
        )
    )

        const itemRepo = this.props.loanList[0].board[0].items.map((item, index) => (
            <ul className="list-wrapper">   
                <ItemRepo
                listId={index}
                {...item} />
            </ul>
            )               
        )
            const borrowList = this.props.loanList[0].board[0].borrowList.map((item, index) => (
            <ul className="list-wrapper">    
                <ItemBorrowCard 
                listId={index}
                {...item} />
            </ul>
        )
    )
            console.log(itemRepo)
//loan form will be link after routers
        return (
            <div >
                <div>
                    <h2>{overdueLoans} Loan Overdue</h2>
                    <h2> {overdueBorrows} Borrows Overdue</h2>
                </div>
                <ul className="lists">
                    <li className="floats">
                        <h2>Your Borrowed Items</h2>                     
                        <div className="flex-list">
                            {borrowList}
                        </div>
                    </li>
                    <li className="floats">
                        <h2>Your Loaned Items</h2> 
                        <div className="flex-list">                    
                            {itemCheckedOutList}
                        </div>
                    </li>
                    <li className="floats">
                    <h2>Your Available Items</h2>
                    <div>
                        <li className="floats"><AddItemForm /></li>
                        <ul className="flex-list">{itemRepo}</ul>
                    </div>
                    </li>
                </ul>
            </div>
        );
    };
} 

const mapStateToProps = state => ({
/*    const loansList = Object.assign(
        {},
        {
            loanList: []
        },
        state.loanList
    );*/
    
        loanList: state.loanList.board,
        username: state.loanList.username
        //borrowsList: getVisibleBorrowItem(state.borrowList, state.filters)
    //};

})

export default connect(mapStateToProps)(ItemList);