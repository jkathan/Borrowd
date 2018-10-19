import React from 'react';
import {shallow, mount} from 'enzyme';
import {addBorrowCard} from '../actions/index';
import {BorrowForm} from './borrow-form';

describe('<BorrowForm />', () => {
    it('Renders without crashing', () => {
        shallow(<BorrowForm />);
    });

    it('Should fire the onSubmit functon when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<BorrowForm onSubmit={callback} />);
        const value = 'Foobar';
        wrapper.update();
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });

    it('Should not fire if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<BorrowForm />);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
});
    it('Dispatches addItem from onSubmit', () => {
        const dispatch = jest.fn();
       const itemType = 'tool';
        const item = 'foo';
        const loaner = 'foo';
        const email = 'foo@foo.com';
        const phone = '1234567891';
        const date = '2018-10-08';
        const wrapper = shallow(
            <BorrowForm dispatch={dispatch} />
        );
        const instance = wrapper.instance();
        instance.addBorrowCard(itemType, item, loaner, email, phone, date, dateAdded);
        expect(dispatch).toHaveBeenCalledWith(addBorrowCard(itemType, item));
    });
});