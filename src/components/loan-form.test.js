import React from 'react';
import {shallow, mount} from 'enzyme';
import {addCard} from '../actions/index';
import {LoanForm} from './loan-form';
import {updateBoard} from '../actions/index';

describe('<LoanForm />', () => {
    it('Renders without crashing', () => {
        shallow(<LoanForm />);
    });

    it('Should not fire if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<LoanForm />);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
});

    it('dispatches update board from on submit', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(
            <LoanForm dispatch={dispatch} />
        );
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(updateBoard());
    });
});