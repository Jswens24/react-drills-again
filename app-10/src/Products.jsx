import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const getPoke = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => {
            return res.data.results
        })
}


const Products = () => {
    const [pokemonList, setPokemonList] = useState([]);



    useEffect(() => {
        (async () => {
            setPokemonList(await getPoke())
        })()
    }, [])

    return (
        <div>
            {pokemonList.map(poke => {
                return <h4 key={poke.name}>{poke.name}</h4>
            })}
        </div>
    )
}

export default Products