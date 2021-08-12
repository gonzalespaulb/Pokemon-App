import ToolTip from "../components/ToolTip";
import { typeIconMaker } from "./pokemonIcon";
import { gameIndices } from "./pokemonGames";

export const typeIconMapper = (types) => {
  return types?.map((typeObject, index) => {
    return (
      <ToolTip key={index} content={typeObject.type.name}>
        <img
          alt={`${typeObject.type.name} tool tip`}
          className="type-icons"
          src={typeIconMaker(typeObject.type.name)}
        />
      </ToolTip>
    );
  });
};

export const abilityMapper = (abilities) => {
  return abilities?.map((abilityObject, index) => {
    return <h5 key={index}>{abilityObject.ability.name}</h5>;
  });
};

export const gameMapper = (games, setVideoGame) => {
  return games?.map((gameObject, index) => {

    const { title, url } = gameIndices(gameObject.version.name);
    const indicesURL = {backgroundImage: `url(${url})`}
    return (
      <div value={title} 
            key={index} 
            style={indicesURL} 
            className="indices"
            onMouseEnter={() => setVideoGame(title)}
            onMouseLeave={() => setVideoGame(`No Game Selected`)}
      >
            
      </div>
    )
  });
};

export const weaknessIconMapper = (weaknesses) => {
  return weaknesses?.map((weakness, index) => {
    return (
      <ToolTip content={weakness.name} key={index}>
        <img alt={`${weakness.name} icon`} className="type-icons" src={typeIconMaker(weakness.name)} />
      </ToolTip>
    );
  });
};
