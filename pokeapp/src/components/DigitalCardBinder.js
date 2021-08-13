import React from "react";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

const DigitalCardBinder = ({
  allPokemonFiltered,
  blinker,
  isMyPoke,
  makeUpperCase,
  setBadgeBtnActive1,
  setBadgeBtnActive2,
  setIsBadgeSideBar,
  setIsMoreInfo,
  triggerOn,
  setSelectedPokemon,
}) => {
  const myPokeList = useSelector((state) =>
    state.pokemon.allPokemon.filter((pokemon) => pokemon.quantity > 0)
  );

  const cardBinderClickHandler = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsMoreInfo(false);
    setIsBadgeSideBar(false);
    setBadgeBtnActive1(false);
    setBadgeBtnActive2(true);
  };

  const pokedexCardPrinter = () => {
    return allPokemonFiltered.map((pokemon) => {
      return (
        <PokemonCard
          blinker={blinker}
          key={pokemon.id}
          id={pokemon.id}
          makeUpperCase={makeUpperCase}
          clickHandler={cardBinderClickHandler}
          triggerOn={triggerOn}
        />
      );
    });
  };

  const myPokeListCardPrinter = () => {
    return myPokeList?.map((pokemon) => {
      return (
        <PokemonCard
          blinker={blinker}
          key={pokemon.id}
          id={pokemon.id}
          makeUpperCase={makeUpperCase}
          clickHandler={cardBinderClickHandler}
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
