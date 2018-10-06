import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import LoanList from './loan-list';
import LoanForm from './loan-form'

export default class App extends React.Component {
  render() {
    return (
        <Router>
                <Switch>
                    <Route exact path='/items/loans' component={LoanList} />
                    <Route exact path='/items/loanform' component={LoanForm} />
                  </Switch>
        </Router>
    );
  }
}