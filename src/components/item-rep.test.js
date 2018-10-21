import React from 'react';
import {shallow, mount} from 'enzyme';
import {addCard} from '../actions/index';
import {removeItemFromList} from '../actions/index';
import ItemLoanForm from './item-loan-form';
import {ItemRepo} from './item-rep';

describe('<ItemRepo />', () => {
    it('Renders without crashing', () => {
        shallow(<ItemRepo />);
    });

    it('Renders the text', () => {
        const itemType= 'Foo';
        const item = 'foo';
        const wrapper = shallow(<ItemRepo itemType = {itemType} item ={item} />);
        expect(wrapper.itemType()).toEqual(itemType);
        expect(wrapper.item()).toEqual(item);
    });

    it('Dispatches addItem from onSubmit', () => {
        const dispatch = jest.fn();
        const itemType = 'tool';
        const item = 'foo';
        const loaner = 'foo';
        const email = 'foo@foo.com';
        const phone = '1234567891';
        const date = '2018-10-08';
        const dateAdded = '2018-10-08';
        const wrapper = shallow(
            <ItemLoanForm dispatch={dispatch} />
        );
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(addCard(itemType, item, loaner, email, phone, date, dateAdded));
    });
});