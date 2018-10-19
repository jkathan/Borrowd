import * as actions from '../actions/index';

const initialState = {
  board: {
        loanList: [],
        borrowList: [],
        items: [] 
      },
  newId: ''
};



export const loanReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_CARD) {
        return Object.assign({}, state, {
          board: {
                  loanList: [...state.board.loanList, {
                    itemType: action.itemType,
                    item: action.item,
                    borrower: action.borrower, 
                    email: action.email, 
                    phone: action.phone, 
                    returnDate: action.date,
                    dateAdded: action.dateAdded,
                    listId: action.itemType+action.item+action.borrower
                  }],
                  borrowList: state.board.borrowList,
                  items: state.board.items
              }
            });
    }

  else if (action.type === actions.ADD_ITEM) {
    //if (board.loanList.length === 0 && board.borrowList.length === 0) {
     // return 
    //}
    return Object.assign({}, state, {
      board: { 
        loanList: state.board.loanList,
        borrowList: state.board.borrowList,
        items: [...state.board.items, {
          itemType: action.itemType,
          item: action.item
      }],
    }})
  } 
     else if (action.type === actions.REMOVE_ITEM_FROM_LIST) {
      return Object.assign({}, state, {
        items: state.items.filter((id) => id.listId !== action.itemId)
      })
    }

   else if (action.type === actions.RETURN_ITEM) {
      return Object.assign({}, {
        board: {loanList: state.board.loanList.filter((id) => id.listId !== action.itemId),
                borrowList: state.board.borrowList,
                items: state.board.items}
      })
    }
    //remove state
    else if (action.type === actions.RENEW_ITEM) {
      return Object.assign({}, state, {
        board: { loanList: state.board.loanList.map((i) => (
                  i.listId === action.itemId ? 
                {...i, returnDate: action.returnDate} : i)),
                borrowList: state.board.borrowList,
                items: state.board.items}
    })
  }
      if (action.type === actions.ADD_BORROW_CARD) {
        return Object.assign({}, state, {
          board: {
            borrowList: [...state.board.borrowList, {
                  itemType: action.itemType,
                  item: action.item,
                  loaner: action.loaner, 
                  email: action.email, 
                  phone: action.phone, 
                  returnDate: action.date,
                  dateAdded: action.dateAdded,
                  listId: action.itemType+action.item+action.loaner
            }],                  
            items: state.board.items,
            loanList: state.board.loanList
            }});
    }

   else if (action.type === actions.RETURN_BORROW_ITEM) {
      return Object.assign({}, state, {
        board: {borrowList: state.board.borrowList.filter((id) => id.listId !== action.itemId),
                loanList: state.board.loanList,
                items: state.board.items
        }
      })
    }
    

    else if (action.type === actions.RENEW_BORROW_ITEM) {
      return Object.assign({}, state, {
        board: {borrowList: state.board.borrowList.map((i) => (
        i.listId === action.itemId ? 
        {...i, returnDate: action.returnDate} : i)),
                loanList: state.board.loanList,
                items: state.board.items}
    })
  }
      else if (action.type === actions.UPDATE_USERNAME) {
        return Object.assign({}, state, {
        newId: action.username
      })
    }
        else if (action.type === actions.FETCH_BOARD_SUCCESS) {
        return Object.assign({}, state, {
          board: 
              {loanList: action.loanList, 
              items: action.items, 
              borrowList: action.borrowList} 
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

