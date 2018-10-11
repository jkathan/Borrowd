import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './sidebar.css';

class Sidebar extends React.Component {
    render () {
    return (
        <div className="sidebar sidebar-left">
            <nav className="folder-menu">
                <ul className="folder-menu-list">
                    <li className="folder-menu-list-item">
                        <Link to= '/'>
                            Dashboard
                        </Link>
                    </li>                                
                    <li className="folder-menu-list-item">
                        <Link to= '/items/loans'>
                            Loans
                        </Link>
                    </li>
                    <li className="folder-menu-list-item">
                        <Link to= '/items/loans'>
                            Borrows
                        </Link>
                    </li>
        
                </ul>
            </nav>
        </div>
        );
    }
}


export default connect()(Sidebar);
