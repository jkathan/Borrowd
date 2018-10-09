import {createStore, combineReducers} from 'redux'

import {loanReducer} from './reducers/index';
import {filtersReducer} from './reducers/filter';
//export default createStore(loanReducer);

export default () => {
    return createStore(
        combineReducers({
            loanList: loanReducer,
            filters: filtersReducer
        }
    ));
};