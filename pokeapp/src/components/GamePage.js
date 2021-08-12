import React, { useState } from "react";
import Navigation from "./Navigation";
import PokemonCard from "./PokemonCard";
import { useSelector, useDispatch } from "react-redux";
import { slotMachinePokemon } from "../assets/pokemons/index";
import pikachu from "../assets/rollers/pikachu-roller.png";
import pokeball from "../assets/rollers/pokeball-roller.png";
import { randomPoke } from "../utilities/randomizer";
import { winPokemon } from "../redux/pokemonSlice";

const NUMBER_OF_REEL_FACES = 20;

const GamePage = ({
  makeUpperCase,
  setIsMyPoke,
  setIsPokeDex,
  setBadgeBtnActive1,
  setBadgeBtnActive2,
  setIsBadgeSideBar,
  setSelectedPokemon,
  setIsMoreInfo,
}) => {
  // ------------------------------------------------------------------------------------------------RANDOMIZER LOGIC START

  const [wonPokemon, setWonPokemon] = useState([]);

  const dispatch = useDispatch();

  const pokedex = useSelector((state) => state.pokemon.allPokemon);
  const pokeDollars = useSelector((state) => state.pokemon.pokeDollars);

  const gamePageOnClick = (pokemon) => {
    setBadgeBtnActive1(false);
    setBadgeBtnActive2(true);
    setSelectedPokemon(pokemon);
    setIsBadgeSideBar(false);
    setIsPokeDex(false);
    setIsMyPoke(true);
    setIsMoreInfo(false);
  };

  const renderWonPokemons = (wonPokemons) => {
    return wonPokemons?.map((pokemon) => {
      return (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          makeUpperCase={makeUpperCase}
          clickHandler={gamePageOnClick}
        />
      );
    });
  };

  const winAPokemon = (pokeList) => {
    if (!reel1) {
      let randomPokemon = randomPoke(pokeList);
      setWonPokemon([...wonPokemon, randomPokemon]);
      dispatch(winPokemon(randomPokemon));
    } else {
      return;
    }
  };

  // ------------------------------------------------------------------------------------------------RANDOMIZER LOGIC END

  // ------------------------------------------------------------------------------------------------SLOT MACHINE LOGIC START

  const [reel1, setActive] = useState(false);
  const [reel2, setReel2] = useState(false);
  const [reel3, setReel3] = useState(false);

  const rollerStyle = {
    backgroundImage: `url(${pikachu})`,
  };

  const rollerStyle2 = {
    backgroundImage: `url(${pokeball})`,
  };

  const roller1 = () => {
    let reelStrip = [];
    if (reel1) {
      for (let current = 1; current <= NUMBER_OF_REEL_FACES; current++) {
        reelStrip.push(
          <React.Fragment key={current}>
            <div style={rollerStyle} className="roller-img roller-ani" />
            <div style={rollerStyle2} className="roller-img roller-ani" />
          </React.Fragment>
        );
      }
    } else {
      return (
        <div className="reel-default">
          <h1>Spin</h1>
        </div>
      );
    }
    return reelStrip;
  };

  const roller2 = () => {
    let reelStrip = [];
    if (reel2) {
      for (let current = 1; current <= NUMBER_OF_REEL_FACES; current++) {
        reelStrip.push(
          <React.Fragment key={current}>
            <div style={rollerStyle} className="roller-img roller-ani" />
            <div style={rollerStyle2} className="roller-img roller-ani" />
          </React.Fragment>
        );
      }
    } else {
      return (
        <div className="reel-default">
          <h1>To</h1>
        </div>
      );
    }
    return reelStrip;
  };

  const roller3 = () => {
    let reelStrip = [];
    if (reel3) {
      for (let current = 1; current <= NUMBER_OF_REEL_FACES; current++) {
        reelStrip.push(
          <React.Fragment key={current}>
            <div style={rollerStyle} className="roller-img roller-ani" />
            <div style={rollerStyle2} className="roller-img roller-ani" />
          </React.Fragment>
        );
      }
    } else {
      return (
        <div className="reel-default">
          <h1>Win!</h1>
        </div>
      );
    }
    return reelStrip;
  };

  const pullLever = (leverPart) => {
    let currStyle = `lever-${leverPart}`;
    if (reel1) {
      currStyle = currStyle + ` lever-${leverPart}-active`;
    }
    return currStyle;
  };

  const playGame = () => {
    if(pokeDollars - 1000 > 0){
      setActive(!reel1);
      setTimeout(() => setReel2(!reel2), 200);
      setTimeout(() => setReel3(!reel3), 400);
      setTimeout(() => winAPokemon(pokedex), 3400);
    } else {
      //going to add logic here on a seperate issue
    }

  };

  // ------------------------------------------------------------------------------------------------SLOT MACHINE LOGIC END

  return (
    <div className="gamepage-container">
      <Navigation setIsMyPoke={setIsMyPoke} setIsPokeDex={setIsPokeDex} />
      <div className="game">
        <div className="slot-machine">
          <div className="blinker">
            <div className="blinker-1 blinker-ani"></div>
            <div className="blinker-2 blinker-ani"></div>
            <div className="blinker-3 blinker-ani"></div>
          </div>

          <div className="slot-machine-left">
            <img
              className="translate-weezing left-1"
              src={slotMachinePokemon(`weezinggmax`)}
              alt="pokemon"
            />
            <img
              className="left-1"
              src={slotMachinePokemon(`vaporeon`)}
              alt="pokemon"
            />
            <img
              className="left-2"
              src={slotMachinePokemon(`voltorb`)}
              alt="pokemon"
            />
            <img
              className="left-2"
              src={slotMachinePokemon(`weezing`)}
              alt="pokemon"
            />
            <img
              className="left-1"
              src={slotMachinePokemon(`wobbuffet`)}
              alt="pokemon"
            />
            <img
              className="left-1"
              src={slotMachinePokemon(`zangoose`)}
              alt="pokemon"
            />
            <img
              className="translate-up left-2"
              src={slotMachinePokemon(`zapdos`)}
              alt="pokemon"
            />
          </div>

          <div className="slot-machine-top">
            <img
              className="top-1"
              src={slotMachinePokemon(`aerodactyl`)}
              alt="pokemon"
            />
            <img
              className="top-1"
              src={slotMachinePokemon(`articuno`)}
              alt="pokemon"
            />
            <img
              className="translate-down top-2"
              src={slotMachinePokemon(`bellsprout`)}
              alt="pokemon"
            />
            <img
              className="top-2"
              src={slotMachinePokemon(`bidoof`)}
              alt="pokemon"
            />
            <img
              className="translate-down top-1"
              src={slotMachinePokemon(`bulbasaur`)}
              alt="pokemon"
            />
            <img
              className="top-1"
              src={slotMachinePokemon(`charizard`)}
              alt="pokemon"
            />
            <img
              className="translate-down top-2"
              src={slotMachinePokemon(`charmander`)}
              alt="pokemon"
            />
            <img
              className="top-2"
              src={slotMachinePokemon(`claydol`)}
              alt="pokemon"
            />
            <img
              className="translate-down top-1"
              src={slotMachinePokemon(`diglett`)}
              alt="pokemon"
            />
            <img
              className="translate-down top-1"
              src={slotMachinePokemon(`ditto`)}
              alt="pokemon"
            />
            <img
              className="top-2"
              src={slotMachinePokemon(`dragonite`)}
              alt="pokemon"
            />
            <img
              className="translate-down top-2"
              src={slotMachinePokemon(`dratini`)}
              alt="pokemon"
            />
            <img
              className="translate-down top-1"
              src={slotMachinePokemon(`eevee`)}
              alt="pokemon"
            />
            <img
              className="translate-down top-1"
              src={slotMachinePokemon(`ekans`)}
              alt="pokemon"
            />
            <img
              className="translate-down top-2"
              src={slotMachinePokemon(`flareon`)}
              alt="pokemon"
            />
            <img
              className="top-2"
              src={slotMachinePokemon(`girafarig`)}
              alt="pokemon"
            />
            <img
              className="translate-down top-1"
              src={slotMachinePokemon(`hoothoot`)}
              alt="pokemon"
            />
            <img
              className="translate-down top-1"
              src={slotMachinePokemon(`jolteon`)}
              alt="pokemon"
            />
            <img
              className="translate-down top-2"
              src={slotMachinePokemon(`kabuto`)}
              alt="pokemon"
            />
            <img
              className="translate-down top-2"
              src={slotMachinePokemon(`kabutops`)}
              alt="pokemon"
            />
            <img
              className="translate-down top-1"
              src={slotMachinePokemon(`lapras`)}
              alt="pokemon"
            />
          </div>

          <div className="slot-machine-bottom">
            <img
              className="bottom-1"
              src={slotMachinePokemon(`ledyba`)}
              alt="pokemon"
            />
            <img
              className="bottom-1"
              src={slotMachinePokemon(`lickitung`)}
              alt="pokemon"
            />
            <img
              className="bottom-2"
              src={slotMachinePokemon(`meowth`)}
              alt="pokemon"
            />
            <img
              className="bottom-2"
              src={slotMachinePokemon(`mew`)}
              alt="pokemon"
            />
            <img
              className="bottom-1"
              src={slotMachinePokemon(`mewtwo`)}
              alt="pokemon"
            />
            <img
              className="bottom-1"
              src={slotMachinePokemon(`misdreavus`)}
              alt="pokemon"
            />
            <img
              className="bottom-2"
              src={slotMachinePokemon(`moltres`)}
              alt="pokemon"
            />
            <img
              className="bottom-2"
              src={slotMachinePokemon(`mrmime`)}
              alt="pokemon"
            />
            <img
              className="bottom-1"
              src={slotMachinePokemon(`omanyte`)}
              alt="pokemon"
            />
            <img
              className="bottom-1"
              src={slotMachinePokemon(`onix`)}
              alt="pokemon"
            />
            <img
              className="bottom-2"
              src={slotMachinePokemon(`pancham`)}
              alt="pokemon"
            />
            <img
              className="bottom-2"
              src={slotMachinePokemon(`pikachu`)}
              alt="pokemon"
            />
            <img
              className="bottom-1"
              src={slotMachinePokemon(`piplup`)}
              alt="pokemon"
            />
            <img
              className="bottom-1"
              src={slotMachinePokemon(`porygon`)}
              alt="pokemon"
            />
            <img
              className="bottom-2"
              src={slotMachinePokemon(`psyduck`)}
              alt="pokemon"
            />
            <img
              className="bottom-2"
              src={slotMachinePokemon(`sentret`)}
              alt="pokemon"
            />
            <img
              className="bottom-1"
              src={slotMachinePokemon(`skitty`)}
              alt="pokemon"
            />
            <img
              className="bottom-1"
              src={slotMachinePokemon(`slowpoke`)}
              alt="pokemon"
            />
            <img
              className="bottom-2"
              src={slotMachinePokemon(`snorlax`)}
              alt="pokemon"
            />
            <img
              className="bottom-2"
              src={slotMachinePokemon(`squirtle`)}
              alt="pokemon"
            />
            <img
              className="bottom-1"
              src={slotMachinePokemon(`tangela`)}
              alt="pokemon"
            />
          </div>

          <div className="slot-machine-rollers">
            <div className="roller">{roller1()}</div>

            <div className="roller">{roller2()}</div>

            <div className="roller">{roller3()}</div>
          </div>

          <div className="slot-machine-arm">
            <div className="lever-sub-base"></div>
            <div className="lever-base">
              <div className={pullLever(`hole`)} />

              <div className={pullLever(`stick`)}>
                <div
                  className="lever-ball"
                  onClick={() => {playGame()}}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gamepage-card">
        {wonPokemon.length ? renderWonPokemons(wonPokemon) : null}
      </div>
    </div>
  );
};

export default GamePage;
