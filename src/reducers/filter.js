import * as actions from '../actions/filter';

const filtersReducerDefaultState = {
	searchTerm: '',
	sortFilter: 'Due Date'
}
export const filtersReducer = (state = filtersReducerDefaultState, action) => {
    if (action.type === actions.FILTER_TEXT) {
            return {
                ...state,
                searchTerm: action.text.toLowerCase()
            };
        }
    /*if (action.type === actions.SORT_FILTER) {
            return {
                ...state,
                sortFilter: action.sortFilter
            };
        }*/

            return state;
    }