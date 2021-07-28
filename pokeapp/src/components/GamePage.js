import React from 'react';
import Navigation from './Navigation';
import SlotIcon from '../assets/slots.svg';
import PokemonCard from './PokemonCard';
import { useSelector } from 'react-redux';


const GamePage = ({makeUpperCase}) => {
    
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

    return (
        <div gamepage-container>
            <Navigation />
            <div className="slot-image">
                 <img src= {SlotIcon} alt="slot machine" />
            </div>
            <div className="gamecard-container">
                <div className='gamepage-card '>{gamePagePokemons()}</div>
            </div>
        </div>
    )
}

export default GamePage;
