import React from 'react';


const Categories = ({handleClick}) => {

    return(
        <section>
            <button name="people"  onClick={event => handleClick(event)}>People</button>
            <button name="planets" onClick={event => handleClick(event)}>Planets</button>
            <button name="vehicles" onClick={event => handleClick(event)}>Vehicles</button>
        </section>
    )
}

export default Categories;