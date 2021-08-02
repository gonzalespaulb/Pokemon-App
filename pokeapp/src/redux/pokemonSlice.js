import { createSlice } from "@reduxjs/toolkit";
import { allBadges2 } from "../components/badges/bagdeIcon";

export const pokemonSlice = createSlice({
  name: "pokemon",
  //initialize states
  initialState: {
    allPokemon: [],
    pokeDollars: 10000,
    allBadges: allBadges2,
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
