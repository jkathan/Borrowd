import React from 'react';
import {connect} from 'react-redux';
import SearchBar from './loan-search-bar';
//import LoanCard from './loan-card';
import LoanForm from './loan-form';
import LoanSearchList from './loan-searchable-cards-list';
import LoanCard from './loan-card';
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
        const loanlist = this.props.loansList.map((loan, index) => (
            <li key={index}>
                <LoanCard 
                listId={index}
                {...loan} />
            </li>
        )
    )
        /*let loansList = this.props.loansList.filter(loan =>
            loan.item.toString().toLowerCase().includes(
                this.state.searchTerm.toString().toLowerCase()
            )
        )*/

        console.log(loanlist);
        return (
            <ul className="list">
                   <div>
                        <LoanForm onAdd={(itemType, item, borrower, email, phone, date) => this.addCard(itemType, item, borrower, email, phone, date)}/>
                        {loanlist}
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
    );
    return {*/
        loansList: state.loanList
    //};

})

export default connect(mapStateToProps)(LoanList);

/*                                <SearchBar onChange={searchTerm => this.setState({searchTerm})} />
                <LoanSearchList loansList = {loansList} />

                <li>
                        <h2><link to = {`/items/loanform`} >Loan out an item</link></h2>
                    </li>
                    */