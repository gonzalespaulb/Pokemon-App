import React, { useState, useEffect, useRef } from "react";
import FilterDropDown from "./FilterDropDown";
import FilterIcon from "../assets/uiIcons/filter.svg";

const FilterBar = ({ allPokemon, setAllPokemonFiltered }) => {
  // dropdown states
  const [active, setActive] = useState(false);
  const [firstClick, setFirstClick] = useState(false);

  // functions for dropdown switch
  const toggle = (e) => {
    setActive(!active);
    setFirstClick(true);
  };

  let useClickOutside = (handler) => {
    let menuRef = useRef();

    useEffect(() => {
      let firstHandler = (event) => {
        if (!menuRef.current.contains(event.target)) {
          handler();
        }
      };
      document.addEventListener("mousedown", firstHandler);

      return () => {
        document.removeEventListener("mousedown", firstHandler);
      };
    });

    return menuRef;
  };

  let menuRef = useClickOutside(() => {
    setActive(false);
  });

  return (
    <div ref={menuRef} className="filter-bar" onClick={toggle}>
      <h4 className="filter-bar-text">Filter</h4>
      <div className="filter-bar-icon">
        <img src={FilterIcon} alt="filter icon" />
      </div>
      <FilterDropDown
        setActive={setActive}
        allPokemon={allPokemon}
        setAllPokemonFiltered={setAllPokemonFiltered}
        active={active}
        firstClick={firstClick}
        menuRef={menuRef}
      />
    </div>
  );
};

export default FilterBar;
