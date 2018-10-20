import React from 'react';
import {shallow, mount} from 'enzyme';
import {returnLoanItem} from '../actions/index';
import {addItem} from '../actions/index';
import ItemList from './item-list'
import ItemCheckoutCard from './item-borrow-card';

describe('<ItemCheckoutCard />', () => {
    it('Renders without crashing', () => {
    	const dispatch = jest.fn();
        shallow(<ItemCheckoutCard dispatch={dispatch} />);

    });

    it('Renders the text', () => {
        const itemType= 'Foo';
        const item = 'foo';
        const borrower = 'foo';
        const wrapper = shallow(<ItemCheckoutCard itemType = {itemType} item ={item} borrower ={borrower} />);
        expect(wrapper.contains(itemType)).toEqual(true);
        expect(wrapper.contains(item)).toEqual(true);
        expect(wrapper.contains(borrower)).toEqual(true);
    });

    it('Dispatches returnLoanItem from returnItem', () => {
        const dispatch = jest.fn();
        const index = 2;
        const wrapper = mount(
            <ItemCheckoutCard listId={index} dispatch={dispatch} />
        );
        wrapper.find('button').simulate('click');
        expect(dispatch).toHaveBeenCalledWith(returnLoanItem(index));
	});
        it('Dispatches addItem from returnItem', () => {
        const dispatch = jest.fn();
        const itemType= 'Foo';
        const item = 'foo';
        const wrapper = mount(
            <ItemCheckoutCard itemType = {itemType} item ={item} dispatch={dispatch} />
        );
        wrapper.find('button').simulate('click');
        expect(dispatch).toHaveBeenCalledWith(addItem(itemType, item));
    });
});