import { typeIconMaker } from "../utilities/pokemonIcon";
import ToolTip from "./ToolTip";


const PokemonCard = ({
  name,
  id,
  types,
  picture,
  pokemon,
  setSelectedPokemon,
  setMyPokeList,
  isPokeList,
  myPokeList,
  setPokeDollars,
  addToPokeList, 
  subtractPokeDollars, 
  addPokeDollars, 
  makeUpperCase, 
  removeFromPokeList,
  setIsMoreInfo,

}) => {

  const cardImage = {
    backgroundImage: `url(${picture})`,
    backgroundSize: `50%`,
    backgroundColor: `hsl(0, 0%, 11%)`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    width: `100%`,
    height: `75%`,
    borderRadius: `10px`,
  };
  
  const pokemonPicker = (pokemon) => {
    setSelectedPokemon(pokemon);
  };


  return (
    <div className="card" onClick={() => {
      pokemonPicker(pokemon)
      setIsMoreInfo(false);
      }}>
      <div className="card-header">
        <div className="name">
          <h3>{makeUpperCase(name)}</h3>
        </div>
      </div>
      <div style={cardImage}></div>

      <div className="type-id">
        {!isPokeList ? (
          <button
            onClick={() => {
              addToPokeList(pokemon);
              subtractPokeDollars(pokemon);
            }}
          >
            Buy
          </button>
        ) : null}
        {!isPokeList && pokemon.quantity > 0 ? (
          <button
            value={pokemon.id}
            onClick={(e) => {
              addPokeDollars(pokemon);
              removeFromPokeList(pokemon, e);
            }}
          >
            Sell
          </button>
        ) : null}
        <div>
          <ToolTip content={types[0].type.name}>
            <img
              src={typeIconMaker(types[0].type.name)}
              className="pokemon-type"
            />
          </ToolTip>

          {types.length > 1 ? (
            <ToolTip content={types[1].type.name}>
              <img
                src={typeIconMaker(types[1].type.name)}
                className="pokemon-type"
              />
            </ToolTip>
          ) : null}
        </div>
        <h3>#{id}</h3>
        {pokemon.quantity > 0 ? <p>{pokemon.quantity}</p> : ""}
      </div>
    </div>
  );
};

export default PokemonCard;
