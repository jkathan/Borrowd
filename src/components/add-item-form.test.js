import React from 'react';
import {shallow, mount} from 'enzyme';
import {addItem} from '../actions/index';
import {AddItemForm} from './add-item-form';

describe('<AddItemForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddItemForm />);
    });

    it('Should not fire if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<AddItemForm />);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
});
    it('Dispatches addItem from onSubmit', () => {
        const dispatch = jest.fn();
        const item = 'banana';
        const itemType = 'tool';
        const wrapper = shallow(
            <AddItemForm dispatch={dispatch} />
        );
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(addItem(itemType, item));
    });
});