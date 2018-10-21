import React from 'react';
import {Link} from 'react-router-dom';
import './landing-page.css';

export default class LandingPageHeader extends React.Component {
    render () {
        return (
            <div>
                <div className="desktop">
                    <ul className='navbarLeft'>
                        <li><img src={'https://i.imgur.com/Z4XP0V8.png'} className='navLeft' alt='handshaking symbol'/></li>
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
            </div>
            );
        }
    }
