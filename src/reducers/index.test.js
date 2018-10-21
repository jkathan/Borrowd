import {loanReducer} from './index';
import {addCard, addBorrowCard, addItem, returnLoanItem, returnBorrowItem, renewLoanItem, renewBorrowItem, removeItemFromList, updateUsername, fetchBoardSuccess} from '../actions';

describe('loanReducer', () => {
    // Set up some dummy data
const loanListItem1 = {itemType: 'tool', item: 'banana', borrower: 'turtle', email: 'test@test.org', phone: '301444444', returnDate: '2018-01-01', dateAdded: '2018-01-01', listId: 'toolbananaturtle'};
const borrowListItem1 = {itemType: 'tool', item: 'banana', loaner: 'turtle', email: 'test@test.org', phone: '301444444', returnDate: '2018-01-01', dateAdded: '2018-01-01', listId: 'toolbananaturtle'};
const itemItemarray = {itemType: 'tool', item: 'banana', listId: 'toolbananaturtle'};
const loanitemType1 = 'tool';
const loanitem1 = 'banana';
const loanborrower1 = 'turtle';
const loanemail1 = 'test@test.org';
const loanphone1 = '301444444';
const loanreturnDate1 = '2018-01-01';
const loanreturnDate2 = '2018-02-02';
const loandateAdded1 = '2018-01-01';
const loanlistId1 = 'toolbananaturtle';
const borrowitemType1 = 'tool';
const borrowitem1 = 'banana';
const borrowloaner1 = 'turtle'
const borrowemail1 = 'test@test.org';
const borrowphone1 = '301444444';
const borrowreturnDate1 = '2018-01-01';
const borrowreturnDate2 = '2018-02-02';
const borrowdateAdded1 = '2018-01-01';
const borrowlistId1 = 'toolbananaturtle';
const itemitemType1 = 'tool';
const itemitem1 = 'banana';
const itemlistId1 = 'toolbananaturtle';
const username1 = 'turtle';
const loanListItem2 = {itemType: 'tool', item: 'banana', borrower: 'turtle', email: 'test@test.org', phone: '301444444', returnDate: '2018-02-02', dateAdded: '2018-01-01', listId: 1};
const borrowListItem2 = {itemType: 'tool', item: 'banana', loaner: 'turtle', email: 'test@test.org', phone: '301444444', returnDate: '2018-02-02', dateAdded: '2018-01-01', listId: 1};


    it('Should set the initial state when nothing is passed in', () => {
        const state = loanReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
              board: {
                loanList: [],
                borrowList: [],
                items: [] 
                    },
                newId: ''
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = loanReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });


    describe('addloanCard', () => {
        it('Should add new loan card', () => {
            let state;
            state = loanReducer(state, addCard(loanitemType1, loanitem1, loanborrower1, loanemail1, loanphone1, loanreturnDate1, loandateAdded1, loanlistId1));
            expect(state).toEqual({
              board: {
                loanList: [loanListItem1],
                borrowList: [],
                items: [] 
                    },
                newId: ''
            });
        });
    });


    describe('addBorrowCard', () => {
        it('Should add new borrow card', () => {
            let state;
            state = loanReducer(state, addBorrowCard(borrowitemType1, borrowitem1, borrowloaner1, borrowemail1, borrowphone1, borrowreturnDate1, borrowdateAdded1, borrowlistId1));
            expect(state).toEqual({
              board: {
                loanList: [],
                borrowList: [borrowListItem1],
                items: [] 
                    },
                newId: ''
            });
        });
    });
    describe('addItem', () => {
        it('Should add new item', () => {
            let state;
            state = loanReducer(state, addItem(itemitemType1, itemitem1, itemlistId1));
            expect(state).toEqual({
              board: {
                loanList: [],
                borrowList: [],
                items: [itemItemarray] 
                    },
                newId: ''
            });
        });
    });

    describe('removeItemFromList', () => {
        it('Should remove item from list', () => {
            let state ={              
                board: {
                loanList: [],
                borrowList: [],
                items: [itemItemarray] 
                    },
                newId: ''};
            expect(state.board.items[0].listId).toEqual(itemlistId1);
            state = loanReducer(state, removeItemFromList(itemlistId1));
            expect(state.board.items.length).toEqual(0);
        });
    });
    describe('returnItem', () => {
        it('Should return loan item', () => {
            let state ={              
                board: {
                loanList: [loanListItem1],
                borrowList: [],
                items: [] 
                    },
                newId: ''};
            state = loanReducer(state, returnLoanItem(loanlistId1));
            expect(state.board.loanList.length).toEqual(0);
        });
    });
    describe('returnBorrowItem', () => {
        it('Should return borrow item', () => {
            let state ={              
                board: {
                loanList: [],
                borrowList: [borrowListItem1],
                items: [] 
                    },
                newId: ''};
            state = loanReducer(state, returnBorrowItem(borrowlistId1));
            expect(state.board.borrowList.length).toEqual(0);
        });
    });
    describe('renewLoanItem', () => {
        it('Should renew loan item', () => {
            let state ={              
                board: {
                loanList: [loanListItem1],
                borrowList: [],
                items: [] 
                    },
                newId: ''};
            state = loanReducer(state, renewLoanItem(loanreturnDate2, loanlistId1));
            expect(state).toEqual({
              board: {
                loanList: [loanListItem2],
                borrowList: [],
                items: [] 
                    },
                newId: ''
            });
        });
    });
    describe('renewBorrowItem', () => {
        it('Should renew borrow item', () => {
            let state ={              
                board: {
                loanList: [],
                borrowList: [borrowListItem1],
                items: [] 
                    },
                newId: ''};
            state = loanReducer(state, renewBorrowItem(borrowreturnDate2, borrowlistId1));
            expect(state).toEqual({
              board: {
                loanList: [],
                borrowList: [borrowListItem2],
                items: [] 
                    },
                newId: ''
            });
        });
    });
    describe('updateUserName', () => {
        it('Should update username', () => {
            let state;
            state = loanReducer(state, updateUsername(username1));
            expect(state).toEqual({
              board: {
                loanList: [],
                borrowList: [],
                items: [] 
                    },
                newId: username1
            });
        });
    });

    describe('fetchBoardSuccess', () => {
        it('Should fetch arrays', () => {
            let state;
            state = loanReducer(state, fetchBoardSuccess(loanListItem1, borrowListItem1, itemItemarray));
            expect(state).toEqual({
              board: {
                loanList: [[loanListItem1]],
                borrowList: [[borrowListItem1]],
                items: [[itemItemarray]] 
                    },
                newId: ''
            });
        });
    });
});