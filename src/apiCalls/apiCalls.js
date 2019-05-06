export const fetchCat = (category) => {
    return fetch(`https://swapi.co/api/${category}/`)
    .then(response => {
        if(!response.ok) {
            throw new Error(`Error reaching ${category}`)
        } 
        return response.json();
    })
}

export const fetchFilm = (num) => {
        return  fetch(`https://swapi.co/api/films/${num}`)
        .then(response => {
            if(!response.ok) {
                throw Error('Error loading crawl')
            }
            return response.json();
        })
}


export const fetchHomeworlds = (people) => {
    const homeworldPromises = people.map(person => {
        return fetch(person.homeworld)
        .then(response => {
            if(!response.ok) {
                throw new Error('Error reaching homeworld')
            }
            return response.json()
        })
        .then(homeworld => ({...person, homeworld: homeworld.name, population: homeworld.population}))
    });

    return Promise.all(homeworldPromises)
    
};

export const fetchSpecies = (people) => {
    const speciesPromises = people.map(person => {
        return fetch(person.species[0])
        .then(response => {
            if(!response.ok) {
                throw new Error('Error reaching species')
            }
            return response.json();
        })
        .then(species => ({...person, species: species.name}))
    });
    return Promise.all(speciesPromises)
}

export const fetchResidents = (planets) => {
    const residentsPromises = planets.map(planet => {
       return fetchNames(planet.residents)
       .then(resident => ({...planet, resident}))
    })
    return Promise.all(residentsPromises)
}

export const fetchNames = (residents) => {
    const namePromises = residents.map(resident => {
        return fetch(resident)
        .then(response => {
            if(!response.ok) {
                throw new Error('Error reaching residents')
            }
            return response.json();
        })
        .then(person => person.name)

    })
    return Promise.all(namePromises)

}
