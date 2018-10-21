import React from 'react';
import {shallow, mount} from 'enzyme';
import {updateBoard} from '../actions/index';
import {RenewLoanForm} from './loan-renew-form';

describe('<RenewLoanForm />', () => {
    it('Renders without crashing', () => {
        shallow(<RenewLoanForm />);
    });

    it('Should fire the onSubmit functon when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<RenewLoanForm onSubmit={callback} />);
        const value = 'Foobar';
        wrapper.update();
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });

    it('Should not fire if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<RenewLoanForm />);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
});

});