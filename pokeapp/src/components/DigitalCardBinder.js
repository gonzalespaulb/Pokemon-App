import React from "react";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

const DigitalCardBinder = ({
  allPokemonFiltered,
  setSelectedPokemon,
  isMyPoke,
  setAllPokemonFiltered,
  makeUpperCase,
  setIsMoreInfo,
  setIsBadgeSideBar,
  setbadgeBtnActive1,
  setbadgeBtnActive2,
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
          setIsBadgeSideBar={setIsBadgeSideBar}
          setbadgeBtnActive1={setbadgeBtnActive1}
          setbadgeBtnActive2={setbadgeBtnActive2}
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
          makeUpperCase={makeUpperCase}
          setIsMoreInfo={setIsMoreInfo}
          setIsBadgeSideBar={setIsBadgeSideBar}
          setbadgeBtnActive1={setbadgeBtnActive1}
          setbadgeBtnActive2={setbadgeBtnActive2}
        />
      );
    });
  };

  return (
    <div className="digital-card-binder">
      {isMyPoke ? myPokeListCardPrinter() : pokedexCardPrinter()}
    </div>
  );
};

export default DigitalCardBinder;
