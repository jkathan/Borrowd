import React from 'react';
import {connect} from 'react-redux';
import SearchBar from './loan-search-bar';
//import LoanCard from './loan-card';
import LoanForm from './loan-form';
//import LoanSearchList from './loan-searchable-cards-list';
import LoanCard from './loan-card';
//import {addLoanCard} from '../actions/index';
import {returnItem} from '../actions/index';
import {searchList} from '../actions/index';
import {filterText} from '../actions/filter';
import getVisibleItem from '../selectors/lists';
import {filterDate} from '../actions/filter';


export class LoanList extends React.Component {
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
        const loanlist = this.props.loansList.map((loan, index) => (
                <LoanCard 
                listId={index}
                {...loan} />
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
                   <div className="lists">
                        <ul className="flex-list">
                            <li className="floats"><LoanForm /></li>
                            <ul>{loanlist}</ul> 
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
        loansList: getVisibleItem(state.loanList, state.filters)
    //};

})

export default connect(mapStateToProps)(LoanList);
/*onAdd={(itemType, item, borrower, email, phone, date) => this.addCard(itemType, item, borrower, email, phone, date)}
                            <SearchBar onChange={searchTerm => this.setState({searchTerm})} />
                <LoanSearchList loansList = {loansList} />

                <li>
                        <h2><link to = {`/items/loanform`} >Loan out an item</link></h2>
                    </li>

                          filteredList: state.loanList.filter((search) => search.item.toLowerCase().includes(state.searchTerm)))

                    */