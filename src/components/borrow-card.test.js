import React from 'react';
import {shallow} from 'enzyme';
import {returnBorrowItem} from '../actions/index';
import {BorrowCard} from './borrow-card';

describe('<BorrowCard />', () => {
    it('Renders without crashing', () => {
        shallow(<BorrowCard />);
    });

    it('Renders the text', () => {
        const itemType= 'Foo';
        const item = 'foo';
        const loaner = 'foo';
        const email = 'foo@foo.org';
        const phone = '1234567891';
        const returnDate = '2018-10-08';
        const listId = 2;
        const wrapper = shallow(<BorrowCard itemType = {itemType} item ={item} loaner ={loaner} email = {email} phone ={phone} returnDate = {returnDate} />);
        expect(wrapper.itemType).toEqual(itemType);
        expect(wrapper.item).toEqual(item);
        expect(wrapper.loaner).toEqual(loaner);
        expect(wrapper.email).toEqual(email);
        expect(wrapper.phone).toEqual(phone);
        expect(wrapper.returnDate).toEqual(returnDate);
    });


    it('Dispatches returnBorrowItem from returnItem', () => {
        const dispatch = jest.fn();
        const index = 2;
        const wrapper = shallow(
            <BorrowCard index={index} dispatch={dispatch} />
        );
        const instance = wrapper.instance();
        instance.returnBorrowItem(index);
        expect(dispatch).toHaveBeenCalledWith(returnBorrowItem(index));
    });
});