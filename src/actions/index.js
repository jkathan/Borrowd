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

export const UPDATE_CHECKOUT_STATUS = 'UPDATE_CHECKOUT_STATUS';
export const updateCheckoutStatus = () => ({
	type: UPDATE_CHECKOUT_STATUS,
});
/*
export const CURRENT_DATE = 'CURRENT_DATE';
export const currentDate = (currentDate) => ({
	type: CURRENT_DATE,
	currentDate
})*/