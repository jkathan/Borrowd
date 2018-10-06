export const ADD_LOAN_CARD = 'ADD_LOAN_CARD';
export const addLoanCard = (itemType, item, borrower, email, phone, date, listId) => ({
    type: ADD_LOAN_CARD,
    itemType,
    item,
    borrower, 
    email, 
    phone, 
    date,
    listId,
});