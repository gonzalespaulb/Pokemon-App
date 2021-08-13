import React, { useState, useEffect } from "react";
import PokeDollarIcon from "../assets/uiIcons/pokeDollar.svg";

import {
  typeIconMapper,
  abilityMapper,
  gameMapper,
  weaknessIconMapper,
} from "../utilities/mappers";
import { useDispatch, useSelector } from "react-redux";
import { buyPokemon, sellPokemon } from "../redux/pokemonSlice";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import arrowIcon from "../assets/uiIcons/down-arrow.svg";
import { SidebarNav } from "./SidebarNav";

const sortAtoZ = (list) => {
  const sortedAtoZ = list.sort((name1, name2) => {
    if (name1 < name2) return -1;
    if (name1 > name2) return 1;
    return 0;
  });
  return sortedAtoZ;
};

const SideBar = ({
  badgeBtnActive1,
  badgeBtnActive2,
  blinker,
  isMoreInfo,
  makeUpperCase,
  selectedPokemon,
  setBadgeBtnActive1,
  setBadgeBtnActive2,
  setIsBadgeSideBar,
  setIsMoreInfo,
  setSelectedPokemon,
}) => {
  const [showPokemon, setShowPokemon] = useState(false);
  const [pokeNameList, setPokeNameList] = useState([]);

  const [videoGame, setVideoGame] = useState("");

  // Endpoint. This is the string that will be used by the type ahead
  const [pokeSearch, setPokeSearch] = useState([]);
  const pokeDollars = useSelector((state) => state.pokemon.pokeDollars);
  const allPokemon = useSelector((state) => state.pokemon.allPokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    getPokenames(allPokemon);
  }, [allPokemon]);

  const getPokenames = (pokeList) => {
    const names = pokeList.map((pokemon) => {
      return pokemon.name;
    });
    setPokeNameList(sortAtoZ(names));
  };

  // This event gets triggered by pressing the enter key
  const enterSubmit = (e) => {
    if (e.key === "Enter") {
      updateSidebarPokemon(allPokemon, pokeSearch);
    }
  };

  const updateSidebarPokemon = (pokemonList, searchValue) => {
    for (const pokemon of pokemonList) {
      if (searchValue[0] === pokemon.name) {
        setSelectedPokemon(pokemon);
        break;
      }
    }
  };

  const sidebarInformation = () => {
    const sideBarImageURL = {
      backgroundImage: `url(${selectedPokemon.picture})`,
    };

    return (
      <>
        <div className="sidebar-container">
          <div className="button-container">
            <SidebarNav
              badgeBtnActive1={badgeBtnActive1}
              badgeBtnActive2={badgeBtnActive2}
              setBadgeBtnActive1={setBadgeBtnActive1}
              setBadgeBtnActive2={setBadgeBtnActive2}
              setIsBadgeSideBar={setIsBadgeSideBar}
            />
          </div>
          {/* ---------------------------------------------------------------------------------------------DROPDOWN */}

          <div className="sidebar-dropdown">
            <div
              className="dropdown"
              onClick={() => {
                setShowPokemon(!showPokemon);
              }}
            >
              <div
                className="sidebar-dropdown-new"
                onKeyPress={(e) => {
                  enterSubmit(e);
                }}
              >
                <Typeahead
                  className="typeahead rbt-item"
                  id="basic-typeahead-single"
                  labelKey="name"
                  options={pokeNameList}
                  placeholder={selectedPokemon.name}
                  selected={pokeSearch}
                  onChange={setPokeSearch}
                  highlightOnlyResult={true}
                  dropup={false}
                />

                <button
                  className="dropdown-arrow"
                  onClick={() => {
                    updateSidebarPokemon(allPokemon, pokeSearch);
                  }}
                >
                  <img src={arrowIcon} alt="dropdown arrow" />
                </button>
              </div>
            </div>
            <div className="close-btn">x</div>
          </div>

          {/* ---------------------------------------------------------------------------------------------IMAGE */}

          <div className="sidebar-image" style={sideBarImageURL}>
            <div className="sidebar-value">
              <h3 className="image-value-font">
                <img src={PokeDollarIcon} alt="poke dollar image" />
                {selectedPokemon.value}
              </h3>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------NAME AND ID */}

          <div className="sidebar-name-id">
            <h3 className="sidebar-name-font">{makeUpperCase(selectedPokemon.name)}</h3>
            <h4 className="sidebar-id-font">#{selectedPokemon.id}</h4>
          </div>

          {/* ---------------------------------------------------------------------------------------------TYPE AND WEAKNESS */}

          <div className="type-weakness">
            <div className="sidebar-type">
              <h4 className="sidebar-subheading-font">Type:</h4>
              <div>{typeIconMapper(selectedPokemon.types)}</div>
            </div>

            <div className="sidebar-weakness">
              <h4 className="sidebar-subheading-font">Weaknesses:</h4>
              <div>{weaknessIconMapper(selectedPokemon.weaknesses)}</div>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------HEIGHT AND WEIGHT */}

          <div className="height-weight">
            <div className="height">
              <h4 className="sidebar-subheading-font">Height:</h4>
              <h5 className="sidebar-info-font">{selectedPokemon.height}</h5>
            </div>
            <div className="weight">
              <h4  className="sidebar-subheading-font">Weight:</h4>
              <h5 className="sidebar-info-font">{selectedPokemon.weight}</h5>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------ABILITIES */}
          {isMoreInfo ? (
            <div className="abilities">
              <h4 className="sidebar-subheading-font">Abilities:</h4>
              {abilityMapper(selectedPokemon.abilities)}
            </div>
          ) : null}

          {/* ---------------------------------------------------------------------------- MORE INFO START */}
          {isMoreInfo ? (
            <div className="indices-container">
              <div>
                <h4 className="sidebar-subheading-font">Game Indices:</h4>
                {videoGame.length > 1 ? <h5 className="sidebar-info-font">{videoGame}</h5>: null}
              </div>
              <div className="indices-grid">
                {isMoreInfo && selectedPokemon.games.length > 0
                  ? gameMapper(selectedPokemon.games, setVideoGame)
                  : null}
                {!selectedPokemon.games.length && isMoreInfo ? (
                  <p>None</p>
                ) : null}
              </div>
            </div>
          ) : null}

          {/* ---------------------------------------------------------------------------- BUY, SELL, AND MORE INFO BUTTON */}

          <div
            className={
              !isMoreInfo ? "btn-container" : "btn-container-more-info"
            }
          >
            <div className="buy-sell-container">
              <button
                className={"buy-btn"}
                onClick={() => {
                  if (pokeDollars - selectedPokemon.value < 0) {
                    blinker();
                  }
                  dispatch(buyPokemon(selectedPokemon));
                }}
              >
                <h4 className="sidebar-btn-font-1">Buy</h4>
              </button>
              <button
                className="sell-btn"
                onClick={() => {
                  dispatch(sellPokemon(selectedPokemon));
                }}
              >
                <h4 className="sidebar-btn-font-1">Sell</h4>
              </button>
            </div>

            <div className="more-info-btn">
              {!isMoreInfo ? (
                <h4  className="sidebar-btn-font"
                  onClick={() => {
                    setIsMoreInfo(true);
                  }}
                >
                  More Information
                </h4>
              ) : (
                <h4  className="sidebar-btn-font-2"
                  onClick={() => {
                    setIsMoreInfo(false);
                  }}
                >
                  Less Information
                </h4>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="sidebar">
      {selectedPokemon.types ? sidebarInformation() : <p>Side Bar</p>}
    </div>
  );
};

export default SideBar;
