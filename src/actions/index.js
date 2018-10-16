// neeed to import api base url

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
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
export const addCard = (username) => ({
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
/*
export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const fetchBoardSuccess = board => ({
    type: FETCH_BOARD_SUCCESS,
    board
});

export const fetchBoard = () => dispatch => {
    fetch(`${API_BASE_URL}/board`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(board => {
            dispatch(fetchBoardSuccess(board));
        }).catch(err => {
            dispatch(fetchBoardError(err));
    });
};

export const CURRENT_DATE = 'CURRENT_DATE';
export const currentDate = (currentDate) => ({
	type: CURRENT_DATE,
	currentDate
})*/