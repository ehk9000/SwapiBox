import React, {Component} from 'react';
import './OpeningTitle.scss'
import rebel from '../images/rebel-alliance.svg'
import {fetchFilm} from '../apiCalls/apiCalls'


class OpeningTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomFilm: [],
            isLoading: false,
            error: ''
        }
    }

     componentDidMount() {
        this.setState({isLoading: true}, this.getFilm())
    }

    getFilm = () => {
        const index = Math.floor(Math.random() * 7) + 1;
        fetchFilm(index)
        .then(randomFilm => this.setState({randomFilm, isLoading: false}))
        .catch(error => this.setState({error}))
    }

    render() {
        const {opening_crawl: openingCrawl, title, release_date: date} = this.state.randomFilm;
        let openingContainer = this.state.isLoading ? (
        <div className="loading-wrapper">
            <img src={rebel} alt="Rebel Alliance Icon" className="rebel" />
            <p className="load" >Loading...</p>
            <img src={rebel} alt="Rebel Alliance Icon" className="rebel" />
        </div> 
        ) : (
        <article className="fade">
            <section className="star-wars">
                <div className="crawl">
                    <p>{openingCrawl}</p>
                    <h2>{title}</h2>
                    <p>{date}</p>
                </div>
            </section>  
        </article> 
        );
        return (
            <div>
              <aside>
                  <button className="skip-btn" onClick={this.props.skipInto}>Skip Intro</button>
              </aside>
              {openingContainer}
            </div>
        )
    }
}




export default OpeningTitle