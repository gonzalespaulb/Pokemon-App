import React, { useState, useEffect } from "react";
import PokeDollarIcon from "../assets/pokeDollar.svg";
import {
  typeIconMapper,
  abilityMapper,
  gameMapper,
  weaknessIconMapper,
} from "../utilities/mappers";
import { useDispatch, useSelector } from "react-redux";
import { buyPokemon, sellPokemon } from "../redux/pokemonSlice";

const sortAtoZ = (list) => {
  const sortedAtoZ = list.sort((name1, name2) => {
    if (name1 <  name2) return -1;
    if (name1 >  name2) return 1;
    return 0;
  });
  return sortedAtoZ;
};

const SideBar = ({
  selectedPokemon,
  makeUpperCase,
  isMoreInfo,
  setIsMoreInfo,
}) => {
  const [showPokemon, setShowPokemon] = useState(false);
  const [pokeNameList, setPokeNameList] = useState([]);

  const allPokemon = useSelector((state) => state.pokemon.allPokemon);
  const dispatch = useDispatch();

  useEffect(()=> {
    getPokenames(allPokemon)
  },[allPokemon]);

  const getPokenames = (pokeList) => {
    const names = pokeList.map((pokemon) => {
      return pokemon.name;
    });
    setPokeNameList(sortAtoZ(names))
  };

  const renderPokenames = (nameList) => {
    return nameList.map((name)=> {
      return  <div key={name}>{name}</div>
    })
  }

  const sidebarInformation = () => {
    const sideBarImageURL = {
      backgroundImage: `url(${selectedPokemon.picture})`,
    };
  
    return (
      <div className="sidebar-container">
        <div className="sidebar-dropdown">
          <div
            className="dropdown"
            onClick={() => {
              setShowPokemon(!showPokemon);
            }}
          >
            <div className="dropdown-items">
               {showPokemon && renderPokenames(pokeNameList)}
            </div>
          </div>
          <div className="close-btn">x</div>
        </div>

        <div className="sidebar-image" style={sideBarImageURL}></div>

        <div className="sidebar-name-id">
          <h3>{makeUpperCase(selectedPokemon.name)}</h3>
          <h4>#{selectedPokemon.id}</h4>
        </div>

        <div className="type-weakness">
          <div className="sidebar-type">
            <h4>Type</h4>
            <div>{typeIconMapper(selectedPokemon.types)}</div>
          </div>

          <div className="sidebar-weakness">
            <h4>Weakness</h4>
            <div>{weaknessIconMapper(selectedPokemon.weaknesses)}</div>
          </div>
        </div>

        <div className="btn-container">
          <div className="buy-sell-container">
            <button
              className="buy-btn"
              onClick={() => {
                dispatch(buyPokemon(selectedPokemon));
              }}
            >
              <h4>Buy</h4>
            </button>
            <button
              className="sell-btn"
              onClick={() => {
                dispatch(sellPokemon(selectedPokemon));
              }}
            >
              <h4>Sell</h4>
            </button>
          </div>

          <div className="more-info-btn">
            {!isMoreInfo ? (
              <h4
                onClick={() => {
                  setIsMoreInfo(true);
                }}
              >
                More Information
              </h4>
            ) : (
              <h4
                onClick={() => {
                  setIsMoreInfo(false);
                }}
              >
                Less Information
              </h4>
            )}
          </div>

          <div>
            {isMoreInfo ? abilityMapper(selectedPokemon.abilities) : null}
          </div>
          <div>
            {isMoreInfo ? gameMapper(selectedPokemon.games) : null}
            {!selectedPokemon.games.length && isMoreInfo ? (
              <p>This Pokemon has not been in any games</p>
            ) : null}
          </div>
          <div>
            {isMoreInfo ? <p>{selectedPokemon.height}</p> : null}
            {isMoreInfo ? <p>{selectedPokemon.weight}</p> : null}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="sidebar">
      {selectedPokemon.types ? sidebarInformation() : <p>Side Bar</p>}
    </div>
  );
};

export default SideBar;
