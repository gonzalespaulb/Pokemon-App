import {typeIconMaker} from "../utilities/pokemonIcon"

const PokemonCard = ({ name, id, types, picture }) => {
  
  const makeUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div key={id} className="card">
      <div className="card-header">
        <div className="card-header-left">
          <p> {makeUpperCase(name)} </p>
        </div>
        <div className="card-header-right">
          <img
            src={typeIconMaker(types[0].type.name)}
            className="card-type-image"
          />
          {types.length > 1 ? (
            <img
              src={typeIconMaker(types[1].type.name)}
              className="card-type-image"
            />
          ) : null}
          <p>#{id}</p>
        </div>
      </div>

      <div className="img-container">
        <img src={picture} className="img" />
      </div>
    </div>
  );
};

export default PokemonCard;
