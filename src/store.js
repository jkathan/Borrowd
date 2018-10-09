import {createStore, combineReducers} from 'redux'

import {loanReducer} from './reducers/loan';
import {filtersReducer} from './reducers/filters';
//export default createStore(loanReducer);

export default () => {
    return createStore(
        combineReducers({
            loanList: loanReducer,
            filters: filtersReducer
        }
    ));
};