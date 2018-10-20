import React from 'react';
import {shallow, mount} from 'enzyme';
import {returnBorrowItem} from '../actions/index';
import ItemList from './item-list'
import ItemBorrowCard from './item-borrow-card';

describe('<ItemBorrowCard />', () => {
    it('Renders without crashing', () => {
    	const dispatch = jest.fn();
        shallow(<ItemBorrowCard dispatch={dispatch} />);

    });

    it('Renders the text', () => {
        const itemType= 'Foo';
        const item = 'foo';
        const loaner = 'foo';
        const wrapper = shallow(<ItemBorrowCard itemType = {itemType} item ={item} loaner ={loaner} />);
        expect(wrapper.contains(itemType)).toEqual(true);
        expect(wrapper.contains(item)).toEqual(true);
        expect(wrapper.contains(loaner)).toEqual(true);
    });

    it('Dispatches returnBorrowItem from returnItem', () => {
        const dispatch = jest.fn();
        const index = 2;
        const wrapper = mount(
            <ItemBorrowCard listId={index} dispatch={dispatch} />
        );
        wrapper.find('button').simulate('click');
        expect(dispatch).toHaveBeenCalledWith(returnBorrowItem(index));
	});
});