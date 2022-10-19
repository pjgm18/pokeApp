import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { PokemonSearch } from './PokemonSearch';
import { usePokemon } from './usePokemon';


function HomePage( ) {

  const  {
    pokemonDetails,
    loading,
    searchedPokemon,
    setSearchValueName,
    searchValueName} = usePokemon()

//  loadPokemon()

if (loading) {
  return <p>cargando....</p>
} else {
  
  return (
   <>
   <h1>Home Page</h1>
    <PokemonSearch
    setSearchValueName={setSearchValueName}
    searchValueName={searchValueName}
    />
    
        <ul>
          {searchedPokemon.map(pokemon => (
            <PokemonLink key={pokemon.name} pokemon={pokemon} />
          ))}
        </ul>
      
    
   </>

  )
}}
export { HomePage}
function PokemonLink({ pokemon }) {
  return (
    <li>
      <Link to={`pokemon/${pokemon.name}`}>{pokemon.name}</Link>
    </li>
  );
}


