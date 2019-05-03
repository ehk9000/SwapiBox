import React from 'react';
import './App.scss';
import OpeningTitle from '../OpeningTitle/OpeningTitle'
import deathStar from '../images/death-star.svg'

function App() {
    return (
      <section className="App">
        <header>
          <h3>SwapiBox <img className="deathStar" src={deathStar} alt="Death Star Logo"/></h3>
          </header>
        <OpeningTitle />
      </section>
    )
}

export default App;
