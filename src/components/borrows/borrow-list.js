import React from 'react';
import {connect} from 'react-redux';
import SearchBar from '../loan-search-bar';
//import LoanCard from './loan-card';
import BorrowForm from './borrow-form';
//import LoanSearchList from './loan-searchable-cards-list';
import BorrowCard from './borrow-card';
//import {addLoanCard} from '../actions/index';
//import {returnBorrowItem} from '.../actions/index';
//import {searchList} from '.../actions/index';
import {filterText} from '..../actions/filter';
import getVisibleItem from '..../selectors/lists';
import {filterDate} from '..../actions/filter';


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
        const borrowlist = this.props.borrowsList.map((borrow, index) => (
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
        console.log(loanlist);
        return (
            <ul className="list">
                  <SearchBar onChange={searchTerm => this.props.dispatch(filterText({searchTerm}))} />
                    <select onChange={this.onChange} ref = {(input)=> this.menu = input}>
                        <option value="Due Date">Due Date</option>
                        <option value="Recently Added">Recently Added</option>
                    </select>
                   <div>
                        <ul>
                            <li><LoanForm /></li>
                            <li>{loanlist}</li> 
                        </ul>
                    </div>
                </ul>
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
        borrowsList: getVisibleItem(state.borrowList, state.filters)
    //};

})

export default connect(mapStateToProps)(BorrowList);