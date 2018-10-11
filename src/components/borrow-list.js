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
        //console.log(this.props.borrowList);
        const borrowlist = this.props.borrowList.map((borrow, index) => (
                <BorrowCard 
                listId={index}
                {...borrow} />
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
                  <SearchBar onChange={searchTerm => this.props.dispatch(filterText({searchTerm}))} />
                    <label>Sort by:</label>
                    <select onChange={this.onChange} ref = {(input)=> this.menu = input}>
                        <option value="Due Date">Due Date</option>
                        <option value="Recently Added">Recently Added</option>
                    </select>
                   <div>
                        <ul className="list">
                            <li><BorrowForm /></li>
                            <li>{borrowlist}</li> 
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
        borrowList: getVisibleBorrowItem(state.borrowList, state.filters)
    //};

})

export default connect(mapStateToProps)(BorrowList);