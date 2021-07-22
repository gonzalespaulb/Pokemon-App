import React from "react";
import PokemonCard from "./PokemonCard";


const DigitalCardBinder = ({ allPokemonFiltered, setSelectedPokemon }) => {


  const cardPrinter = () => {
    return allPokemonFiltered.map((pokemon) => {
      return (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          name={pokemon.name}
          id={pokemon.id}
          picture={pokemon.picture}
          types={pokemon.types}
          setSelectedPokemon={setSelectedPokemon}
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
