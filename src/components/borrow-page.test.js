import React from 'react';
import {shallow} from 'enzyme';

import BorrowPage from './borrow-page';

describe('<BorrowPage />', () => {
    it('Renders without crashing', () => {
        shallow(<BorrowPage />);
    });
});