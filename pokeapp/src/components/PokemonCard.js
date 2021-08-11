import { useSelector, useDispatch } from "react-redux";
import { buyPokemon, sellPokemon } from "../redux/pokemonSlice";
import { typeIconMapper } from "../utilities/mappers";
import { useState } from "react";
import PokeDollarIcon from "../assets/uiIcons/pokeDollar.svg";

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


  // ------------------------------------------------------------Pop in animation logic 
  const [active, setActive] = useState(false);
  const [firstHover, setFirstHover] = useState(false);

  const applyStyles = (type) => {
    let currStyle = `card-btn`;

    if(firstHover) {
        active ? currStyle = currStyle + ` card-btn-active ${type}-btn` : currStyle = currStyle + ` card-btn-inactive ${type}-btn`;
    }
    return currStyle;
  }

  const hoverMe = () => {
    setActive(!active);
    setFirstHover(true);
  }

  // ------------------------------------------------------------Pop in animation logic 


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
    // Card container starts here
    <div
      className={!isSelected ? "card" : applyTypeColor(pokemon.types[0].type.name)}
      onClick={() => {
        pokemonPicker(pokemon);
        setIsMoreInfo(false);
      }}
      onMouseEnter={() => {
        setIsSelected(true);
        hoverMe();
      }}
      onMouseLeave={() => {
        setIsSelected(false);
        hoverMe();
      }}
    >

      <div className="card-header">
        <div className="name">
          <h3>{makeUpperCase(pokemon.name)}</h3>
        </div>
      </div>

      {/* Card image starts */}
      <div style={cardImage}>
      {/* put buttons in here */}
        <div className="card-btns-container">
          <div className={applyStyles(`poke-value`)}><img src={PokeDollarIcon} alt="poke dollar image" />{pokemon.value}</div>
          <div className={applyStyles(`poke-buy`)}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(buyPokemon(pokemon));
              }}
          >Buy</div>
           {pokemon.quantity > 0 ? (
            <div className={applyStyles(`poke-sell`)}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(sellPokemon(pokemon));
              }}
          >Sell</div>) : null}
        </div>

      </div>

      <div className="type-id-container">
        <div className="pokemon-quantity">
          {pokemon.quantity > 0 ? <p>x{pokemon.quantity}</p> : ""}
        </div>
      <div className="type-id">
        <div>{typeIconMapper(pokemon.types)}</div>
        <h3>#{id}</h3>
      </div>
      </div>

    </div>
    // Card container end
  );
};

export default PokemonCard;