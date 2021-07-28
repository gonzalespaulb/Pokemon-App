import { typeIconMaker } from "../utilities/pokemonIcon";
import ToolTip from "./ToolTip";
import { useSelector, useDispatch } from "react-redux";
import { buyPokemon, sellPokemon } from "../redux/pokemonSlice";

const PokemonCard = ({
  id,
  setSelectedPokemon,
  isPokeList,
  makeUpperCase,
  setIsMoreInfo,
}) => {
  const pokemon = useSelector((state) =>
    state.pokemon.allPokemon.find((pokemon) => pokemon.id === id)
  );
  const dispatch = useDispatch();

  const cardImage = {
    backgroundImage: `url(${pokemon?.picture})`,
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
    <div
      className="card"
      onClick={() => {
        pokemonPicker(pokemon);
        setIsMoreInfo(false);
      }}
    >
      <div className="card-header">
        <div className="name">
          <h3>{makeUpperCase(pokemon.name)}</h3>
        </div>
      </div>
      <div style={cardImage}></div>

      <div className="type-id">
        <button
          onClick={() => {
            dispatch(buyPokemon(pokemon));
          }}
        >
          Buy
        </button>

        {pokemon.quantity > 0 ? (
          <button
            onClick={() => {
              dispatch(sellPokemon(pokemon));
            }}
          >
            Sell
          </button>
        ) : null}
        <div>
          <ToolTip content={pokemon.types[0].type.name}>
            <img
              src={typeIconMaker(pokemon.types[0].type.name)}
              className="pokemon-type"
            />
          </ToolTip>

          {pokemon.types.length > 1 ? (
            <ToolTip content={pokemon.types[1].type.name}>
              <img
                src={typeIconMaker(pokemon.types[1].type.name)}
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
