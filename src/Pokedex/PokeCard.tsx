import React, { useEffect, useState } from 'react'
import { Pokemon } from './Pokedex';

export default function PokeCard(props: Pokemon) {
  const [pokeImage, setPokeImage] = useState('');

  const fetchPokemonDetails = async () => {
      let response = await fetch(props.url);
      let result = await response.json();
      setPokeImage(result.sprites.front_default)
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, [])

  return (
    <div>
      <div>{props.name}</div>
      <img
        src={pokeImage}
        alt="Default for Pokemon"
      />
    </div>
  )
}
