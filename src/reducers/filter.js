const filtersReducerDefaultState = {
	searchTerm: ''
}
export const fildersReducer = ((state = filtersReducerDefaultState, action) => {
export default  => {
    switch (action.type) {
        case 'FILTER_TEXT':
            return {
                ...state,
                searchTerm: action.text
            };
        default:
            return state;
    }
}