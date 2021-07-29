import React, { useState } from "react";
import FilterDropDown from "./FilterDropDown";

const FilterBar = ({ allPokemon, setAllPokemonFiltered }) => {

  return (
    <div className="filter-bar">
      <h4 className="filter-bar-text" >Filter Pokemon</h4>
      <div className="filter-bar-icon" >Icon</div>
      <FilterDropDown
        allPokemon={allPokemon}
        setAllPokemonFiltered={setAllPokemonFiltered}
      />
    </div>
  );
};

export default FilterBar;
