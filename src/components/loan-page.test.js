import React from 'react';
import {shallow} from 'enzyme';

import LoanPage from './loan-page';

describe('<LoanPage />', () => {
    it('Renders without crashing', () => {
        shallow(<LoanPage />);
    });
});