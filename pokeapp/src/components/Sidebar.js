import React from "react";
import PokeDollarIcon from "../assets/pokeDollar.svg"

const SideBar = ({ selectedPokemon }) => {
  const typeMapper = (types) => {
    return types?.map((typeObject, index) => {
      return <p key={index}>{typeObject.type.name}</p>;
    });
  };

  const weaknessMapper = (weaknesses) => {
    return weaknesses?.map((weakness, index) => {
      return <p key={index}>{weakness.name}</p>;
    });
  };

  const abilityMapper = (abilities) => {
    return abilities?.map((abilityObject, index) => {
      return <p key={index}>{abilityObject.ability.name}</p>;
    });
  };

  const gameMapper = (games) => {
    return games?.map((gameObject, index) => {
      return <p key={index}>{gameObject.version.name}</p>;
    });
  };

  const renderPokemonInfo = () => {
      return(
        <>
        <p>{selectedPokemon.name}</p>
        <img src={selectedPokemon.picture} alt={selectedPokemon.name} />
        <p>{selectedPokemon.id}</p>
        <img src={PokeDollarIcon} alt="Currency Icon" style={{height: '16px'}}/>
        <p>{selectedPokemon.value}</p>
        <div>{typeMapper(selectedPokemon.types)}</div>
        <div>{weaknessMapper(selectedPokemon.weaknesses)}</div>
        <div>{abilityMapper(selectedPokemon.abilities)}</div>
        <button> Buy </button>
        <button> Sell </button>
        <button> More Information </button>
        <p>{selectedPokemon.height}</p>
        <p>{selectedPokemon.weight}</p>
        <div>{gameMapper(selectedPokemon.games)}</div>
        </>
      )
  }

  return (
    <div className="sidebar">
        {selectedPokemon.types ? renderPokemonInfo() : <p>Side Bar</p>}
    </div>
  );
};

export default SideBar;
