import React, {Component} from 'react';
import './OpeningTitle.scss'
import Crawl from 'react-star-wars-crawl'



class OpeningTitle extends Component {
    constructor() {
        super();
        this.state = {
            randomFilm: []
        }
    }

    async componentDidMount() {
        const index = Math.floor(Math.random() * 7) + 1;
        const url = `https://swapi.co/api/films/${index}`;
        const response = await fetch(url);
        const randomFilm = await response.json();
        this.setState({randomFilm})
    }

    render() {
        const {opening_crawl: openingCrawl, title, release_date: date} = this.state.randomFilm;
        return (
            <article className="fade">
                <section className="star-wars">
                    <div className="crawl">
                        <p>{openingCrawl}</p>
                        <h2>{title}</h2>
                        <p>{date}</p>
                    </div>
                </section>
            </article>
        )
    }
}




export default OpeningTitle