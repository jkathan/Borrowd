import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//import {clearAuth} from '../actions/auth';
//import {clearAuthToken} from '../local-storage';
import moment from 'moment';
import './sidebar.css';

export class Sidebar extends React.Component {
    constructor(props){
  super(props)
  this.state = {
    listOpen: false,
    headerTitle: "Menu"
  }
}

    logOut() {
        this.props.history.push(`/`);
    }

    toggleList(){
    this.setState(prevState => ({
    listOpen: !prevState.listOpen
            })
        )
    }
    render () {
        const dates = this.props.loanList.loanList.map(a => a.returnDate);
        const currentDate = moment().format('YYYY-MM-DD');
        console.log(dates);
        console.log(currentDate);
        const overdueLoansDate = dates.filter(x => {
            return x < currentDate
        });
        const overdueLoans = overdueLoansDate.length;
        const borrowDates = this.props.loanList.borrowList.map(b => b.returnDate)
        const overdueBorrowsDate = borrowDates.filter(z => {
            return z < currentDate
        });
        const overdueBorrows = overdueBorrowsDate.length
        console.log(overdueLoans);
    const{list} = this.props
    const{listOpen, headerTitle} = this.state
    return (
        <nav>
            <div className="dd-wrapper" >
                <div className="dd-header" onClick={() => this.toggleList()}>
                    <div className="dd-header-title">{headerTitle}</div>                
                            {listOpen
              ? <text>&#9710;</text>
              : <text>&#10729;</text>
            }
            </div>
            {listOpen &&
                    <ul className="folder-menu-list">
                        <li className=" .dd-list-item folder-menu-list-item">
                            <Link to= '/items/items'>
                                Dashboard 
                            </Link>
                        </li>                                
                        <li className=" .dd-list-itemfolder-menu-list-item">
                            <Link to= '/items/loans'>
                                Loans ({overdueLoans})
                            </Link>
                        </li>
                        <li className=" .dd-list-item folder-menu-list-item">
                            <Link to= '/items/borrows'>
                                Borrows ({overdueBorrows})
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => this.logOut()}>Log out</button>
                        </li>
                    </ul>
                }
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
/*    const loansList = Object.assign(
        {},
        {
            loanList: []
        },
        state.loanList
    );*/
    
        loanList: state.loanList.board
        //borrowsList: getVisibleBorrowItem(state.borrowList, state.filters)
    //};

})

export default connect(mapStateToProps)(Sidebar);      

