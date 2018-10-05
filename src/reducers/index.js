import * as actions from '../actions';

const initialState = {
    loanList: [
  {type: 'tool', item: 'Wrench', borrower: 'Bob', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', borrower: 'john', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', borrower: 'bill', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', borrower: 'ian', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', borrower: 'janet', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', borrower: 'greta', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'}
]};

export const loanReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_LOAN_CARD) {
        return Object.assign({}, state, {
            loanList: [...state.loanList], 
              loancard
              ]
            });
    }
    return state;
};

