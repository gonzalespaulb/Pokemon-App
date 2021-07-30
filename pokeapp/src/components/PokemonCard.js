import { useSelector, useDispatch } from "react-redux";
import { buyPokemon, sellPokemon } from "../redux/pokemonSlice";
import { typeIconMapper } from "../utilities/mappers";
import { useState } from "react";

const PokemonCard = ({
  id,
  setSelectedPokemon,
  makeUpperCase,
  setIsMoreInfo,
}) => {
  const pokemon = useSelector((state) =>
    state.pokemon.allPokemon.find((pokemon) => pokemon.id === id)
  );
  const dispatch = useDispatch();

  const [isSelected, setIsSelected] = useState(false);

  const applyTypeColor = (type) => {
    return `card-${type}`;
  }

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
      className={!isSelected ? "card" : applyTypeColor(pokemon.types[0].type.name)}
      onClick={() => {
        pokemonPicker(pokemon);
        setIsMoreInfo(false);
      }}
      onMouseEnter={() => setIsSelected(true)}
      onMouseLeave={() => setIsSelected(false)}
    >
      <div className="card-header">
        <div className="name">
          <h3>{makeUpperCase(pokemon.name)}</h3>
        </div>
      </div>
      <div style={cardImage}></div>

      <div className="type-id">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(buyPokemon(pokemon));
          }}
        >
          Buy
        </button>

        {pokemon.quantity > 0 ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(sellPokemon(pokemon));
            }}
          >
            Sell
          </button>
        ) : null}
        <div>{typeIconMapper(pokemon.types)}</div>
        <h3>#{id}</h3>
        {pokemon.quantity > 0 ? <p>{pokemon.quantity}</p> : ""}
      </div>
    </div>
  );
};

export default PokemonCard;
