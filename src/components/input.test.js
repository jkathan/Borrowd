import React from 'react';
import {shallow} from 'enzyme';

import Input from './input';

describe('<Input />', () => {
    it('Renders without crashing', () => {
        const wrapper = shallow(<Input />);
        expect(wrapper).toHaveLength(1)
    });
});