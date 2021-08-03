import React, { useState } from 'react';
import Navigation from './Navigation';
import PokemonCard from './PokemonCard';
import { useSelector } from 'react-redux';
import {slotMachinePokemon} from '../assets/pokemons/index';
import pikachu from '../assets/rollers/pikachu-roller.png';
import pokeball from '../assets/rollers/pokeball-roller.png';

const NUMBER_OF_REEL_FACES = 20; 

const GamePage = ({makeUpperCase, setIsPokeList}) => {

  const [reel1, setActive] = useState(false);
  const [reel2, setReel2] =useState(false);
  const [reel3, setReel3] =useState(false);
    
    const gamepokemon = useSelector((state) =>
    state.pokemon.allPokemon.filter((pokemon) => pokemon.quantity > 0)
  );

    const gamePagePokemons = () => {
        return gamepokemon.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              name={pokemon.name}
              id={pokemon.id}
              picture={pokemon.picture}
              makeUpperCase={makeUpperCase}
              types={pokemon.types}
            />
          );
        });
      };

// ------------------------------------------------------------------------------------------------SLOT MACHINE LOGIC START

      const rollerStyle = {
        backgroundImage: `url(${pikachu})`,
      }

      const rollerStyle2 = {
        backgroundImage: `url(${pokeball})`,
      }

      const roller1 = () => {

        let reelStrip = [];
        if (reel1) {
          for (let current = 1; current <= NUMBER_OF_REEL_FACES; current++ ) {
            reelStrip.push(
              <>
              <div style={rollerStyle} className="roller-img roller-ani"/>
              <div style={rollerStyle2} className="roller-img roller-ani"/>
              </>
            )
          }  
        } else {
          return (
            <div className="reel-default">
              <h1>Spin</h1>
            </div>
          )
        }
        return reelStrip;
      }

      const roller2 = () => {

        let reelStrip = [];
        if (reel2) {
          for (let current = 1; current <= NUMBER_OF_REEL_FACES; current++ ) {
            reelStrip.push(
              <>
              <div style={rollerStyle} className="roller-img roller-ani"/>
              <div style={rollerStyle2} className="roller-img roller-ani"/>
              </>
            )
          }
        }else {
          return (
            <div className="reel-default">
              <h1>To</h1>
            </div>
          )
        }
        return reelStrip;
      }

      const roller3 = () => {

        let reelStrip = [];
        if (reel3) {
          for (let current = 1; current <= NUMBER_OF_REEL_FACES; current++ ) {
            reelStrip.push(
              <>
              <div style={rollerStyle} className="roller-img roller-ani"/>
              <div style={rollerStyle2} className="roller-img roller-ani"/>
              </>
            )
          }
        }else {
          return (
            <div className="reel-default">
              <h1>Win!</h1>
            </div>
          )
        }
        return reelStrip;
      }

      const pullLever = (leverPart) => {

        let currStyle = `lever-${leverPart}`
        if(reel1) {
          currStyle = currStyle + ` lever-${leverPart}-active`;
        }

        return currStyle;
      }

// ------------------------------------------------------------------------------------------------SLOT MACHINE LOGIC END

    return (
        <div className="gamepage-container">
            <Navigation setIsPokeList={setIsPokeList} />
            <div className="game">
              <div className="slot-machine">

                <div className="slot-machine-rollers">
                  <div className="roller">
                    {roller1()}
                  </div>

                  <div className="roller">
                    {roller2()}
                  </div>

                  <div className="roller">
                    {roller3()}
                  </div>
                </div>

                <div className="slot-machine-arm">
                  <div className="lever-sub-base"></div>
                  <div className="lever-base">
                    <div 
                      className={pullLever(`hole`)}
        
                    >
                    </div>
                    <div className={pullLever(`stick`)}>
                      <div 
                        className="lever-ball"
                        onClick={() => {
                          setActive(!reel1)
                          setTimeout(() => setReel2(!reel2), 200);
                          setTimeout(() => setReel3(!reel3), 400);
                        }}
                      ></div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            <div className="gamecard-container">
                <div className="gamepage-card">
                  {gamePagePokemons()}
                </div>
            </div>
        </div>
    )
}

export default GamePage;
