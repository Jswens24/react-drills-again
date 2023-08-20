import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Products = () => {
    const [pokemonList, setPokemonList] = useState({})

    useEffect(
        axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => {
            console.log(res.data.results);
            setPokemonList(res.data.results)
        })
    )

    return (
        <div>
            {pokemonList.map(poke => {
                return <h4>{poke.name}</h4>
            })}
        </div>
    )
}

export default Products