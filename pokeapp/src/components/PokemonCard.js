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
}) => {
  const makeUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

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

  const myPokePicker = (pokemon) => {
    const pokeIndex = myPokeList.findIndex(
      (element) => element.id === pokemon.id
    );
    if (pokeIndex !== -1) {
      let tempPokeList = [...myPokeList];
      tempPokeList[pokeIndex].quantity++;
      setMyPokeList(tempPokeList);
    } else {
      let tempPokemon = pokemon;
      tempPokemon.quantity++;
      setMyPokeList([...myPokeList, tempPokemon]);
    }
  };

  return (
    <div className="card" onClick={() => pokemonPicker(pokemon)}>
      <div className="card-header">
        <div className="name">
          <h3>{makeUpperCase(name)}</h3>
        </div>
      </div>
      <div style={cardImage}></div>
      <div className="type-id">
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
        {!isPokeList ? (
          <button
            onClick={() => {
              myPokePicker(pokemon);
            }}
          >
            Buy
          </button>
        ) : null}
        <h3>#{id}</h3>
        {pokemon.quantity > 0 ? <p>{pokemon.quantity}</p> : ""}
      </div>
    </div>
  );
};

export default PokemonCard;
