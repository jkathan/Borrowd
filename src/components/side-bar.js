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
            <div>
                 <div className="desktop">
                    <ul className="navbarLeft">
                        <li><img src={'https://i.imgur.com/Z4XP0V8.png'} className='navLeft'/></li>
                        <li><Link to="/items/items" className='floatLeftNav'>Borrowd</Link></li>
                        <li className="folder-menu-list-item">
                            <Link to= '/items/items' className='link headerLink'>
                                Dashboard 
                            </Link>
                        </li>                                
                        <li className="folder-menu-list-item">
                            <Link to= '/items/loans' className='link headerLink'>
                                Loans ({overdueLoans})
                            </Link>
                        </li>
                        <li className="folder-menu-list-item">
                            <Link to= '/items/borrows' className='link headerLink'>
                                Borrows ({overdueBorrows})
                            </Link>
                        </li>
                        <li className="folder-menu-list-item">
                            <Link to= '/' className='link headerLink'>
                                    Log Out
                            </Link>
                        </li>
                    </ul>
                 </div>

        <div className="mobile">
            <div className='navbarLeft'>
                <img src={'https://i.imgur.com/J1nsguo.png'} className='logo'/>
                <h2>Borrowd</h2>
            </div>
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
                        <Link to= '/'>
                                Log Out
                        </Link>
                    </ul>
                }
                </div>
            </div>
        </div>
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

