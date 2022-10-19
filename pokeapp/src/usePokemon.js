import React, { useEffect } from "react";
import { Await } from "react-router-dom";
const API = 'https://pokeapi.co/api/v2'

function usePokemon(){

const [pokemonDetails, setPokemonDetails] = React.useState([])
const [error, setError] = React.useState(true)
const [loading, setLoading]=React.useState(true)


console.log(loading);
console.log(pokemonDetails);



    const  getData = async ()=>{
        try {         
            const response = await (fetch(`${API}/pokemon?limit=20&offset=0`))
            const result = await response.json()
            const pokemon = result.results
             return pokemon
        } catch (error) {
            setError(error)
        }
        
       
    }
    const  getPokemonDetails = async (url)=>{
        try {
            const response = await (fetch(url))
            const result = await response.json()
             return result
        } catch (error) {
            setError(error)
        }
        
       
    }
    const loadPokemon = async ()=>{
        try {
            const response = await getData()
            const pokemonArray = []
            console.log('await response');
            console.log(response);

           await response.forEach(async (pokemon)=> {
                const pokeDetails = await getPokemonDetails(pokemon.url)
                pokemonArray.push({
                    id: pokeDetails.id,
                    name: pokeDetails.name,
                    type: pokeDetails.types[0].type.name,
                    order: pokeDetails.order,
                    imagen:pokeDetails.sprites.other['official-artwork'].front_default
                })
                setPokemonDetails([...pokemonDetails, ...pokemonArray])
                 }  );

          
               
            
        } catch (error) {
            setError(error)
        }
       }

  
   
    useEffect(()=>{

        
      
        console.log('usefect');
        (async ()=>{
    
            await  loadPokemon()
            setLoading(false)
            
            
            
        })()
        
       
            
        
        
  },[])
   
    return{
        pokemonDetails,
        loading,
        setLoading
    }
}

export { usePokemon}

