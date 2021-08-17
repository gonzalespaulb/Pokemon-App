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
          clickHandler={cardBinderClickHandler}
          id={pokemon.id}
          key={pokemon.id}
          makeUpperCase={makeUpperCase}
          triggerOn={triggerOn}
        />
      );
    });
  };

  const myPokeListCardPrinter = () => {
    if (myPokeList.length) {
      return myPokeList?.map((pokemon) => {
        return (
          <PokemonCard
            blinker={blinker}
            clickHandler={cardBinderClickHandler}
            id={pokemon.id}
            key={pokemon.id}
            makeUpperCase={makeUpperCase}
            triggerOn={triggerOn}
          />
        );
      });
    } else {
      return (
        <div className="my-poke-page">
          <h2 className="empty-state-text">You do not have any Pokemon</h2>
          <div className="ball-container">
            <div className="large-ball">
              <div className="horiz-line"></div>
              <div className="medium-ball">
                <div className="small-ball"></div>
              </div>
            </div>
          </div>
          <h2 className="empty-state-text">Go Win or Buy Some!</h2>
        </div>
      );
    }
  };

  return (
    <div
      className={
        isMyPoke && !myPokeList.length
          ? "digital-card-binder-empty"
          : "digital-card-binder"
      }
    >
      {isMyPoke ? myPokeListCardPrinter() : pokedexCardPrinter()}
    </div>
  );
};

export default DigitalCardBinder;
