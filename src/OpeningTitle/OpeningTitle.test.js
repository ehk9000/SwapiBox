import React from 'react';
import {shallow} from 'enzyme';
import OpeningTitle from './OpeningTitle';
import {stringify} from 'querystring';

// mock random film 
// mock fetch


describe('OpeningTitle', () => {
    let wrapper;
    let mockFilm;

    beforeEach(() => {
        mockFilm = {title: "Revenge of the Sith", 
        opening_crawl:"War! The Republic is crumbling under attacks by the ruthlessSith Lord...",
        release_date: "2005-05-19"};
        wrapper = shallow(<OpeningTitle />)
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            json: () => Promise.resolve(mockFilm)
        }))
    })
    it('should match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})