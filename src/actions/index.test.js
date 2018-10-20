import {ADD_CARD, addCard, addBorrowCard, ADD_BORROW_CARD, addItem, ADD_ITEM, returnLoanItem, RETURN_ITEM, renewLoanItem, RENEW_ITEM, renewBorrowItem, RENEW_BORROW_ITEM, returnBorrowItem, RETURN_BORROW_ITEM, removeItemFromList, REMOVE_ITEM_FROM_LIST, updateUsername, UPDATE_USERNAME, FETCH_BOARD_SUCCESS, fetchBoardSuccess} from './index';

describe('addCard', () => {
    it('Should return the action', () => {
        const itemType = 'tool';
        const item = 'foo';
        const borrower = 'foo';
        const email = 'foo@foo.com';
        const phone = '1234567891';
        const date = '2018-10-08';
        const dateAdded = '2018-10-08';
        const listId = 3;
        const action = addCard(itemType, item, borrower, email, phone, date, dateAdded, listId);
        expect(action.type).toEqual(ADD_CARD);
        expect(action.itemType).toEqual(itemType);
        expect(action.item).toEqual(item);
        expect(action.borrower).toEqual(borrower);
        expect(action.email).toEqual(email);
        expect(action.phone).toEqual(phone);
        expect(action.date).toEqual(date);
        expect(action.listId).toEqual(listId);
    });
});

describe('addBorrowCard', () => {
    it('Should return the action', () => {
        const itemType = 'tool';
        const item = 'foo';
        const loaner = 'foo';
        const email = 'foo@foo.com';
        const phone = '1234567891';
        const date = '2018-10-08';
        const dateAdded = '2018-10-08';
        const listId = 3;
        const action = addBorrowCard(itemType, item, loaner, email, phone, date, dateAdded, listId);
        expect(action.type).toEqual(ADD_BORROW_CARD);
        expect(action.itemType).toEqual(itemType);
        expect(action.item).toEqual(item);
        expect(action.loaner).toEqual(loaner);
        expect(action.email).toEqual(email);
        expect(action.phone).toEqual(phone);
        expect(action.date).toEqual(date);
        expect(action.listId).toEqual(listId);
    });
});

describe('addItem', () => {
    it('Should return the action', () => {
        const itemType = 'tool';
        const item = 'foo';
        const action = addItem(itemType, item);
        expect(action.type).toEqual(ADD_ITEM);
        expect(action.itemType).toEqual(itemType);
        expect(action.item).toEqual(item);
    });
});

describe('returnItem', () => {
    it('Should return the action', () => {
        const itemId = 1
        const action = returnLoanItem(itemId);
        expect(action.type).toEqual(RETURN_ITEM);
        expect(action.itemId).toEqual(itemId);
    });
});

describe('renewLoanItem', () => {
    it('Should return the action', () => {
        const returnDate = '2018-01-01';
        const itemId = 3 ;
        const action = renewLoanItem(returnDate, itemId);
        expect(action.type).toEqual(RENEW_ITEM);
        expect(action.returnDate).toEqual(returnDate);
        expect(action.itemId).toEqual(itemId);
    });
});
describe('renewBorrowItem', () => {
    it('Should return the action', () => {
        const returnDate = '2018-01-01';
        const itemId = 3 ;
        const action = renewBorrowItem(returnDate, itemId);
        expect(action.type).toEqual(RENEW_BORROW_ITEM);
        expect(action.returnDate).toEqual(returnDate);
        expect(action.itemId).toEqual(itemId);
    });
});

describe('returnBorrowItem', () => {
    it('Should return the action', () => {
        const itemId = 1
        const action = returnBorrowItem(itemId);
        expect(action.type).toEqual(RETURN_BORROW_ITEM);
        expect(action.itemId).toEqual(itemId);
    });
});

describe('updateUsername', () => {
    it('Should return the action', () => {
        const username = 'tool';
        const action = updateUsername(username);
        expect(action.type).toEqual(UPDATE_USERNAME);
        expect(action.username).toEqual(username);

    });
});

describe('fetchBoardSuccess', () => {
    it('Should return the action', () => {
        const loanList = 'tool';
        const items = 'foo';
        const borrowList = 'foo'
        const action = fetchBoardSuccess(loanList, items, borrowList);
        expect(action.type).toEqual(FETCH_BOARD_SUCCESS);
        expect(action.loanList).toEqual(loanList);
        expect(action.items).toEqual(items);
        expect(action.borrowList).toEqual(borrowList);
    });
});

describe('removeItemFromList', () => {
    it('Should return the action', () => {
        const itemId = 1
        const action = removeItemFromList(itemId);
        expect(action.type).toEqual(REMOVE_ITEM_FROM_LIST);
        expect(action.itemId).toEqual(itemId);
    });
});

