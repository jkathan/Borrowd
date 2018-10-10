import {createStore, combineReducers} from 'redux'

import {loanReducer} from './reducers/index';
import {filtersReducer} from './reducers/filter';
import {borrowReducer} from './reducers/borrow';

const rootReducer =
        combineReducers({
            loanList: loanReducer,
            filters: filtersReducer,
            borrowList: borrowReducer
        }
    );

export default createStore(rootReducer);