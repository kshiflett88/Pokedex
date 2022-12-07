import React, { useCallback, useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import { Region } from '../Helper/regions';

export interface Pokemon {
  entry_number: number;
}

interface PokedexProps {
  region: Region;
}

export default function Pokedex(props: PokedexProps) {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]); 

  const fetchAllPokemon = async () => {
      let response = await fetch(props.region);
      let result = await response.json();
      setPokemonList(result.pokemon_entries)
  };
  
  useEffect(() => {
    fetchAllPokemon();
  }, [])

  return (
    <div className='flex items-start flex-wrap'>
      {pokemonList.map((pokemon) => {
        return <PokeCard key={pokemon.entry_number} entry_number={pokemon.entry_number} />
      })}
    </div>
    
  )
}
