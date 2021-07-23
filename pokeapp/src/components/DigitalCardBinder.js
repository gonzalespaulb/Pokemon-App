import React from "react";
import PokemonCard from "./PokemonCard";

const DigitalCardBinder = ({
  allPokemonFiltered,
  setSelectedPokemon,
  myPokeList,
  setMyPokeList,
  isPokeList,
  setAllPokemonFiltered,
  setPokeDollars, 

}) => {

  const pokedexCardPrinter = () => {
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
          setMyPokeList={setMyPokeList}
          setAllPokemonFiltered={setAllPokemonFiltered}
          myPokeList={myPokeList}
          setPokeDollars={setPokeDollars}
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
          setMyPokeList={setMyPokeList}
          isPokeList={isPokeList}
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
