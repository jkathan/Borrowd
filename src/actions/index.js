import {API_BASE_URL} from '../config';

export const ADD_CARD = 'ADD_CARD';
export const addCard = (itemType, item, borrower, email, phone, date, dateAdded, listId) => ({
    type: ADD_CARD,
    itemType,
    item,
    borrower, 
    email, 
    phone, 
    date,
    dateAdded,
    listId
});

export const ADD_BORROW_CARD = 'ADD_BORROW_CARD';
export const addBorrowCard = (itemType, item, loaner, email, phone, date, dateAdded, image, listId) => ({
    type: ADD_BORROW_CARD,
    itemType,
    item,
    loaner, 
    email, 
    phone, 
    date,
    dateAdded,
    listId
});

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (itemType, item) => ({
    type: ADD_ITEM,
    itemType,
    item
});

export const RETURN_ITEM = 'RETURN_ITEM';
export const returnLoanItem = (itemId) => ({
    type: RETURN_ITEM,
    itemId
});

export const RENEW_ITEM = 'RENEW_ITEM';
export const renewLoanItem = (returnDate, itemId) => ({
	type: RENEW_ITEM,
	returnDate,
    itemId
});

export const RENEW_BORROW_ITEM = 'RENEW_BORROW_ITEM';
export const renewBorrowItem = (returnDate, itemId) => ({
    type: RENEW_BORROW_ITEM,
    returnDate,
    itemId
});


export const RETURN_BORROW_ITEM = 'RETURN_BORROW_ITEM';
export const returnBorrowItem = (itemId) => ({
    type: RETURN_BORROW_ITEM,
    itemId
});

export const REMOVE_ITEM_FROM_LIST = 'REMOVE_ITEM_FROM_LIST';
export const removeItemFromList = (itemId) => ({
	type: REMOVE_ITEM_FROM_LIST,
	itemId
});

export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const updateUsername = (username) => ({
    type: UPDATE_USERNAME,
    username
})

export const updateBoard = () => (dispatch, getState) => {
    const boardState = getState().loanList;
    const username = getState().loanList.newId;
    fetch(`${API_BASE_URL}/put/${username}`,
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
    },
    body: JSON.stringify(boardState)
    })
};

export const initialBoardAdd = () => (dispatch, getState) => {
    const firstState = getState().loanList;
    console.log(firstState);
    fetch(`${API_BASE_URL}/post`, {    
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(firstState)
    })
    .then(res => {console.log(res)})
};


export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const fetchBoardSuccess = (loanList, items, borrowList) => ({
    type: FETCH_BOARD_SUCCESS,
    loanList,
    items,
    borrowList
});


export const fetchBoard = () => (dispatch, getState) => {
    const username = getState().loanList.newId;
    const boardState = getState().loanList;
    fetch(`${API_BASE_URL}/get/${username}`)
        .then(res => {
            console.log(res);
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();

        })
        .then(board => {
            const loanList = board.board[0].loanList;
            const items = board.board[0].items;
            const borrowList= board.board[0].borrowList;
            dispatch(fetchBoardSuccess(loanList, items, borrowList));
    });
};
