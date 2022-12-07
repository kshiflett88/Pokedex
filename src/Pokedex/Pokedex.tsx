import React, { useCallback, useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import { Region } from '../Helper/regions';

export interface Pokemon {
  name: string;
  url: string;
}

interface PokedexProps {
  region: Region;
}

export default function Pokedex(props: PokedexProps) {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]); 

  const fetchAllPokemon = async () => {
      let response = await fetch(props.region);
      let result = await response.json();
      let other = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=152")
      console.log(await other.json())
      console.log(result.pokemon_species);
      setPokemonList(result.pokemon_species)
  };
  
  useEffect(() => {
    fetchAllPokemon();
  }, [])

  return (
    <div className='flex items-start flex-wrap'>
      {pokemonList.map((pokemon) => {
        return <PokeCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      })}
    </div>
    
  )
}
