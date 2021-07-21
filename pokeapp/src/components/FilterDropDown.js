const FilterDropDown = () => {
  return (
    <div>
      <div>
        <label>Low to High</label>
        {radioEl(SortTypes.ID_LOW_TO_HIGH)}

        <label>High to Low</label>
        {radioEl(SortTypes.ID_HIGH_TO_LOW)}

        <label>A-Z</label>
        {radioEl(SortTypes.A_TO_Z)}

        <label>Z-A</label>
        {radioEl(SortTypes.Z_TO_A)}

        <label>Value High</label>
        {radioEl(SortTypes.VALUE_HIGH_TO_LOW)}

        <label>Value Low</label>
        {radioEl(SortTypes.VALUE_LOW_TO_HIGH)}
      </div>

      <div className="checkbox-type">
        {checkboxEl(ElementTypes.FIRE, `Fire`)}
        {checkboxEl(ElementTypes.WATER, `Water`)}
        {checkboxEl(ElementTypes.ICE, `Ice`)}
        {checkboxEl(ElementTypes.GRASS, `Grass`)}
        {checkboxEl(ElementTypes.GHOST, `Ghost`)}
        {checkboxEl(ElementTypes.GROUND, `Ground`)}
        {checkboxEl(ElementTypes.FLYING, `Flying`)}
        {checkboxEl(ElementTypes.BUG, `Bug`)}
        {checkboxEl(ElementTypes.DARK, `Dark`)}
        {checkboxEl(ElementTypes.DRAGON, `Dragon`)}
        {checkboxEl(ElementTypes.ELECTRIC, `Electric`)}
        {checkboxEl(ElementTypes.FAIRY, `Fairy`)}
        {checkboxEl(ElementTypes.POISON, `Poison`)}
        {checkboxEl(ElementTypes.FIGHTING, `Fighting`)}
        {checkboxEl(ElementTypes.STEEL, `Steel`)}
        {checkboxEl(ElementTypes.PSYCHIC, `Psychic`)}
        {checkboxEl(ElementTypes.NORMAL, `Normal`)}
        {checkboxEl(ElementTypes.ROCK, `Rock`)}
      </div>
    </div>
  );
};
