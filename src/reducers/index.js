import * as actions from '../actions';

const initialState = {
    loanList: [
  {itemType: 'tool', item: 'Wrench', borrower: 'Bob', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {itemType: 'tool', item: 'Hammer', borrower: 'john', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {itemType: 'tool', item: 'Tablesaw', borrower: 'bill', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {itemType: 'tool', item: 'Wrench', borrower: 'ian', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {itemType: 'tool', item: 'Wrench', borrower: 'janet', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {itemType: 'tool', item: 'Wrench', borrower: 'greta', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'}
]};

export const loanReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_LOAN_CARD) {
        return Object.assign({}, state, {
            loanList: [...state.loanList, {
                  itemType: action.itemType,
                  item: action.item,
                  borrower: action.borrower, 
                  email: action.email, 
                  phone: action.phone, 
                  date: action.date,
            }]
            });
    }
    else if (action.type === actions.RETURN_ITEM) {
      return state.loanList.filter(({ id }) => id !== action.itemId);
      }
    return state;
};

