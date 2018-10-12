import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './sidebar.css';

export class Sidebar extends React.Component {
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
  }))
}
    render () {
    const{list} = this.props
    const{listOpen, headerTitle} = this.state
    return (
        <div className="dd-wrapper" >
            <div className="dd-header" onClick={() => this.toggleList()}>
                <div className="dd-header-title">{headerTitle}</div>                
                        {listOpen
          ? <i className="fas fa-angle-up" size="2x"></i>
          : <i className="fas fa-angle-down" size="2x"></i>
        }
        </div>
        {listOpen &&
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
                        <Link to= '/items/borrows'>
                            Borrows
                        </Link>
                    </li>
                </ul>
            }
            </div>
        );
    }
}


export default connect()(Sidebar);
