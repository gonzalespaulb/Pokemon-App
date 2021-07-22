import React from "react";
import PokemonCard from "./PokemonCard";


const DigitalCardBinder = ({ allPokemonFiltered }) => {
  

  const cardPrinter = () => {
    return allPokemonFiltered.map((pokemon) => {
      return (
        <PokemonCard
          key={pokemon.id}
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
