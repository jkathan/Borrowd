import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import RegistrationForm from './registration-form';
import LandingPageHeader from './landing-page-header';
import './login-form.css';

export default function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    return (
        <div>
            <div className="navBar">
                <LandingPageHeader />
            </div>
            <div className="home">
                <h2>Register for Borrowd</h2>
                <img src='https://i.imgur.com/u3pf8gs.png' className='loginImage'/>
                <RegistrationForm />
                <p> Already a member?<Link to="/login"> Login here</Link></p>
            </div>
        </div>
    );
}

/*const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);*/