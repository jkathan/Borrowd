import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';

export const login = (username, password) => (dispatch, getState) => {
        fetch(`${API_BASE_URL}/auth/login/${username}`)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(res => res.json())
            .catch(err => {
                const {code} = err;
                const message =
                    code === 401
                        ? 'Incorrect username or password'
                        : 'Unable to login, please try again';
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            })
        };

