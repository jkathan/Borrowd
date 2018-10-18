import * as actions from '../actions/index';

const initialState = {
  board: [
     {
      board:  [
     { loanList: [{listId: 6, itemType: "Tool", item: "Wrench", borrower: "Bob", email: "fake@email.com", phone: "301-555-555", returnDate: "2018-09-10", dateAdded: "2018-06-14"}],
        borrowList: [{listId: 6, itemType: "Tool", item: "Wrench", loaner: "Bob", email: "fake@email.com", phone: "301-555-555", returnDate: "2018-09-10", dateAdded: "2018-06-14"}],
        items: [{listId: 12, itemType: "Tool", item: "Socket Wrench"}] }
      ]}],
  username: "demo"
};



export const loanReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_CARD) {
        return Object.assign({}, state, {
            loanList: [...state.board.loanList, {
                  itemType: action.itemType,
                  item: action.item,
                  borrower: action.borrower, 
                  email: action.email, 
                  phone: action.phone, 
                  returnDate: action.date.toString(),
                  dateAdded: action.dateAdded
            }]
            });
    }

  else if (action.type === actions.ADD_ITEM) {
    return Object.assign({}, state, {
      items: [...state.loanList, {
        itemType: action.itemType,
        item: action.item
      }]
    })
  } 
     else if (action.type === actions.REMOVE_ITEM_FROM_LIST) {
      return Object.assign({}, state, {
        items: state.items.filter((id) => id.listId !== action.itemId)
      })
    }

   else if (action.type === actions.RETURN_ITEM) {
      return Object.assign({}, state, {
        loanList: state.loanList.filter((id) => id.listId !== action.itemId)
      })
    }
    
    else if (action.type === actions.RENEW_ITEM) {
      return Object.assign({}, state, {
        loanList: state.loanList.map((i) => (
        i.listId === action.itemId ? 
        {...i, returnDate: action.returnDate} : i))
    })
  }
      if (action.type === actions.ADD_BORROW_CARD) {
        return Object.assign({}, state, {
            borrowList: [...state.board.board.loanList, {
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
        borrowList: state.board.board.borrowList.filter((id) => id.listId !== action.itemId)
      })
    }
    

    else if (action.type === actions.RENEW_BORROW_ITEM) {
      return Object.assign({}, state, {
        borrowList: state.board.borrowList.map((i) => (
        i.listId === action.itemId ? 
        {...i, returnDate: action.returnDate} : i))
    })
  }
      else if (action.type === actions.UPDATE_USERNAME) {
        return Object.assign({}, state, {
        username: action.username
      })
    }
        else if (action.type === actions.FETCH_BOARD_SUCCESS) {
        return Object.assign({}, state, {
          board: action.board
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

