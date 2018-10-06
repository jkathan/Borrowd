import {createStore} from 'redux'

import {loanReducer} from './reducers';

export default createStore(loanReducer);
