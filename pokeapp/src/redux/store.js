import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemonSlice";

export default configureStore({
  reducer: {
    //setting the PokemonSlice component to have a name of pokemon in the store
    //when we use the useSelector hook, we call state.pokemon to access pokemonSlice
    pokemon: pokemonSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
      serializableCheck: false,
    }),
});
