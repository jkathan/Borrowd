import React from 'react';
import {shallow} from 'enzyme';

import ItemPage from './loan-page';

describe('<ItemPage />', () => {
    it('Renders without crashing', () => {
        shallow(<ItemPage />);
    });
});