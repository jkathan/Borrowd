import React from 'react';
import {shallow} from 'enzyme';

import BorrowList from './borrow-list';
import Sidebar from './side-bar';
import {BorrowPage} from './borrow-page';

    it('Renders without crashing', () => {
        shallow(<BorrowPage />);
    });
