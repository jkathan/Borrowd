// neeed to import api base url

import {API_BASE_URL} from '../config';
console.log(API_BASE_URL);
//import {normalizeResponseErrors} from './utils';
/*
export const FETCH_PROTECTED_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const fetchBoard = () => dispatch => {
    fetch(`${API_BASE_URL}/get/:newId`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(board => {
            dispatch(fetchBoardSuccess(board));
        });
};
*/
export const ADD_USERNAME = 'ADD_USERNAME';
export const addUsername = (username) => ({
    type: ADD_USERNAME,
    username
})

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
export const addBorrowCard = (itemType, item, loaner, email, phone, date, dateAdded, listId) => ({
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

export const EDIT_ITEM = 'EDIT_ITEM';
export const editItem = (itemType, item, itemId) => ({
	type: RENEW_ITEM,
	itemType,
	item,
    itemId
});

export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const updateUsername = (username) => ({
    type: UPDATE_USERNAME,
    username
})

/*
export const updateBoard = () => (dispatch, getState) => {
    const username = getState().username;
    const board = getState().board;
    return fetch(`${API_BASE_URL}/put/`+ {username}, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(board)
    })
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
*/
export const updateBoard = () => (dispatch, getState) => {
    const boardState = getState().loanList;
    console.log(boardState);
    const username = getState().loanList.newId;
    console.log(username);
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
    console.log(username);
        const boardState = getState().loanList;
    console.log(boardState);
    fetch(`${API_BASE_URL}/get/${username}`)
        .then(res => {
            //console.log(res);
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(board => {
            //console.log(board.board[0].borrowList);
            const loanList = board.board[0].loanList;
            //console.log(loanList);
            const items = board.board[1].items;
            const borrowList= board.board[2].borrowList;
            dispatch(fetchBoardSuccess(loanList, items, borrowList));
    });
};
