import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import LoanList from './components/loan-list';
import LoanForm from './components/loan-form'

export default function App(props) {
    return (
        <Router>
                <Switch>
                    <Redirect exact from="/" to="/inbox" />
                    <Route exact path='/items/loans' component={LoanList} />
                    <Route exact path='/items/loanform' component={LoanForm} />
                  </Switch>
            </div>
        </Router>
    );
}