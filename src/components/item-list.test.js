
import React from 'react';
import {shallow, mount} from 'enzyme';
import {ItemList} from './Item-list';
import {addCard} from '../actions';


describe('<ItemList />', () => {
    const seedCards = [];
    beforeAll(() => {
        for (let i = 0; i < 10; i++) {
            seedCards.push({
                itemType: `Card ${i}`,
                item: `Card ${i}`,
            });
        }
    });

    it('Renders without crashing', () => {
        shallow(<ItemList cards={[]} />);
    });

    it('Renders the cards', () => {
        const wrapper = mount(<ItemList cards={seedCards} />);
        const cards = wrapper.find(Card);
        expect(cards.length).toEqual(seedCards.length);
        const firstCard = cards.first();
        expect(firstCard.prop('itemType')).toEqual(seedCards[0].itemType);
        expect(firstCard.prop('item')).toEqual(seedCards[0].item);
    });
});