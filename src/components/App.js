import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import LoanPage from './loan-page';
import BorrowPage from './borrow-page';
import ItemPage from './item-page';
import Sidebar from './sidebar';

export default class App extends React.Component {
  render() {
    return (
        <Router>
            
            <main>
                <Switch>
                    <Route path ="/" component={Sidebar} /> 
                    <Route exact path='/items/loans' component={LoanPage} />
                    <Route exact path = '/items/borrows' component={BorrowPage} />
                    <Route exact path = '/' component={ItemPage} />
                  </Switch>
            </main>
        </Router>
    );
  }
}