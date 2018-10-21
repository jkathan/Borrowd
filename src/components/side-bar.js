import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import './sidebar.css';

export class Sidebar extends React.Component {

    logOut() {
        this.props.history.push(`/`);
    }

    render () {
        const dates = this.props.loanList.loanList.map(a => a.returnDate);
        const currentDate = moment().format('YYYY-MM-DD');
        const overdueLoansDate = dates.filter(x => {
            return x < currentDate
        });
        const overdueLoans = overdueLoansDate.length;
        const borrowDates = this.props.loanList.borrowList.map(b => b.returnDate)
        const overdueBorrowsDate = borrowDates.filter(z => {
            return z < currentDate
        });
        const overdueBorrows = overdueBorrowsDate.length
    return (
            <div>
                 <div className="desktop2">
                    <ul className="navbarLeft2">
                        <li><img src={'https://i.imgur.com/Z4XP0V8.png'} className='navLeft2' alt='handshaking symbol'/></li>
                        <li><Link to="/items/items" className='floatLeftNav2'>Borrowd</Link></li>
                        <li className="folder-menu-list-item2">
                            <Link to= '/items/items' className='link headerLink'>
                                Dashboard 
                            </Link>
                        </li>                                
                        <li className="folder-menu-list-item2">
                            <Link to= '/items/loans' className='link headerLink2'>
                                Loans ({overdueLoans})
                            </Link>
                        </li>
                        <li className="folder-menu-list-item2">
                            <Link to= '/items/borrows' className='link headerLink2'>
                                Borrows ({overdueBorrows})
                            </Link>
                        </li>
                        <li className="folder-menu-list-item2">
                            <Link to= '/' className='link headerLink2'>
                                    Log Out
                            </Link>
                        </li>
                    </ul>
                 </div>
                <div className="banner2">
                    <div className='bannerLeft2'>
                            <div className='bannerRight2'>
                                <h1 className='title2'>Borrowd</h1>
                                <div className='navbutton2s'>
                                    <div className='dashboarButton2'> 
                                        <Link to= '/items/items' className='navigateButtons2'>
                                            Dashboard 
                                        </Link>
                                    </div>
                                    <div className='loanedButton2'>                           
                                        <Link to= '/items/loans' className='navigateButtons2'>
                                            Loans ({overdueLoans})
                                        </Link>
                                    </div>
                                    <div className='BorrowsButton2'>                                                 
                                        <Link to= '/items/borrows' className='navigateButtons2'>
                                            Borrows ({overdueBorrows})
                                        </Link>
                                    </div>
                                    <div className='logoutButton2'>                                                 
                                        <Link to= '/' className='navigateButtons2'>
                                            Log Out
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    loanList: state.loanList.board
})

export default connect(mapStateToProps)(Sidebar);      

