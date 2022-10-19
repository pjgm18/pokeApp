import React, { useEffect } from "react";
const API = 'https://pokeapi.co/api/v2'

function usePokemon(){

const [pokemonDetails, setPokemonDetails] = React.useState([])
const [error, setError] = React.useState(true)
const [loading, setLoading]=React.useState(true)
const [searchValueName, setSearchValueName] = React.useState('')



console.log(loading);
console.log(pokemonDetails);

let searchedPokemon

if(!searchValueName.length){
  
    searchedPokemon = pokemonDetails
  }else if (searchValueName.length>=1 ){
      
    searchedPokemon = pokemonDetails.filter(p => {
      const pokemonName = p.name.toLowerCase()
      const searchText = searchValueName.toLowerCase()
      const validacion = pokemonName.includes(searchText)
      return validacion
    
    })}
    console.log('searchedPokemon');
    console.log(searchedPokemon);


    const  getData = async ()=>{
        try {         
            const response = await (fetch(`${API}/pokemon?limit=50`))
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
        searchedPokemon,
        loading,
        searchValueName, 
        setLoading,
        setSearchValueName
    }
}

export { usePokemon}

