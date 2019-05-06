import React from 'react';
import {shallow} from 'enzyme'
import CardContainer from './CardContainer'

describe('CardContainer', () => {
    let wrapper;
    let mockPeople;

    beforeEach(() => {
        mockPeople = [{
            name: 'Luke Skywalker', 
            homeworld : 'Tatooine',
            population : 200000,
            species : 'Human'}];
            wrapper = shallow(<CardContainer results={mockPeople}/>)
    })
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})