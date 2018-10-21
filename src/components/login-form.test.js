import React from 'react';
import {shallow, mount} from 'enzyme';
import LandingPageHeader from './landing-page-header';
import {updateUsername} from '../actions/index';
import {LoginForm} from './login-form';

describe('<LoginForm />', () => {
    it('Renders without crashing', () => {
        shallow(<RenewLoanForm />);
    });

    it('Should fire the onSubmit functon when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<LoginForm onSubmit={callback} />);
        const value = 'Foobar';
        wrapper.update();
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });

    it('Should not fire if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<LoginForm />);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
});
    it('Dispatches updateUsername from onSubmit', () => {
        const dispatch = jest.fn();
        const username = 'tool';
        const wrapper = shallow(
            <LoginForm dispatch={dispatch} />
        );
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(updateUsername(username));
    });
});