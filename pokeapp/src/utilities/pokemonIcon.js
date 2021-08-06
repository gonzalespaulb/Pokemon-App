import FireIcon from "../assets/types/fire.svg";
import WaterIcon from "../assets/types/water.svg";
import IceIcon from "../assets/types/ice.svg";
import BugIcon from "../assets/types/bug.svg";
import DarkIcon from "../assets/types/dark.svg";
import FairyIcon from "../assets/types/fairy.svg";
import GhostIcon from "../assets/types/ghost.svg";
import SteelIcon from "../assets/types/steel.svg";
import GroundIcon from "../assets/types/ground.svg";
import PsychicIcon from "../assets/types/psychic.svg";
import ElectricIcon from "../assets/types/electric.svg";
import FlyingIcon from "../assets/types/flying.svg";
import NormalIcon from "../assets/types/normal.svg";
import RockIcon from "../assets/types/rock.svg";
import DragonIcon from "../assets/types/dragon.svg";
import FightingIcon from "../assets/types/fighting.svg";
import GrassIcon from "../assets/types/grass.svg";
import PoisonIcon from "../assets/types/poison.svg";

export const typeIconMaker = (type) => {
  switch (type) {
    case "fire":
      return FireIcon;
    case "water":
      return WaterIcon;
    case "bug":
      return BugIcon;
    case "dark":
      return DarkIcon;
    case "dragon":
      return DragonIcon;
    case "electric":
      return ElectricIcon;
    case "fairy":
      return FairyIcon;
    case "fighting":
      return FightingIcon;
    case "flying":
      return FlyingIcon;
    case "ghost":
      return GhostIcon;
    case "grass":
      return GrassIcon;
    case "ground":
      return GroundIcon;
    case "ice":
      return IceIcon;
    case "normal":
      return NormalIcon;
    case "poison":
      return PoisonIcon;
    case "psychic":
      return PsychicIcon;
    case "rock":
      return RockIcon;
    case "steel":
      return SteelIcon;
    default:
      break;
  }
};
