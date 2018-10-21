import React from 'react';
import {shallow} from 'enzyme';

import SideBar from './side-bar';

describe('<SideBar />', () => {
    it('Renders without crashing', () => {
        shallow(<SideBar />);
    });
});