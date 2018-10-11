import * as actions from '../actions/index';

const initialState = {

borrowList: [
  {listId: 0, itemType: 'Tool', item: 'Wrench', loaner: 'Bob', email: 'fake@email.com', phone: '301-555-555', returnDate: '2019-09-10', dateAdded: '2018-06-14'},
  {listId: 1, itemType: 'Money', item: '$300', loaner: 'john', email: 'fake@email.com', phone: '301-555-555', returnDate: '2019-09-18', dateAdded: '2018-06-13'},
  {listId: 2, itemType: 'Tool', item: 'Tablesaw', loaner: 'bill', email: 'fake@email.com', phone: '301-555-555', returnDate: '2019-09-17', dateAdded: '2018-06-12'},
  {listId: 3, itemType: 'Clothing', item: 'Jean Jacket', loaner: 'ian', email: 'fake@email.com', phone: '301-555-555', returnDate: '2019-09-16', dateAdded: '2018-06-11'},
  {listId: 4, itemType: 'Electronic', item: 'Headphones', loaner: 'janet', email: 'fake@email.com', phone: '301-555-555', returnDate: '2019-09-15', dateAdded: '2018-06-10'},
  {listId: 5, itemType: 'Other', item: 'Bike', loaner: 'greta', email: 'fake@email.com', phone: '301-555-555', returnDate: '2019-09-14', dateAdded: '2018-06-09'}
]
};

export const borrowReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_CARD) {
        return Object.assign({}, state, {
            borrowList: [...state.loanList, {
                  itemType: action.itemType,
                  item: action.item,
                  loaner: action.loaner, 
                  email: action.email, 
                  phone: action.phone, 
                  returnDate: action.date.toString(),
                  dateAdded: action.dateAdded
            }]
            });
    }

   else if (action.type === actions.RETURN_BORROW_ITEM) {
      return Object.assign({}, state, {
        borrowList: state.borrowList.filter((id) => id.listId !== action.itemId)
      })
    }
    

    else if (action.type === actions.RENEW_ITEM) {
      return Object.assign({}, state, {
        borrowList: state.borrowList.map((i) => (
        i.listId === action.itemId ? 
        {...i, returnDate: action.returnDate} : i))
    })
  }
/*
  else if (action.type === actions.CURRENT_DATE) {
      return {
          ...state,
        currentDate: action.currentDate 
        }
    }*/
    return state;
  }