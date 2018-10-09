export const ADD_LOAN_CARD = 'ADD_LOAN_CARD';
export const addLoanCard = (itemType, item, borrower, email, phone, date, dateAdded, listId) => ({
    type: ADD_LOAN_CARD,
    itemType,
    item,
    borrower, 
    email, 
    phone, 
    date,
    dateAdded,
    listId
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
/*
export const SEARCH_LIST = 'SEARCH_LIST';
export const searchList = (searchTerm) => ({
	type: SEARCH_LIST,
	searchTerm
})*/