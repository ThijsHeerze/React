import React from "react";
import Pokemon from './Pokemon';

function PokemonDetails() {
  return (
    Pokemon.map((pokemon) =>
      <div key={`${pokemon.id}-${pokemon.name}`}>
        <p>{pokemon.id}</p>
        <p>{pokemon.name}</p>
      </div>)
    )
}

export default PokemonDetails;