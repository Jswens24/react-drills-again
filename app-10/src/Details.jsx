import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const getDetail = (id) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
            return res.data;
        })
}



const Details = () => {
    const [pokemon, setPokemon] = useState({})
    let { id } = useParams();


    useEffect(() => {
        (async () => {
            setPokemon(await getDetail(id))
        })()
    }, [])

    console.log(pokemon);


    return (
        <div>
            {pokemon.sprites && <img src={pokemon.sprites.front_shiny} alt='pokemon' />}
            <h2>{pokemon.name}</h2>
        </div>
    )
}

export default Details