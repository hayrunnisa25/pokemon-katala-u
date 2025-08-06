import React from "react";

const PokemonCard = ({pokemon}) =>{
 return ( 
  <div className="card">
  <img src={pokemon.sprites.front_default}
  alt={pokemon.name}/>
  <h2>{pokemon.name.charAt(0).toUpperCasel()+pokemon.name.slice(1)}</h2>
  <p>#{pokemon.id}</p>
  </div>
  );
};

export default PokemonCard


