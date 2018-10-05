export const ADD_LOAN_CARD = 'ADD_LOAN_CARD';
export const addLoanCard = (borrower, email, phone, date, listId) => ({
    type: ADD_LOAN_CARD,
    borrower, 
    email, 
    phone, 
    date,
    listId,
});