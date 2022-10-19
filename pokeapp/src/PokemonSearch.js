import './PokemonSearch.css'
function PokemonSearch({
    setSearchValueName,
    searchValueName,
}){
    

    const onSearchValueImputName = (event)=>{
       
        setSearchValueName(event.target.value)
    }
    
    return( 
        <div className="inputContainer">
            <input 
            className="inputSearch"
            placeholder="Busqueda por nombre"
      
            value={searchValueName}
          
            onChange= {onSearchValueImputName}
            />


        </div>
        
    )

}

export { PokemonSearch}