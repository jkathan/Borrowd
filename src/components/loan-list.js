import React from 'react';
import {connect} from 'react-redux';
import SearchBar from './loan-search-bar';
//import LoanCard from './loan-card';
import LoanForm from './loan-form';
//import LoanSearchList from './loan-searchable-cards-list';
import LoanCard from './loan-card';
import {addLoanCard} from '../actions';
import {returnLoanItem} from '../actions';
import {searchList} from '../actions';

export class LoanList extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {
        //    searchTerm: ''
        //}
    }

    returnItem(index) {
        console.log(index);
        this.props.dispatch(
           returnLoanItem(index) 
            );
    }

    render() {
        const loanlist = this.props.filteredList.map((loan, index) => (
                <LoanCard 
                listId={index}
                {...loan} />
        )
    )
        /*let loansList = this.props.loansList.filter(loan =>
            loan.item.toString().toLowerCase().includes(
                this.state.searchTerm.toString().toLowerCase()
            )
        )*/
//loan form will be link after routers
        console.log(loanlist);
        return (
            <ul className="list">
                   <div>
                   <SearchBar /*onChange={searchTerm => this.props.dispatch(searchList({searchTerm}))}*/ />
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
      filteredList: state.loanList.filter((search) => search.toLowerCase().includes(state.searchTerm))
    //};

})



export default connect(mapStateToProps)(LoanList);
/*onAdd={(itemType, item, borrower, email, phone, date) => this.addCard(itemType, item, borrower, email, phone, date)}
                            <SearchBar onChange={searchTerm => this.setState({searchTerm})} />
                <LoanSearchList loansList = {loansList} />

                <li>
                        <h2><link to = {`/items/loanform`} >Loan out an item</link></h2>
                    </li>return Object.assign({}, state, {
      filteredList: loanList.filter((search) => search.item.toLowerCase().includes(searchTerm))
    })
                    */