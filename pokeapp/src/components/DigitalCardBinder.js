import React from "react";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

const DigitalCardBinder = ({
  allPokemonFiltered,
  setSelectedPokemon,
  isPokeList,
  setAllPokemonFiltered,
  makeUpperCase,
  setIsMoreInfo,
}) => {
  const myPokeList = useSelector((state) =>
    state.pokemon.allPokemon.filter((pokemon) => pokemon.quantity > 0)
  );

  const pokedexCardPrinter = () => {
    return allPokemonFiltered.map((pokemon) => {
      return (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          setSelectedPokemon={setSelectedPokemon}
          setAllPokemonFiltered={setAllPokemonFiltered}
          makeUpperCase={makeUpperCase}
          setIsMoreInfo={setIsMoreInfo}
        />
      );
    });
  };

  const myPokeListCardPrinter = () => {
    return myPokeList?.map((pokemon) => {
      return (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          name={pokemon.name}
          id={pokemon.id}
          picture={pokemon.picture}
          types={pokemon.types}
          setSelectedPokemon={setSelectedPokemon}
          isPokeList={isPokeList}
          makeUpperCase={makeUpperCase}
        />
      );
    });
  };

  return (
    <div className="digital-card-binder">
      {isPokeList ? myPokeListCardPrinter() : pokedexCardPrinter()}
    </div>
  );
};

export default DigitalCardBinder;
