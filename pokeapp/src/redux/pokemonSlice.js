import { createSlice } from "@reduxjs/toolkit";
import { allBadges } from "../components/badges/bagdeIcon";

// <<----------------------------Badge Update Funtctions Start------------------------------>>
const shouldUpdateBasicBadge = (pokemonList, purchasedPokemon) => {
  const foundBulbasaur = pokemonList.find((pokemon) => pokemon.id === 1);
  const foundSquirtle = pokemonList.find((pokemon) => pokemon.id === 7);
  const foundCharmander = pokemonList.find((pokemon) => pokemon.id === 4);

  let starterIds = [];
  if (foundBulbasaur.quantity > 0) {
    starterIds.push(foundBulbasaur.id);
  }
  if (foundSquirtle.quantity > 0) {
    starterIds.push(foundSquirtle.id);
  }
  if (foundCharmander.quantity > 0) {
    starterIds.push(foundCharmander.id);
  }
  if (!starterIds.includes(purchasedPokemon.id)) {
    starterIds.push(purchasedPokemon.id);
  }

  return starterIds.length === 3;
};

const shouldUpdateBoulderBadge = (pokemonList, purchasedPokemon) => {
  const foundGraveler = pokemonList.find((pokemon) => pokemon.id === 75);
  const foundRhyhorn = pokemonList.find((pokemon) => pokemon.id === 111);
  const foundOmastar = pokemonList.find((pokemon) => pokemon.id === 139);
  const foundKabutops = pokemonList.find((pokemon) => pokemon.id === 141);
  const foundOnix = pokemonList.find((pokemon) => pokemon.id === 95);

  let brocksPokeIds = [];
  if (foundGraveler.quantity > 0) {
    brocksPokeIds.push(foundGraveler.id);
  }
  if (foundRhyhorn.quantity > 0) {
    brocksPokeIds.push(foundRhyhorn.id);
  }
  if (foundOmastar.quantity > 0) {
    brocksPokeIds.push(foundOmastar.id);
  }
  if (foundKabutops.quantity > 0) {
    brocksPokeIds.push(foundKabutops.id);
  }
  if (foundOnix.quantity > 0) {
    brocksPokeIds.push(foundOnix.id);
  }

  if (!brocksPokeIds.includes(purchasedPokemon.id)) {
    brocksPokeIds.push(purchasedPokemon.id);
  }

  return brocksPokeIds.length === 5;
};

const shouldUpdateGlacierBadge = (pokemonList, purchasedPokemon) => {
  const foundMamoswine = pokemonList.find((pokemon) => pokemon.id === 473);
  const foundJynx = pokemonList.find((pokemon) => pokemon.id === 124);
  const foundDewgong = pokemonList.find((pokemon) => pokemon.id === 87);
  const foundCloyster = pokemonList.find((pokemon) => pokemon.id === 91);
  const foundLapras = pokemonList.find((pokemon) => pokemon.id === 131);
  const foundWeavile = pokemonList.find((pokemon) => pokemon.id === 461);

  let prycesPokeIds = [];
  if (foundMamoswine.quantity > 0) {
    prycesPokeIds.push(foundMamoswine.id);
  }
  if (foundJynx.quantity > 0) {
    prycesPokeIds.push(foundJynx.id);
  }
  if (foundDewgong.quantity > 0) {
    prycesPokeIds.push(foundDewgong.id);
  }
  if (foundCloyster.quantity > 0) {
    prycesPokeIds.push(foundCloyster.id);
  }
  if (foundLapras.quantity > 0) {
    prycesPokeIds.push(foundLapras.id);
  }
  if (foundWeavile.quantity > 0) {
    prycesPokeIds.push(foundWeavile.id);
  }

  if (!prycesPokeIds.includes(purchasedPokemon.id)) {
    prycesPokeIds.push(purchasedPokemon.id);
  }

  return prycesPokeIds.length === 6;
};

// <<----------------------------Badge Update Funtctions End------------------------------>>

export const pokemonSlice = createSlice({
  name: "pokemon",
  //initialize states
  initialState: {
    allPokemon: [],
    pokeDollars: 100000,
    allBadges: allBadges,
  },
  //The reducers are the functions that change our state
  reducers: {
    //Updates allPokemon state with the updated info
    setPokeList: (state, action) => {
      state.allPokemon = action.payload;
    },
    buyPokemon: (state, action) => {
      if (state.pokeDollars - action.payload.value > 0) {
        //Finds the index of pokemon in the array that matches the id of the pokemon being updated
        const pokeIndex = state.allPokemon.findIndex(
          (element) => element.id === action.payload.id
        );

        //If Pokemon is in the list, just update the quantity property and deduct pokedollars
        if (pokeIndex !== -1) {
          state.allPokemon[pokeIndex].quantity++;
          state.pokeDollars -= action.payload.value;
        }

        // <<----------------------------Badge Reducer Logic Start------------------------------>>

        const basicBadgeIndex = state.allBadges.findIndex(
          (badge) => badge.name === "BasicBadge"
        );

        if (
          state.allBadges[basicBadgeIndex].currentProgress !==
          state.allBadges[basicBadgeIndex].progressTarget
        ) {
          if (shouldUpdateBasicBadge(state.allPokemon, action.payload)) {
            state.allBadges[basicBadgeIndex].currentProgress =
              state.allBadges[basicBadgeIndex].progressTarget;
          }
        }

        const boulderBadgeIndex = state.allBadges.findIndex(
          (badge) => badge.name === "BoulderBadge"
        );

        if (
          state.allBadges[boulderBadgeIndex].currentProgress !==
          state.allBadges[boulderBadgeIndex].progressTarget
        ) {
          if (shouldUpdateBoulderBadge(state.allPokemon, action.payload)) {
            state.allBadges[boulderBadgeIndex].currentProgress =
              state.allBadges[boulderBadgeIndex].progressTarget;
          }
        }

        const GlacierBadgeIndex = state.allBadges.findIndex(
          (badge) => badge.name === "GlacierBadge"
        );

        if (
          state.allBadges[GlacierBadgeIndex].currentProgress !==
          state.allBadges[GlacierBadgeIndex].progressTarget
        ) {
          if (shouldUpdateGlacierBadge(state.allPokemon, action.payload)) {
            state.allBadges[GlacierBadgeIndex].currentProgress =
              state.allBadges[GlacierBadgeIndex].progressTarget;
          }
        }

        // <<----------------------------Badge Reducer Logic End------------------------------>>
      }
    },

    sellPokemon: (state, action) => {
      //Finds the index of pokemon in the array that matches the id of the pokemon being updated
      const pokeIndex = state.allPokemon.findIndex(
        (element) => element.id === action.payload.id
      );

      //Checks to see if the pokemon that is clicked on is in the list
      if (pokeIndex !== -1) {
        //Saturate the quantity at 0,
        if (state.allPokemon[pokeIndex].quantity >= 1) {
          state.allPokemon[pokeIndex].quantity--;
          //User gets paid the pokemon's value
          state.pokeDollars += action.payload.value;
        }
      }
    },
  },
});

export const { buyPokemon, sellPokemon, setPokeList } = pokemonSlice.actions;

export default pokemonSlice.reducer;
