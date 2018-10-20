import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import './landing-page.css';

export default class LandingPageHeader extends React.Component {
    constructor(props){
  super(props)
  this.state = {
    listOpen: false,
    headerTitle: "Menu"
  }
}

    toggleList(){
    this.setState(prevState => ({
    listOpen: !prevState.listOpen
            })
        )
    }
    render () {
    const{list} = this.props
    const{listOpen, headerTitle} = this.state
    return (
        <div>
                 <div className="desktop">
                    <ul className='navbarLeft'>
                        <li><img src={'https://i.imgur.com/Z4XP0V8.png'} className='navLeft'/></li>
                        <li><Link to="/" className='floatLeftNav'>Borrowd</Link></li>
                        <li className=" folder-menu-list-item">
                            <Link to= '/login' className='link headerLink'>
                                Login
                            </Link>
                        </li>                                
                        <li className=" folder-menu-list-item">
                            <Link to= '/register' className='link headerLink'>
                                Register
                            </Link>
                        </li>
                    </ul>

                 </div>

        <div className="mobile">
            <div className="dd-wrapper" >
                <div className="dd-header" onClick={() => this.toggleList()}>
                    <div className="dd-header-title">
                        {headerTitle}
                    </div>                
                        {listOpen ? <text>&#9710;</text> : <text>&#10729;</text>}
                </div>
            {listOpen &&
                    <ul className="folder-menu-list">
                        <li className=" .dd-list-item folder-menu-list-item">
                            <Link to= '/login' className='link headerLink'>
                                Login
                            </Link>
                        </li>
                        <Link to= '/register' className='link headerLink'>
                                Register
                        </Link>
                    </ul>
                }
                </div>
            </div>
        </div>
        );
    }
}
