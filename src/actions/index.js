export const ADD_LOAN_CARD = 'ADD_LOAN_CARD';
export const addLoanCard = (type, item, borrower, email, phone, date, listId) => ({
    type: ADD_LOAN_CARD,
    type,
    item,
    borrower, 
    email, 
    phone, 
    date,
    listId,
});