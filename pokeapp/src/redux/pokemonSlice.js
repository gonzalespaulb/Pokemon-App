import { createSlice } from "@reduxjs/toolkit";
import { allBadges } from "../components/badges/bagdeIcon";

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
        // <<----------------------------Basic Badge Logic Start------------------------------->>
        const basicBadgeIndex = state.allBadges.findIndex(
          (badge) => badge.name === "BasicBadge"
        );
        const basicBadge = state.allBadges[basicBadgeIndex];
        if (basicBadge.currentProgress !== basicBadge.progressTarget) {
          switch (action.payload.name) {
            case "bulbasaur":
              basicBadge.objectives.bulblsaurOwned = true;
              break;
            case "squirtle":
              basicBadge.objectives.squirtleOwned = true;
              break;
            case "charmander":
              basicBadge.objectives.charmanderOwned = true;
              break;
            default:
              break;
          }

          if (
            basicBadge.objectives.bulblsaurOwned &&
            basicBadge.objectives.squirtleOwned &&
            basicBadge.objectives.charmanderOwned
          ) {
            basicBadge.currentProgress = basicBadge.progressTarget;
          }
        }
        // <<----------------------------Basic Badge Logic End------------------------------->>
        // <<----------------------------Boulder Badge Logic Start------------------------------->>

        const boulderBadgeIndex = state.allBadges.findIndex(
          (badge) => badge.name === "BoulderBadge"
        );
        const boulderBadge = state.allBadges[boulderBadgeIndex];
        if (boulderBadge.currentProgress !== boulderBadge.progressTarget) {
          switch (action.payload.name) {
            case "kabutops":
              boulderBadge.objectives.kabutopsOwned = true;
              break;
            case "onix":
              boulderBadge.objectives.onixOwned = true;
              break;
            case "omastar":
              boulderBadge.objectives.omastarOwned = true;
              break;
            case "rhyhorn":
              boulderBadge.objectives.rhyhornOwned = true;
              break;
            case "graveler":
              boulderBadge.objectives.gravelerOwned = true;
              break;
            default:
              break;
          }

          if (
            boulderBadge.objectives.kabutopsOwned &&
            boulderBadge.objectives.onixOwned &&
            boulderBadge.objectives.omastarOwned &&
            boulderBadge.objectives.rhyhornOwned &&
            boulderBadge.objectives.gravelerOwned
          ) {
            boulderBadge.currentProgress = boulderBadge.progressTarget;
          }
        }

        // <<----------------------------Boulder Badge Logic End------------------------------->>
        // <<----------------------------Glacier Badge Logic Start------------------------------->>

        const glacierBadgeIndex = state.allBadges.findIndex(
          (badge) => badge.name === "GlacierBadge"
        );
        const glacierBadge = state.allBadges[glacierBadgeIndex];
        if (glacierBadge.currentProgress !== glacierBadge.progressTarget) {
          switch (action.payload.name) {
            case "lapras":
              glacierBadge.objectives.laprasOwned = true;
              break;
            case "mamoswine":
              glacierBadge.objectives.mamoswineOwned = true;
              break;
            case "jynx":
              glacierBadge.objectives.jynxOwned = true;
              break;
            case "dewgong":
              glacierBadge.objectives.dewgongOwned = true;
              break;
            case "cloyster":
              glacierBadge.objectives.cloysterOwned = true;
              break;
            case "weavile":
              glacierBadge.objectives.weavileOwned = true;
              break;
            default:
              break;
          }

          if (
            glacierBadge.objectives.laprasOwned &&
            glacierBadge.objectives.mamoswineOwned &&
            glacierBadge.objectives.jynxOwned &&
            glacierBadge.objectives.dewgongOwned &&
            glacierBadge.objectives.cloysterOwned &&
            glacierBadge.objectives.weavileOwned
          ) {
            glacierBadge.currentProgress = glacierBadge.progressTarget;
          }
        }
        // <<----------------------------Glacier Badge Logic End------------------------------->>
      }
    },
    // <<----------------------------Badge Reducer Logic End------------------------------>>
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
