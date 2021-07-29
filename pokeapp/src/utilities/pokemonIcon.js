import FireIcon from "../assets/fire.svg";
import WaterIcon from "../assets/water.svg";
import IceIcon from "../assets/ice.svg";
import BugIcon from "../assets/bug.svg";
import DarkIcon from "../assets/dark.svg";
import FairyIcon from "../assets/fairy.svg";
import GhostIcon from "../assets/ghost.svg";
import SteelIcon from "../assets/steel.svg";
import GroundIcon from "../assets/ground.svg";
import PsychicIcon from "../assets/psychic.svg";
import ElectricIcon from "../assets/electric.svg";
import FlyingIcon from "../assets/flying.svg";
import NormalIcon from "../assets/normal.svg";
import RockIcon from "../assets/rock.svg";
import DragonIcon from "../assets/dragon.svg";
import FightingIcon from "../assets/fighting.svg";
import GrassIcon from "../assets/grass.svg";
import PoisonIcon from "../assets/poison.svg";


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
    }
  };

