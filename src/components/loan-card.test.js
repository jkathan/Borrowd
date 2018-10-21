import React from 'react';
import {shallow} from 'enzyme';
import RenewLoanForm from './loan-renew-form';
import {returnLoanItem} from '../actions/index';
import {renewLoanItem} from '../actions/index';
import {addItem} from '../actions/index';
import {LoanCard} from './loan-card';

describe('<LoanCard />', () => {
    it('Renders without crashing', () => {
        shallow(<LoanCard />);
    });

    it('Renders the text', () => {
        const itemType= 'Foo';
        const item = 'foo';
        const borrower = 'foo';
        const email = 'foo@foo.org';
        const phone = '1234567891';
        const returnDate = '2018-10-08';
        const listId = 2;
        const wrapper = shallow(<LoanCard itemType = {itemType} item ={item} borrower ={borrower} email = {email} phone ={phone} returnDate = {returnDate} />);
        expect(wrapper.itemType()).toEqual(itemType);
        expect(wrapper.item()).toEqual(item);
        expect(wrapper.borrower()).toEqual(borrower);
        expect(wrapper.email()).toEqual(email);
        expect(wrapper.phone()).toEqual(phone);
        expect(wrapper.returnDate()).toEqual(returnDate);
    });


    it('Dispatches returnLoanItem from returnItem', () => {
        const dispatch = jest.fn();
        const index = 2;
        const wrapper = shallow(
            <LoanCard index={index} dispatch={dispatch} />
        );
        const instance = wrapper.instance();
        wrapper.simulate('return');
        expect(dispatch).toHaveBeenCalledWith(returnLoanItem(index));
    });
});