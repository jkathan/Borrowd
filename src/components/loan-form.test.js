import React from 'react';
import {shallow, mount} from 'enzyme';
import {addCard} from '../actions/index';
import {LoanForm} from './loan-form';

describe('<LoanForm />', () => {
    it('Renders without crashing', () => {
        shallow(<LoanForm />);
    });

    it('Should fire the onSubmit functon when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<LoanForm onSubmit={callback} />);
        const value = 'Foobar';
        wrapper.update();
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });

    it('Should not fire if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<LoanForm />);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
});

    it('Dispatches remove item from list from onSubmit', () => {
        const dispatch = jest.fn();
        const listId = 1;
        const wrapper = shallow(
            <LoanForm dispatch={dispatch} />
        );
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(removeItemFromList(itemId));
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