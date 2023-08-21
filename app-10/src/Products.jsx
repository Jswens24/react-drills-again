import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const getPoke = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => {
            console.log(res.data.results);
            return res.data.results
        })
}


const Products = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const clickHandleDetails = (e) => {
        console.log(e.target.id);
    }



    useEffect(() => {
        (async () => {
            setPokemonList(await getPoke())
        })()
    }, [])

    return (
        <div>
            {pokemonList.map(poke => {
                return (
                    <Link to={`/details/${poke.name}`} key={poke.name}>
                        <h4 id={poke.name}>{poke.name}</h4>
                    </Link>
                )
            })}
        </div>
    )
}

export default Products