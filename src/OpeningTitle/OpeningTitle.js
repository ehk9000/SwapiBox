import React, {Component} from 'react';
import './OpeningTitle.scss'
import rebel from '../images/rebel-alliance.svg'



class OpeningTitle extends Component {
    constructor() {
        super();
        this.state = {
            randomFilm: [],
            isLoading: false
        }
    }

    async componentDidMount() {
        const index = Math.floor(Math.random() * 7) + 1;
        this.setState({isLoading: true})
        const url = `https://swapi.co/api/films/${index}`;
        const response = await fetch(url);
        const randomFilm = await response.json();
        this.setState({randomFilm, isLoading: false})
        console.log(this.state.randomFilm)
    }

    render() {
        const {opening_crawl: openingCrawl, title, release_date: date} = this.state.randomFilm;
        let openingContainer = this.state.isLoading ? 
        <div className="loading-wrapper">
            <img src={rebel} alt="Rebel Alliance Icon" className="rebel" />
            <p className="load" >Loading...</p>
            <img src={rebel} alt="Rebel Alliance Icon" className="rebel" />
        </div>
        :
        <article className="fade">
            <section className="star-wars">
                <div className="crawl">
                    <p>{openingCrawl}</p>
                    <h2>{title}</h2>
                    <p>{date}</p>
                </div>
            </section>  
        </article>

        return (
            <div>
              {openingContainer}
            </div>
        )
    }
}




export default OpeningTitle