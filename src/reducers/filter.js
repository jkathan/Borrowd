const filtersReducerDefaultState = {
	searchTerm: ''
}
export const fildersReducer = ((state = filtersReducerDefaultState, action) => {
    if (action.type === FILTER_TEXT) {
            return {
                ...state,
                searchTerm: action.text
            };
        }
            return state;
    }
)