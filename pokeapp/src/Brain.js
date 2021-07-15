import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemonWeakness } from "./utilities/ApiCall";

export const Brain = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);



  const getPokeInfo = () => {
    getAllPokemon().then((pokeList) =>
      pokeList.map(async (pokemon) => {
        await fetch(pokemon.url)
          .then((response) => response.json())
          .then((pokemon) =>
            setAllPokemon((currentPokemon) => [...currentPokemon, pokemon])
          );
      })
    );
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
    setWeaknesses(pokemonWeaknesses);
  };

  /**
   * Finds a pokemon's weaknesses based on its type(s)
   *
   * @param {Array} types - Current pokemon's types
   * @returns {Array} - List of unique weaknesses
   */
  const weaknessChecker = (types) => {
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

  const updatePokeInfo = () => {
    const updatedPokeInfo = allPokemon.map((pokemon) => {
      const weaknessInfo = weaknessChecker(pokemon.types)
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
        weaknesses:weaknessInfo,
        types: pokemon.types,
        abilities: pokemon.abilities,
        games: pokemon.game_indices,
      };
    });
    setAllPokemon(updatedPokeInfo);
  };


  useEffect(() => {
    getPokeInfo();
    getWeaknessInfo();
    updatePokeInfo();
  }, []);

  return (
    <div>
     
    </div>
  );
};
