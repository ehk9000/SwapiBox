import React from 'react';
import {shallow} from 'enzyme';
import MainContainer from './MainContiner';

describe('MainContainer', () => {
    let wrapper;
    let mockPeople;

    beforeEach(() => {
        mockPeople= {
            name: 'Luke Skywalker', 
            homeworld : 'Tatooine',
            population : 200000,
            species : 'Human'};
            wrapper = shallow(<MainContainer />)
            window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
                json: () => Promise.resolve(mockFilm)
            }))
    })
    
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})