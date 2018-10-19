import React from 'react';
import {connect} from 'react-redux';
import SearchBar from './loan-search-bar';
//import LoanCard from './loan-card';
import BorrowForm from './borrow-form';
//import LoanSearchList from './loan-searchable-cards-list';
import BorrowCard from './borrow-card';
//import {addLoanCard} from '../actions/index';
//import {returnBorrowItem} from '.../actions/index';
//import {searchList} from '.../actions/index';
import {filterText} from '../actions/filter';
import getVisibleBorrowItem from '../selectors/borrows';
import {filterDate} from '../actions/filter';
import './lists.css';

export class BorrowList extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {
        //    searchTerm: ''
        //}
        this.onChange = this.onChange.bind(this);

    }

    onChange(event) {
        const sortFilter = this.menu.value;
        console.log(sortFilter);
        this.props.dispatch(
            filterDate(sortFilter));
    }

    render() {
        console.log(this.props.borrowList);
        const sortedList = this.props.borrowList.borrowList.sort((a, b) => (a.returnDate > b.returnDate) ? 1 : ((b.returnDate > a.returnDate) ? -1 : 0));
        //console.log(sortedList);
        const borrowlist = sortedList.map((borrow, index) => (
            <ul className="list-wrapper">  
                <BorrowCard 
                listId={borrow.listId}
                {...borrow} />
            </ul>
        )
    )
        /*let loansList = this.props.loansList.filter(loan =>
            loan.item.toString().toLowerCase().includes(
                this.state.searchTerm.toString().toLowerCase()
            )                    />

        )*/
//loan form will be link after routers
        console.log(borrowlist);
        return (
            <div>
                   <div className="lists">
                        <ul className="floats marginish">
                            <li className="floats"><BorrowForm /></li>
                            <ul>{borrowlist}</ul> 
                        </ul>
                    </div>
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
    //return {
        borrowList: state.loanList.board
    //};

})

export default connect(mapStateToProps)(BorrowList);