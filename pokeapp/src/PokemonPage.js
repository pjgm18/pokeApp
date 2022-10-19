import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePokemon } from './usePokemon';
// import { Link } from 'react-router-dom';
// import { blogdata } from './blogdata'

function PokemonPage() {
  const  {pokemonDetails,loading} = usePokemon()

  const navigate = useNavigate()
   const params = useParams()
 

  if (loading) {
 
    return <p>cargando....</p>
  } else {
    console.log(pokemonDetails);
    const pokemon = pokemonDetails.find(p=>(p.name === params.slug))
    console.log(pokemon);
    return (
      <div className='pokemon-details'>
      <button onClick={()=> navigate('/')}>Regresar</button>
      <h1>PokemonPage</h1>
      
      <h2>Nombre : { pokemon?.name }</h2>
      <h3>Tipo : { pokemon?.type }</h3>
      <img src= {pokemon?.imagen}/>

      </div>
    
      );
  }
  
}

export { PokemonPage };
