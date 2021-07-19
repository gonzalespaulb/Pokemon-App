import React, {useState, useEffect} from "react";

//Enumerator Object
const SortTypes = {
A_TO_Z: 1,
Z_TO_A: 2,
ID_HIGH_TO_LOW: 3, 
ID_LOW_TO_HIGH: 4,
VALUE_HIGH_TO_LOW: 5,
VALUE_LOW_TO_HIGH: 6, 
}

const FilterBar = ({ allPokemon, setAllPokemonFiltered }) => {

const [sortType, setSortType] = useState(SortTypes.ID_LOW_TO_HIGH);
const [type, setType] = useState(false);


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



  const filterPokemon = () => {
    let filteredPokemon = [...allPokemon];

    // if(type){
    //   filteredPokemon = filterByType(filteredPokemon);
    // }

    switch(sortType){
      case SortTypes.A_TO_Z: filteredPokemon = sortAtoZ(filteredPokemon);
      break;
      case SortTypes.Z_TO_A: filteredPokemon = sortZtoA(filteredPokemon);
      break;
      case SortTypes.ID_HIGH_TO_LOW: filteredPokemon = sortIdHigh(filteredPokemon);
      break;
      case SortTypes.ID_LOW_TO_HIGH: filteredPokemon = sortIdLow(filteredPokemon);
      break;
      case SortTypes.VALUE_HIGH_TO_LOW: filteredPokemon = sortValueHigh(filteredPokemon);
      break;
      case SortTypes.VALUE_LOW_TO_HIGH: filteredPokemon = sortValueLow(filteredPokemon);
      break;
      default: console.error(`sort type ${sortType} is not a valid sort type`);
    }
    setAllPokemonFiltered(filteredPokemon);
  };

  useEffect(()=>{
    filterPokemon();
  },[sortType, type])

  

  return (
    <div>
      <div>
        <label>Low to High</label>
        <input type="radio" onClick={()=>setSortType(SortTypes.ID_LOW_TO_HIGH)} name="sortById" />
        <label>High to Low</label>
        <input type="radio" onClick={()=>setSortType(SortTypes.ID_HIGH_TO_LOW)} name="sortById" />
        <label>A-Z</label>
        <input type="radio" onClick={()=>setSortType(SortTypes.A_TO_Z)} name="sortAlphabetically" />
        <label>Z-A</label>
        <input type="radio" onClick={()=>setSortType(SortTypes.Z_TO_A)} name="sortAlphabetically" />
        <label>Value High</label>
        <input type="radio" onClick={()=>setSortType(SortTypes.VALUE_HIGH_TO_LOW)} name="sortByValue" />
        <label>Value Low</label>
        <input type="radio" onClick={()=>setSortType(SortTypes.VALUE_LOW_TO_HIGH)} name="sortByValue" />
      </div>
    </div>
  );
};

export default FilterBar;
