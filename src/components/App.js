import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoanPage from './loan-page';
import BorrowPage from './borrow-page';
import ItemPage from './item-page';
import LoginForm from './login-form';
import LandingPage from './landing-page';
import RegistrationForm from './registration-form';

export default class App extends React.Component {
  render() {
    return (
        <Router>
            
            <main>
                <Switch>
                    <Route exact path='/items/items' component={ItemPage} />
                    <Route exact path='/items/loans' component={LoanPage} />
                    <Route exact path = '/items/borrows' component={BorrowPage} />
                    <Route exact path = '/' component={LandingPage} />
                    <Route exact path = '/login' component={LoginForm} />
                    <Route exact path = '/register' component={RegistrationForm} />
                  </Switch>
            </main>
        </Router>
    );
  }
}
