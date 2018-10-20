import React from 'react';
import {shallow, mount} from 'enzyme';

import {AddItemForm} from './add-item-form';

describe('<AddItemForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddItemForm />);
    });

    it('Should fire the onSubmit functon when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<AddItemForm onSubmit={callback} />);
        const value = 'Foobar';
        wrapper.update();
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
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