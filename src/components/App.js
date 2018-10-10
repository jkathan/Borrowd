import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import LoanPage from './Loans/loan-page';
import BorrowPage from './borrows/borrow-page';

export default class App extends React.Component {
  render() {
    return (
        <Router>
                <Switch>
                    <Route exact path='/items/loans' component={LoanPage} />
                    <Route exact path = '/items/borrows' component={BorrowPage} />
                  </Switch>
        </Router>
    );
  }
}