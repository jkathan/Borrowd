
import React from 'react';
import {shallow, mount} from 'enzyme';
import {BorrowList} from './borrow-list';
import BorrowCard from './borrow-card';
import BorrowForm from './borrow-form';
import {addCard} from '../actions';


describe('<BorrowList />', () => {
    const seedCards = [];
    beforeAll(() => {
        for (let i = 0; i < 10; i++) {
            seedCards.push({
                itemType: `Card ${i}`,
                item: `Card ${i}`,
                loaner: `Card ${i}`,
                email: `Card ${i}`,
                phone: `Card ${i}`,
                returnDate: `Card ${i}`,
                listId: `Card ${i}`,
            });
        }
    });

    it('Renders without crashing', () => {
        shallow(<BorrowList cards={[]} />);
    });

    it('Renders the cards', () => {
        const wrapper = mount(<BorrowList cards={seedCards} />);
        const cards = wrapper.find(Card);
        expect(cards.length).toEqual(seedCards.length);
        const firstCard = cards.first();
        expect(firstCard.prop('itemType')).toEqual(seedCards[0].itemType);
        expect(firstCard.prop('item')).toEqual(seedCards[0].item);
        expect(firstCard.prop('loaner')).toEqual(seedCards[0].loaner);
        expect(firstCard.prop('email')).toEqual(seedCards[0].email);
        expect(firstCard.prop('phone')).toEqual(seedCards[0].phone);
        expect(firstCard.prop('returnDate')).toEqual(seedCards[0].returnDate);
        expect(firstCard.prop('listId')).toEqual(seedCards[0].listId);
    });
});