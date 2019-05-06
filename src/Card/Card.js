import React from 'react'
import './Card.scss'


function Card(props) {
    const name = props.details.name
    const attributes = Object.keys(props.details)
    const data = attributes.slice(1, attributes.length);
    console.log(attributes)
    return(
        <article className="card">
            <h3>{name}</h3>
            <section className="card-info">
                {data.map(card => {
                     return <p>
                     <span>{`${card} : `}</span>
                     <span>{props.details[card]}</span>
                     </p>
                })}
            </section>
        </article>
    )


}

export default Card;