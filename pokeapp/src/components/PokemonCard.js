import {typeIconMaker} from "../utilities/pokemonIcon";
import ToolTip from "./ToolTip";

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
          <ToolTip content={types[0].type.name}>
          <img
            src={typeIconMaker(types[0].type.name)}
            className="card-type-image"
          />
          </ToolTip>
         
          {types.length > 1 ? (
             <ToolTip content={types[1].type.name}>
            <img
              src={typeIconMaker(types[1].type.name)}
              className="card-type-image"
        
            />
            </ToolTip>
          ) : null}
          <p>#{id}</p>
        </div>
      </div>

      <div className="img-container">
        <img src={picture} className="img" />
      </div>
      <button>ADD</button>
    </div>

  );
};

export default PokemonCard;
