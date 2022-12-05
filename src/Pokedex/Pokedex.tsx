import React, { useCallback, useEffect, useState } from 'react';
import PokeCard from './PokeCard';

export interface Pokemon {
  name: string;
  url: string;
}

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]); 

  const fetchAllPokemon = async () => {
      let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      let result = await response.json();
      setPokemonList(result.results)
  };
  
  useEffect(() => {
    fetchAllPokemon();
  }, [])

  return (
    <div>
      <div>Pokedex</div>
      {pokemonList.map((pokemon) => {
        return <PokeCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      })}
    </div>
    
  )
}
