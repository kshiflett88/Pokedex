import React, { useEffect, useState } from 'react'
import { Pokemon } from './Pokedex';
import '../css/pokecard.css'

export default function PokeCard(props: Pokemon) {
  const [pokeImage, setPokeImage] = useState('');
  const [pokemonName, setPokemonName] = useState('');

  const fetchPokemonDetails = async () => {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.entry_number}`);
      let result = await response.json();
      setPokeImage(result.sprites.other.home.front_default)
      setPokemonName(result.name)
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
        <div className='ttc'>{pokemonName}</div>
    </div>
  )
}
