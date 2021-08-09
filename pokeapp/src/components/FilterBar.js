import React, { useState } from "react";
import FilterDropDown from "./FilterDropDown";

const FilterBar = ({ allPokemon, setAllPokemonFiltered }) => {
  // dropdown states
  const [active, setActive] = useState(false);
  const [firstClick, setFirstClick] = useState(false);

  // functions for dropdown switch
  const toggle = () => {
    setActive(!active);
    setFirstClick(true);
  };

  return (
    <div className="filter-bar">
      <h4 className="filter-bar-text">Filter Pokemon</h4>
      <div className="filter-bar-icon" onClick={toggle}>
        Icon
      </div>
      <FilterDropDown
        allPokemon={allPokemon}
        setAllPokemonFiltered={setAllPokemonFiltered}
        active={active}
        firstClick={firstClick}
      />
    </div>
  );
};

export default FilterBar;
