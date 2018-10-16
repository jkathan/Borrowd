import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter} from 'react-router-dom';
import LoanPage from './loan-page';
import BorrowPage from './borrow-page';
import ItemPage from './item-page';
import {connect} from 'react-redux';
import LoginForm from './login-form';
import RegistrationPage from './registration-page';
import {refreshAuthToken} from '../actions/auth';
import LandingPage from './landing-page';

export default class App extends React.Component {
      /*componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }*/
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
                    <Route exact path = '/register' component={RegistrationPage} />
                  </Switch>
            </main>
        </Router>
    );
  }
}
/*
const mapStateToProps = state => ({
    //hasAuthToken: state.auth.authToken !== null,
    //loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));*/