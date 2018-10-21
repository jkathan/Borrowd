import React from 'react';
import {shallow, mount} from 'enzyme';
import {LoanList} from './loan-list';
import LoanForm from './loan-form';
import LoanCard from './loan-card';
import {addCard} from '../actions';


describe('<LoanList />', () => {
    const seedCards = [];
    beforeAll(() => {
        for (let i = 0; i < 10; i++) {
            seedCards.push({
                itemType: `Card ${i}`,
                item: `Card ${i}`,
                borrower: `Card ${i}`,
                email: `Card ${i}`,
                phone: `Card ${i}`,
                returnDate: `Card ${i}`,
                listId: `Card ${i}`,
            });
        }
    });

    it('Renders without crashing', () => {
        shallow(<LoanList cards={[]} />);
    });

    it('Renders the cards', () => {
        const wrapper = mount(<LoanList cards={seedCards} />);
        const cards = wrapper.find(Card);
        expect(cards.length).toEqual(seedCards.length);
        const firstCard = cards.first();
        expect(firstCard.prop('itemType')).toEqual(seedCards[0].itemType);
        expect(firstCard.prop('item')).toEqual(seedCards[0].item);
        expect(firstCard.prop('borrower')).toEqual(seedCards[0].borrower);
        expect(firstCard.prop('email')).toEqual(seedCards[0].email);
        expect(firstCard.prop('phone')).toEqual(seedCards[0].phone);
        expect(firstCard.prop('returnDate')).toEqual(seedCards[0].returnDate);
        expect(firstCard.prop('listId')).toEqual(seedCards[0].listId);
    });
});