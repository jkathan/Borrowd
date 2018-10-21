import React from 'react';
import {shallow, mount} from 'enzyme';

import {ItemLoanForm} from './item-loan-form';
import {updateBoard} from '../actions/index';
import {removeItemFromList} from '../actions/index';

describe('<ItemLoanForm />', () => {
    it('Renders without crashing', () => {
        shallow(<ItemLoanForm />);
    });

    it('Should fire the onSubmit functon when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<ItemLoanForm onAdd={callback} />);
        const value = 'Foobar';
        wrapper.update();
        wrapper.find('input[type="text"]').value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });

    it('Should not fire if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<ItemLoanForm />);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
});

    it('Dispatches remove item from list from onSubmit', () => {
        const dispatch = jest.fn();
        const listId = 1;
        const wrapper = shallow(
            <ItemLoanForm dispatch={dispatch} />
        );
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(removeItemFromList(itemId));
    });
        it('dispatches update board from on submit', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(
            <ItemLoanForm dispatch={dispatch} />
        );
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(updateBoard());
    });
});
