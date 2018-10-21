import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {updateUsername} from '../actions/index';
import {initialBoardAdd} from '../actions/index';
import Input from './input';
import './login-form.css';
import {Link} from 'react-router-dom';
import LandingPageHeader from './landing-page-header';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        this.props.dispatch(registerUser(user)).then(() => this.props.dispatch(updateUsername(user.username)))
        .then(() => this.props.dispatch(initialBoardAdd()));
        this.props.history.push(`/items/items`);
        }     

    render() {
        return (
            <div className='loginForm'>
                <div className="navBar">
                    <LandingPageHeader />
                </div>
            <div className='form'>
                <h2>Register for Borrowd</h2>
                <img src='https://i.imgur.com/u3pf8gs.png' className='loginImage' alt='person symbol'/>
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <label htmlFor="firstName">First name</label>
                    <Field component={Input} type="text" name="firstName" />
                    <label htmlFor="lastName">Last name</label>
                    <Field component={Input} type="text" name="lastName" />
                    <label htmlFor="username">Username</label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <label htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        validate={[required, passwordLength, isTrimmed]}
                    />
                    <label htmlFor="passwordConfirm">Confirm password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="passwordConfirm"
                        validate={[required, nonEmpty, matchesPassword]}
                    />
                    <button
                        className ='entranceButtons'
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Register
                    </button>
                </form>
                <p> Already a member?<Link to="/login"> Login here</Link></p>
                </div>
                </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
