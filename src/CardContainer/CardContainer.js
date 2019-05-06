import React from 'react'
import Card from '../Card/Card'
import './CardContainer.scss'

function CardContainer(props)  {
    const { results } = props;
    console.log("results", results)

    const cards = results.map(card => {
        return <Card details={card} />
    });

    return <section className="card-container" >{cards}</section>
    
}

export default CardContainer;