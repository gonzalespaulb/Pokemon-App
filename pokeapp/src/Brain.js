import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemonWeakness } from "./utilities/apiCall";
import FilterBar from "./components/FilterBar";
import DigitalCardBinder from "./components/DigitalCardBinder";
import Navigation from "./components/Navigation";
import SideBar from "./components/Sidebar";
import Layout from "./components/Layout";
import GamePage from "./components/GamePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { setPokeList } from "./redux/pokemonSlice";
import { useSelector, useDispatch } from "react-redux";
import BadgeSideBar from "./components/badges/BadgeSideBar";

export const Brain = () => {
  const allPokemon = useSelector((state) => state.pokemon.allPokemon);
  const dispatch = useDispatch();

  const [allPokemonFiltered, setAllPokemonFiltered] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [isMoreInfo, setIsMoreInfo] = useState(false);
  const [isPokeList, setIsPokeList] = useState(false);
  const [isBadgeSideBar, setIsBadgeSideBar] = useState(false);

  const resolvePokeList = async (pokeList) => {
    return Promise.all(pokeList);
  };

  const makeUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getWeight = (weight) => {
    const weightInHectograms = weight;
    const weightInPounds = `${
      Math.round(10 * (weightInHectograms / 4.536)) / 10
    } lbs`;
    return weightInPounds;
  };

  const getHeight = (height) => {
    const initialHeight = Math.round(10 * (height / 3.04)) / 10;
    const feet = Math.floor(initialHeight);
    const decimal = (initialHeight - feet) * 10;
    const inches = decimal !== 0 ? Math.floor(12 / decimal) : 0;
    const finalHeight = inches !== 0 ? `${feet}' ${inches}"` : `${feet}'`;
    return finalHeight;
  };

  const getPokeInfo = async () => {
    const pokemonListUrls = await getAllPokemon();
    //Generates a list of promises
    //Each promise contains information about each Pokemon
    const pokemonList = await pokemonListUrls.map(async (pokemon) => {
      return await fetch(pokemon.url).then((response) => response.json());
    });
    //Wait for all promises to resolve by using resolvePokeList function
    const resolvedList = await resolvePokeList(pokemonList);
    //Grab the weakness info
    const weaknessInfo = await getWeaknessInfo();
    //Enrich each object with custom properties
    const updatedPokemonList = updatePokeInfo(resolvedList, weaknessInfo);
    //Save the completed list and complete initialization
    dispatch(setPokeList(updatedPokemonList));
    setAllPokemonFiltered(updatedPokemonList);
  };

  const getWeaknessInfo = async () => {
    const pokemonWeaknesses = await getPokemonWeakness().then((types) =>
      types.map((type) => {
        return {
          name: type.name,
          weakness: type.damage_relations.double_damage_from,
        };
      })
    );
    return pokemonWeaknesses;
  };

  /**
   * Finds a pokemon's weaknesses based on its type(s)
   *
   * @param {Array} types - Current pokemon's types
   * @returns {Array} - List of unique weaknesses
   */
  const weaknessChecker = (types, weaknesses) => {
    const mergedWeaknesses = [];
    //Examines a pokemon's types to aquire the weakness classes
    const foundWeaknesses = types.map((type) => {
      //Searches through weakness array to find the weakness class that corresponds to each type
      const foundWeakness = weaknesses.find(
        (weakness) => weakness.name === type.type.name
      );
      return foundWeakness.weakness;
    });
    //Combine all weaknesses into one array and remove duplicates
    foundWeaknesses.map((weaknessArray) => {
      //Maps over each weakness class
      weaknessArray.map((weakness) => {
        //Checking to see if the current weakness is already in the mergedweakness array
        if (
          !mergedWeaknesses.find(
            (mergedweakness) => mergedweakness.name === weakness.name
          )
        ) {
          //Will only add a weakness to the mergedweakness array if it is not already in there
          mergedWeaknesses.push(weakness);
        }
      });
    });
    return mergedWeaknesses;
  };

  const updatePokeInfo = (pokemonList, weaknessList) => {
    const updatedPokeInfo = pokemonList.map((pokemon) => {
      const weaknessInfo = weaknessChecker(pokemon.types, weaknessList);
      const updatedHeight = getHeight(pokemon.height);
      const updatedWeight = getWeight(pokemon.weight);

      return {
        ...pokemon,
        picture: pokemon.sprites.front_default,
        value:
          pokemon.base_experience +
          pokemon.abilities.length * 10 +
          pokemon.game_indices.length * 10 +
          pokemon.moves.length * 10 -
          weaknessInfo.length +
          pokemon.weight +
          pokemon.height,
        weaknesses: weaknessInfo,
        types: pokemon.types,
        abilities: pokemon.abilities,
        games: pokemon.game_indices,
        height: updatedHeight,
        weight: updatedWeight,
        quantity: 0,
      };
    });
    return updatedPokeInfo;
  };

  useEffect(() => {
    async function init() {
      await getPokeInfo();
    }
    init();
  }, []);

  return (
    <Router>
      <div>
        <Route exact path="/">
          <Layout
            isBadgeSideBar={isBadgeSideBar}
            Navigation={
              <Navigation
                setIsPokeList={setIsPokeList}
                setIsBadgeSideBar={setIsBadgeSideBar}
              />
            }
            FilterBar={
              <FilterBar
                allPokemon={allPokemon}
                setAllPokemonFiltered={setAllPokemonFiltered}
              />
            }
            BadgeSideBar={
              <BadgeSideBar
                setIsBadgeSideBar={setIsBadgeSideBar}
                isBadgeSideBar={isBadgeSideBar}
              />
            }
            SideBar={
              <SideBar
                selectedPokemon={selectedPokemon}
                makeUpperCase={makeUpperCase}
                isMoreInfo={isMoreInfo}
                setIsMoreInfo={setIsMoreInfo}
                setSelectedPokemon={setSelectedPokemon}
              />
            }
            DigitalCardBinder={
              <DigitalCardBinder
                allPokemonFiltered={allPokemonFiltered}
                setSelectedPokemon={setSelectedPokemon}
                setAllPokemonFiltered={setAllPokemonFiltered}
                makeUpperCase={makeUpperCase}
                setIsMoreInfo={setIsMoreInfo}
                isPokeList={isPokeList}
              />
            }
          />
        </Route>
        <Route path="/GamePage">
          <GamePage
            allPokemon={allPokemon}
            makeUpperCase={makeUpperCase}
            setIsPokeList={setIsPokeList}
          />
        </Route>
      </div>
    </Router>
  );
};
