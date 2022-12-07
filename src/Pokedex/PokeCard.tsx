import React, { useEffect, useState } from 'react'
import { Pokemon } from './Pokedex';
import '../css/pokecard.css'

export default function PokeCard(props: Pokemon) {
  const [pokeImage, setPokeImage] = useState('');

  const fetchPokemonDetails = async () => {
      let response = await fetch(props.url);
      let result = await response.json();
      // console.log(result)
      // setPokeImage(result.sprites.front_default)
      setPokeImage(result)
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, [])

  return (
    <div className='pokecard bg-red'>
      <img
        src={pokeImage}
        alt="Default for Pokemon"
        />
        <div className='ttc'>{props.name}</div>
    </div>
  )
}
