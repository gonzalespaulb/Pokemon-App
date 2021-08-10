import React, { useState, useEffect } from "react";
import { SortTypes, ElementTypes } from "../utilities/enums";

const FilterDropDown = ({
  allPokemon,
  setAllPokemonFiltered,
  active,
  firstClick,
}) => {
  const [sortType, setSortType] = useState(SortTypes.ID_LOW_TO_HIGH);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [type, setType] = useState(false);
  
  const [aToZ, setAToZ] = useState(false);
  const [pokeDollarValue, setPokeDollarValue] = useState(false);
  const [pokeID, setPokeID] = useState(false);

  const [isOption1, setIsOption1] = useState(false);
  const [isOption2, setIsOption2] = useState(false);

  // Sets a new classname
  const applyStyles = (className) => {
    let currStyle = `${className}`;

    if (firstClick) {
      if (active) return (currStyle = currStyle + ` ${className}-active`);
      if (!active) return (currStyle = currStyle + ` ${className}-inactive`);
    }
    return currStyle;
  };

  //Sorting Alphabetical
  const sortAtoZ = (list) => {
    const sortedAtoZ = list.sort((pokemon1, pokemon2) => {
      if (pokemon1.name < pokemon2.name) return -1;
      if (pokemon1.name > pokemon2.name) return 1;
      return 0;
    });
    return sortedAtoZ;
  };
  const sortZtoA = (list) => {
    const sortedZtoA = list.sort((pokemon1, pokemon2) => {
      if (pokemon1.name < pokemon2.name) return 1;
      if (pokemon1.name > pokemon2.name) return -1;
      return 0;
    });
    return sortedZtoA;
  };

  // Sorting by ID
  const sortIdHigh = (list) => {
    const sortedIdHigh = list.sort((pokemon1, pokemon2) => {
      if (pokemon1.id < pokemon2.id) return 1;
      if (pokemon1.id > pokemon2.id) return -1;
      return 0;
    });
    return sortedIdHigh;
  };
  const sortIdLow = (list) => {
    const sortedIdLow = list.sort((pokemon1, pokemon2) => {
      if (pokemon1.id < pokemon2.id) return -1;
      if (pokemon1.id > pokemon2.id) return 1;
      return 0;
    });
    return sortedIdLow;
  };

  // Sorting by Value
  const sortValueHigh = (list) => {
    const sortedValueHigh = list.sort((pokemon1, pokemon2) => {
      if (pokemon1.value < pokemon2.value) return 1;
      if (pokemon1.value > pokemon2.value) return -1;
      return 0;
    });
    return sortedValueHigh;
  };
  const sortValueLow = (pokeList) => {
    const sortedValueLow = pokeList.sort((pokemon1, pokemon2) => {
      if (pokemon1.value < pokemon2.value) return -1;
      if (pokemon1.value > pokemon2.value) return 1;
      return 0;
    });
    return sortedValueLow;
  };

  // If there are two types only the pokemons with both clicked types will be returned
  const filterByType = (pokemonList, type) => {
    const sortByType = pokemonList.filter((pokemons) => {
      for (const pokemon of pokemons.types) {
        if (pokemon.type.name === type) {
          return pokemon;
        }
      }
    });
    return sortByType;
  };

  // Applies all of the filters and sorts and adds it to a filtered state
  const filterPokemon = () => {
    let filteredPokemon = [...allPokemon];

    if (selectedTypes.length) {
      selectedTypes.map((type) => {
        filteredPokemon = filterByType(filteredPokemon, type);
      });
    }

    switch (sortType) {
      case SortTypes.A_TO_Z:
        filteredPokemon = sortAtoZ(filteredPokemon);
        break;
      case SortTypes.Z_TO_A:
        filteredPokemon = sortZtoA(filteredPokemon);
        break;
      case SortTypes.ID_HIGH_TO_LOW:
        filteredPokemon = sortIdHigh(filteredPokemon);
        break;
      case SortTypes.ID_LOW_TO_HIGH:
        filteredPokemon = sortIdLow(filteredPokemon);
        break;
      case SortTypes.VALUE_HIGH_TO_LOW:
        filteredPokemon = sortValueHigh(filteredPokemon);
        break;
      case SortTypes.VALUE_LOW_TO_HIGH:
        filteredPokemon = sortValueLow(filteredPokemon);
        break;
      default:
        console.error(`sort type ${sortType} is not a valid sort type`);
    }
    setAllPokemonFiltered(filteredPokemon);
  };

  useEffect(() => {
    filterPokemon();
  }, [sortType, type, selectedTypes]);

  // apply color to selected checkbox types
  const applyTypeColor = (type) => {
    return `${type}`;
  };

  const checkboxEl = (sortTypeEnum, type) => {
    return (
      <div
        name={sortTypeEnum}
        onClick={() => addRemoveTypeFilter(sortTypeEnum)}
        className={`filter-checkbox${
          selectedTypes.includes(sortTypeEnum)
            ? ` active-${applyTypeColor(type)}`
            : " inactive"
        } 
          `}
      >
        <h4>{type}</h4>
      </div>
    );
  };

  const addRemoveTypeFilter = (elementType) => {
    if (!selectedTypes.includes(elementType)) {
      // If its not in the array add it to the array
      setSelectedTypes((prevSelectedTypes) => [
        ...prevSelectedTypes,
        elementType,
      ]);
    } else {
      // If its already in the array filter it out
      setSelectedTypes((prevSelectedTypes) => {
        return prevSelectedTypes.filter((el) => el !== elementType);
      });
    }
  };

  const sortTypeOption = () => {
    return <div>{combo1()}</div>;
  };

  const combo1 = () => {
    if (aToZ) {
      return (
        <div className="sort-option-container">
          <div
            className={isOption1 ? "sort-option-btn option-clicked" : "sort-option-btn"}
            onClick={() => {
              setSortType(SortTypes.A_TO_Z)
              setIsOption1(true);
              setIsOption2(false);
            }}
          >
            <h4>A-Z</h4>
          </div>
          <div
            className={isOption2 ? "sort-option-btn option-clicked" : "sort-option-btn"}
            onClick={() => {
              setSortType(SortTypes.Z_TO_A)
              setIsOption1(false);
              setIsOption2(true);
            }}
          >
            <h4>Z-A</h4>
          </div>
        </div>
      );
    }

    if (pokeDollarValue) {
      return (
        <div className="sort-option-container">
          <div
            className={isOption1 ? "sort-option-btn option-clicked" : "sort-option-btn"}
            onClick={() => {
              setIsOption1(true);
              setIsOption2(false);
              setSortType(SortTypes.VALUE_LOW_TO_HIGH)
            }}
          >
            <h4>Low to high</h4>
          </div>
          <div
            className={isOption2 ? "sort-option-btn option-clicked" : "sort-option-btn"}
            onClick={() => {
              setIsOption1(false);
              setIsOption2(true);
              setSortType(SortTypes.VALUE_HIGH_TO_LOW)}}
          >
            <h4>High to low</h4>
          </div>
        </div>
      );
    }

    if (pokeID) {
      return (
        <div className="sort-option-container">
          <div
           className={isOption1 ? "sort-option-btn option-clicked" : "sort-option-btn"}
            onClick={() => {
              setSortType(SortTypes.ID_LOW_TO_HIGH)
              setIsOption1(true);
              setIsOption2(false);
            }}
          >
            <h4>Low to high</h4>
          </div>
          <div
         className={isOption2 ? "sort-option-btn option-clicked" : "sort-option-btn"}
            onClick={() => {
              setSortType(SortTypes.ID_HIGH_TO_LOW)
              setIsOption1(false);
              setIsOption2(true);
            }}
          >
            <h4>High to low</h4>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={applyStyles(`filter-bar-dropdown`)}>
      <div className="checkbox-type">
        {checkboxEl(ElementTypes.BUG, `Bug`)}
        {checkboxEl(ElementTypes.DARK, `Dark`)}
        {checkboxEl(ElementTypes.DRAGON, `Dragon`)}
        {checkboxEl(ElementTypes.ELECTRIC, `Electric`)}
        {checkboxEl(ElementTypes.FAIRY, `Fairy`)}
        {checkboxEl(ElementTypes.FLYING, `Flying`)}
        {checkboxEl(ElementTypes.FIGHTING, `Fighting`)}
        {checkboxEl(ElementTypes.FIRE, `Fire`)}
        {checkboxEl(ElementTypes.GHOST, `Ghost`)}
        {checkboxEl(ElementTypes.GRASS, `Grass`)}
        {checkboxEl(ElementTypes.GROUND, `Ground`)}
        {checkboxEl(ElementTypes.ICE, `Ice`)}
        {checkboxEl(ElementTypes.NORMAL, `Normal`)}
        {checkboxEl(ElementTypes.POISON, `Poison`)}
        {checkboxEl(ElementTypes.PSYCHIC, `Psychic`)}
        {checkboxEl(ElementTypes.ROCK, `Rock`)}
        {checkboxEl(ElementTypes.STEEL, `Steel`)}
        {checkboxEl(ElementTypes.WATER, `Water`)}
      </div>

      <div className="sort-container">
        <div className="sort-type-container">
          <div
            className={aToZ ? "sort-btn clicked" : "sort-btn"}
            onClick={() => {
              setPokeDollarValue(false);
              setAToZ(true);
              setPokeID(false);
              setIsOption1(false);
              setIsOption2(false);
            }}
          >
            <h4>Alphabetical</h4>
          </div>

          <div
            className={pokeDollarValue ? "sort-btn clicked" : "sort-btn"}
            onClick={() => {
              setPokeDollarValue(true);
              setAToZ(false);
              setPokeID(false);
              setIsOption1(false);
              setIsOption2(false);
            }}
          >
            <h4>Value</h4>
          </div>

          <div
            className={pokeID ? "sort-btn clicked" : "sort-btn"}
            onClick={() => {
              setPokeDollarValue(false);
              setAToZ(false);
              setPokeID(true);
              setIsOption1(false);
              setIsOption2(false);
            }}
          >
            <h4>ID</h4>
          </div>
        </div>

        {sortTypeOption()}
      </div>
    </div>
  );
};

export default FilterDropDown;
