import * as actions from '../actions/filter';

const filtersReducerDefaultState = {
	searchTerm: 'Wrench'
}
export const filtersReducer = (state = filtersReducerDefaultState, action) => {
    if (action.type === actions.FILTER_TEXT) {
            return {
                ...state,
                searchTerm: action.text
            };
        }
            return state;
    }