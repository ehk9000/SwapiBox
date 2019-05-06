import React, {Component} from 'react';
import './MainContainer.scss'
import Categories from '../Categories/Categories';
import CardContainer from '../CardContainer/CardContainer'
import rebel from '../images/rebel-alliance.svg'
import {fetchCat, fetchHomeworlds, fetchSpecies, fetchResidents} from '../apiCalls/apiCalls'


class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            results: {
                people: [],
                vehicles: [],
                planets: []
            },
            category: '',
            error: ''
        }
    }


    handleClick = (event)=> {
        event.preventDefault();        
        const category = event.target.name;
        console.log('category', category)
        this.setState({category}, () => {
            if(!this.state.results[category].length) {
                this.setState({isLoading: true}, () => {
                    if(category === 'people') {
                        this.getPeople(category);
                    } else if (category === 'planets') {
                        this.getPlanets(category);
                    } else {
                        this.fetchVehicles(category);
                    }
                })
            }
        })
    }

    getPeople = (category) => {
        fetchCat(category)
            .then(data => fetchHomeworlds(data.results))
            .then(people => fetchSpecies(people))
            .then(people => this.formatPeople(people))
            .catch(error => this.setState({error}))
    }

    getPlanets = (category) => {
        fetchCat(category)
        .then(data => fetchResidents(data.results))
        .then(planets => this.formatPlanets(planets))
        .catch(error => this.setState({error}))
    }

    // getVehicles = (category) => {
    //     fetchCat(category)

    // }

    formatPeople = (people) => {
        const formatedPeople = people.map(person => {
            let {name, homeworld, population, species} = person;
            return {name, homeworld, population, species}
        });
        this.setState({results: {...this.state.results, people: formatedPeople}, isLoading: false})
    }

    formatPlanets = (planets) => {
        const formatedPlanets = planets.map(planet => {
            let {name, terrain, population, climate, residents} = planet;
            return {name, terrain, population, climate, residents}
        });
        this.setState({results: {...this.state.results, planets: formatedPlanets }, isLoading: false})
    }



    render() {
        const {results, category, isLoading} = this.state;
        let display = isLoading ? (
        <div className="loading-wrapper">
            <img src={rebel} alt="Rebel Alliance Icon" className="rebel" />
            <p className="load" >Loading...</p>
            <img src={rebel} alt="Rebel Alliance Icon" className="rebel" />
        </div> 
        ) : category ? (
            <CardContainer category={category} results={results[category]}/>
        ) : null;

        return (
            <main>
                <Categories handleClick={this.handleClick}/>
                {display}
            </main>
        )
    }
}

export default MainContainer;