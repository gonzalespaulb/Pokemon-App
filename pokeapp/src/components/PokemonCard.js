import { useSelector, useDispatch } from "react-redux";
import { buyPokemon, sellPokemon } from "../redux/pokemonSlice";
import { typeIconMapper } from "../utilities/mappers";
import { useState } from "react";
import PokeDollarIcon from "../assets/uiIcons/pokeDollar.svg";
import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({
  blinker,
  clickHandler,
  id,
  makeUpperCase,
  wonPokemon,
  triggerOn,
}) => {
  const pokemon = useSelector((state) =>
    state.pokemon.allPokemon.find((pokemon) => pokemon.id === id)
  );

  const pokeDollars = useSelector((state) => state.pokemon.pokeDollars);
  const dispatch = useDispatch();

  const [isSelected, setIsSelected] = useState(false);

  // ------------------------------------------------------------Pop in animation logic
  const [active, setActive] = useState(false);
  const [firstHover, setFirstHover] = useState(false);

  const applyStyles = (type) => {
    let currStyle = `card-btn`;

    if (firstHover) {
      active
        ? (currStyle = currStyle + ` card-btn-active ${type}-btn`)
        : (currStyle = currStyle + ` card-btn-inactive ${type}-btn`);
    }
    return currStyle;
  };

  const hoverMe = () => {
    setActive(!active);
    setFirstHover(true);
  };

  // ------------------------------------------------------------Pop in animation logic

  const applyTypeColor = (type) => {
    return `card-${type}`;
  };

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

  return (
    // Card container starts here
    <Link
      to="/"
      style={{ textDecoration: "none" }}
      className={
        !isSelected ? "card" : applyTypeColor(pokemon.types[0].type.name)
      }
      onClick={() => {
        clickHandler(pokemon);
        triggerOn();
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
          <h3 className="card-name-font">{makeUpperCase(pokemon.name)}</h3>
        </div>
      </div>

      {/* Card image starts */}
      <div style={cardImage}>
        {/* put buttons in here */}
        <div className="card-btns-container">
          <div className={applyStyles(`poke-value`)}>
            <img src={PokeDollarIcon} alt="poke dollar image" />
            <h4 className="card-btn-font">{pokemon.value}</h4>
          </div>
          <div
            className={applyStyles(`poke-buy`)}
            onClick={(e) => {
              if (
                pokeDollars - pokemon.value < 0 ||
                pokeDollars - wonPokemon?.value < 0
              ) {
                blinker();
              }
              e.preventDefault();
              e.stopPropagation();
              dispatch(buyPokemon(pokemon));
            }}
          >
            <h4 className="card-btn-font">Buy</h4>
          </div>
          {pokemon.quantity > 0 && active ? (
            <div
              className={applyStyles(`poke-sell`)}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch(sellPokemon(pokemon));
              }}
            >
              <h4 className="card-btn-font">Sell</h4>
            </div>
          ) : null}
        </div>
      </div>

      <div className="type-id-container">
        <div className={pokemon.quantity > 0 ? "pokeball" : "pokeball-hidden"}>
          <div className="pokeball-top"></div>
          <div className="pokeball-bottom"></div>
          <h4
            className={
              pokemon.quantity >= 100
                ? "pokeball-font-hundreds"
                : "pokeball-font"
            }
          >
            {pokemon.quantity > 0 ? `x${pokemon.quantity}` : ""}
          </h4>
        </div>
        <div className="type-id">
          <div>{typeIconMapper(pokemon.types)}</div>
          <h3 className="card-id-font">#{id}</h3>
        </div>
      </div>
    </Link>
    // Card container end
  );
};

export default PokemonCard;
