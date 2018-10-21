import React from 'react';
import {shallow, mount} from 'enzyme';
import {registerUser} from '../actions/users';
import {updateUsername} from '../actions/index';
import {initialBoardAdd} from '../actions/index';
import {RegisterationForm} from './registration-form';

describe('<RegisterationForm />', () => {
    it('Renders without crashing', () => {
        mount(<RegistrationForm />);
    });

    it('Should fire the onSubmit functon when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = shallow(<RegisterationForm onSubmit={callback} />);
        const value = 'Foobar';
        wrapper.update();
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });

    it('Should not fire if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = shallow(<RegisterationForm />);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
});
    it('Dispatches updateUsername from onSubmit', () => {
        const dispatch = jest.fn();
        const username = 'tool';
        const wrapper = shallow(
            <RegisterationForm dispatch={dispatch} />
        );
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(updateUsername(username));
    });
    it('Dispatches initialBoardAdd from onSubmit', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(
            <RegisterationForm dispatch={dispatch} />
        );
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(initialBoardAdd());
    });
});