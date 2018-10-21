import {createStore, applyMiddleware, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form';
import {loanReducer} from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore (
        combineReducers({
        	form: formReducer,
            loanList: loanReducer,
        }),
    	applyMiddleware(thunk)
);    

export default store;