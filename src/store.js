import {createStore, combineReducers} from 'redux'

import {loanReducer} from './reducers/index';
import {filtersReducer} from './reducers/filter';


const rootReducer =
        combineReducers({
            loanList: loanReducer,
            filters: filtersReducer
        }
    );

export default createStore(rootReducer);