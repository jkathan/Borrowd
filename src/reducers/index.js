import * as actions from '../actions';

const initialState = {
    loanList: [
  {listId: 0, itemType: 'tool', item: 'Wrench', borrower: 'Bob', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {listId: 1, itemType: 'tool', item: 'Hammer', borrower: 'john', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {listId: 2, itemType: 'tool', item: 'Tablesaw', borrower: 'bill', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {listId: 3, itemType: 'tool', item: 'Wrench', borrower: 'ian', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {listId: 4, itemType: 'tool', item: 'Wrench', borrower: 'janet', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {listId: 5, itemType: 'tool', item: 'Wrench', borrower: 'greta', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'}
],
  type: [],
  returnDate: [],
};

export const loanReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_LOAN_CARD) {
        return Object.assign({}, state, {
            loanList: [...state.loanList, {
                  itemType: action.itemType,
                  item: action.item,
                  borrower: action.borrower, 
                  email: action.email, 
                  phone: action.phone, 
                  date: action.date.toString()
            }]
            });
    }
   else if (action.type === actions.RETURN_ITEM) {
      return {loanList: state.loanList.filter((id) => id.listId !== action.itemId)};
    };
    else if (action.type === actions.RENEW_ITEM) {
      return state.loanList.map((i) => (
        i.listId === action.itemId ? {...i, returnDate: action.returnDate}: i))
    };
    return state;
//};
}
