import React from 'react';
import {connect} from 'react-redux';
import SearchBar from './loan-search-bar';
//import LoanCard from './loan-card';
import LoanForm from './loan-form';
import LoanSearchList from './loan-searchable-cards-list';

import {addLoanCard} from '../actions';

export class LoanList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

       addCard(itemType, item, borrower, email, phone, date) {

        this.props.dispatch(
            addLoanCard(itemType, item, borrower, email, phone, date, null)
        );
    }
    render() {
        const loansList = this.props.loansList.filter(loan =>
            loan.item.toLowerCase().includes(
                this.state.searchTerm.toLowerCase()
            )   
        )
        console.log(loansList);
        return (
            <div>
                <SearchBar onChange={searchTerm => this.setState({searchTerm})} />
                <ul className="list">
                   <div>
                        <LoanForm onAdd={(itemType, item, borrower, email, phone, date) => this.addCard(itemType, item, borrower, email, phone, date)}/>
                    </div>
                    <LoanSearchList loansList = {loansList} />
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
    );
    return {*/
        loansList: state.loanList
    //};

})

export default connect(mapStateToProps)(LoanList);

/*<li>
                        <h2><link to = {`/items/loanform`} >Loan out an item</link></h2>
                    </li>
                    */