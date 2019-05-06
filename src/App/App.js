import React, {Component} from 'react';
import './App.scss';
import OpeningTitle from '../OpeningTitle/OpeningTitle'
import deathStar from '../images/death-star.svg'
import MainContainer from '../MainContainer/MainContiner'

class App extends Component {
  constructor() {
    super();
    this.state = {
      showTitle: false
    }

  }

  componentDidMount() {
    this.setState({showTitle: true})
  }

  skipInto = () => {
    this.setState({showTitle: false})
  }

  render() {
    let display = this.state.showTitle ? (
    <div>
      <OpeningTitle skipInto={this.skipInto}/>
    </div>
    ) : (
      <MainContainer />
    )

    return (
      <section className="App">
        <header>
          <h3>SwapiBox <img className="deathStar" src={deathStar} alt="Death Star Logo"/></h3>
          </header>
          {display}
      </section>
    )
  }
}

export default App;
