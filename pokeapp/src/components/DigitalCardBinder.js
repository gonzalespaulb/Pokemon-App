import React from "react";
import PokemonCard from "./PokemonCard";


const DigitalCardBinder = ({ allPokemonFiltered }) => {
  

  const cardPrinter = () => {
    return allPokemonFiltered.map((pokemon) => {
      return (
        <PokemonCard
          name={pokemon.name}
          id={pokemon.id}
          picture={pokemon.picture}
          types={pokemon.types}
         
        />
      );
    });
 
  };

  return (
    <div className="digital-card-binder">
      {allPokemonFiltered ? cardPrinter() : <h1>No Pokemon</h1>}
    </div>
  );
};

export default DigitalCardBinder;
