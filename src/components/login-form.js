import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {updateUsername} from '../actions/index';
import LandingPageHeader from './landing-page-header';
import './login-form.css';

export class LoginForm extends React.Component {

    onSubmit(values) {
        const username = values.username;
        this.props.dispatch(updateUsername(username));
        this.props.dispatch(login(values.username, values.password));
        this.props.history.push(`/items/items`);
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <div className='loginForm'>
                    <div className="navBar">
                        <LandingPageHeader />
                    </div>
                <div className='form'>
                    <h2>Login</h2>
                    <img src='https://i.imgur.com/u3pf8gs.png' className='loginImage' alt='person symbol'/>
                    <div className='demo'>
                        <h3>Demo User:</h3>
                        <p>Username: demo</p>
                        <p>Password: password12324</p>
                    </div>
                    <form
                        className="login-form"
                        >
                        {error}
                        <label htmlFor="username">Username:</label>
                        <Field
                            component={Input}
                            type="text"
                            name="username"
                            id="username"
                            validate={[required, nonEmpty]}
                        />
                        <label htmlFor="password">Password:</label>
                        <Field
                            component={Input}
                            type="password"
                            name="password"
                            id="password"
                            validate={[required, nonEmpty]}
                        />
                        <button 
                        className ='entranceButtons'
                        onClick={this.props.handleSubmit(values =>
                            this.onSubmit(values)
                        )}
                        disabled={this.props.pristine || this.props.submitting}>
                            Log in
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);