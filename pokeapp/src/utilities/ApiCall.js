const Pokedex = require("pokeapi-js-wrapper");

const interval = {
  offset: 0,
  limit: 1119,
};

const customOptions = {
  protocol: "http",
  //switch to https when hosting on firebase
  versionPath: "/api/v2/",
  cache: true,
  timeout: 5 * 1000, // 5s
  cacheImages: true
}


const P = new Pokedex.Pokedex(customOptions);

export const getAllPokemon = async () => {
  const results = await P.getPokemonsList(interval).then(
    (pokemonList) => pokemonList.results
  );
  return results;
};

export const getPokemonWeakness = async () => {
  const types = [
    "grass", 
    "fire",
    "ground",
    "flying",
    "bug",
    "water",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "poison",
    "fighting",
    "ghost",
    "steel",
    "psychic",
    "ice",
    "normal",
    "rock",
  ];
  const results = await P.getTypeByName(types);
  return results;
};
