import ToolTip from "../components/ToolTip";
import { typeIconMaker } from "./pokemonIcon";

export const typeIconMapper = (types) => {
  return types?.map((typeObject, index) => {
    return (
      <ToolTip key={index} content={typeObject.type.name}>
        <img
          className="pokemon-type"
          src={typeIconMaker(typeObject.type.name)}
        />
      </ToolTip>
    );
  });
};

export const abilityMapper = (abilities) => {
  return abilities?.map((abilityObject, index) => {
    return <p key={index}>{abilityObject.ability.name}</p>;
  });
};

export const gameMapper = (games) => {
  return games?.map((gameObject, index) => {
    return <p key={index}>{gameObject.version.name}</p>;
  });
};

export const weaknessIconMapper = (weaknesses) => {
  return weaknesses?.map((weakness, index) => {
    return (
      <ToolTip content={weakness.name} key={index}>
        <img className="type-icons" src={typeIconMaker(weakness.name)} />
      </ToolTip>
    );
  });
};
