const FilterBar = ({ allPokemon, setAllPokemon }) => {

  const sortAtoZ = () => {
    setAllPokemon(
      allPokemon.sort((pokemon1, pokemon2) => {
        if (pokemon1.name < pokemon2.name) return -1;
        if (pokemon1.name > pokemon2.name) return 1;
        return 0;
      })
    );
  };
  const sortZtoA = () => {
    setAllPokemon(
      allPokemon.sort((pokemon1, pokemon2) => {
        if (pokemon1.name < pokemon2.name) return 1;
        if (pokemon1.name > pokemon2.name) return -1;
        return 0;
      })
    );
  };

  return (
    <div>
      <div>
        <label>A-Z</label>
        <input type="radio" onClick={sortAtoZ} name="sortAlphabetically" />
        <label>Z-A</label>
        <input type="radio" onClick={sortZtoA} name="sortAlphabetically" />
      </div>
    </div>
  );
};

export default FilterBar;
