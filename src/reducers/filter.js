import * as actions from '../actions/filter';

const filtersReducerDefaultState = {
	searchTerm: '',
	todaysDate: ''
}
export const filtersReducer = (state = filtersReducerDefaultState, action) => {
    if (action.type === actions.FILTER_TEXT) {
            return {
                ...state,
                searchTerm: action.text.toLowerCase()
            };
        }
    /*if (action.type === actions.FILTER_DATE) {
            return {
                ...state,
                todaysDate: action.date
            };
        }*/

            return state;
    }