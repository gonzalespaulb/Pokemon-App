import React from 'react';
import Navigation from './Navigation';
import SlotIcon from '../assets/slots.svg';
import PokemonCard from './PokemonCard';

const GamePage = ({allPokemon}) => {


    const gamePagePokemons = () => {
        return allPokemon.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              name={pokemon.name}
              id={pokemon.id}
              picture={pokemon.picture}
              types={pokemon.types}
            />
          );
        });
      };

    return (
        <div>
            <Navigation />
            <div>
                 <img src= {SlotIcon} alt="slot machine" />
            </div>
            <div className="gamecard-container">
                <div className='gamepage-card '>{gamePagePokemons()}</div>
            </div>
        </div>
    )
}

export default GamePage;
