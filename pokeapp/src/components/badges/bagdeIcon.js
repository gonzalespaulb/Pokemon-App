import BasicBadge from "../../assets/badges/Basicbadge.png";
import BoulderBadge from "../../assets/badges/Boulderbadge.png";
import CascadeBadge from "../../assets/badges/Cascadebadge.png";
import CliffBadge from "../../assets/badges/Cliffbadge.png";
import CoalBadge from "../../assets/badges/Coalbadge.png";
import CobbleBadge from "../../assets/badges/Cobblebadge.png";
import GlacierBadge from "../../assets/badges/Glacierbadge.png";
import HeatBadge from "../../assets/badges/Heatbadge.png";
import KnuckleBadge from "../../assets/badges/Knucklebadge.png";
import RainbowBadge from "../../assets/badges/Rainbow_Badge.png";

// Will use more of these imported images in future PR
// import BalanceBadge from "../../assets/badges/Balancebadge.png";
// import BeaconBadge from "../../assets/badges/Beaconbadge.png";
// import BoltBadge from "../../assets/badges/Boltbadge.png";
// import BugBadge from "../../assets/badges/Bug_Badge_Viola.png";
// import CoralEyeBadge from "../../assets/badges/Coral-Eye_Badge.png";
// import DarkBadge from "../../assets/badges/DarkBadge.png";
// import DragonBadge from "../../assets/badges/DragonBadge.png";
// import DynamoBadge from "../../assets/badges/Dynamobadge.png";
// import EarthBadge from "../../assets/badges/Earthbadge.png";
// import FairyBadge from "../../assets/badges/Fairy_Badge.png";
// import FeatherBadge from "../../assets/badges/Featherbadge.png";
// import FenBadge from "../../assets/badges/Fenbadge.png";
// import FightingBadge from "../../assets/badges/FightingBadge.png";
// import FireBadge from "../../assets/badges/FireBadge.png";
// import FogBadge from "../../assets/badges/Fogbadge.png";
// import ForestBadge from "../../assets/badges/Forestbadge.png";
// import FreedomBadge from "../../assets/badges/Freedom_Badge.png";
// import FreezeBadge from "../../assets/badges/Freezebadge.png";
// import GrassBadge from "../../assets/badges/GrassBadge.png";
// import HarmonyBadge from "../../assets/badges/Harmony_Badge.png";
// import HiveBadge from "../../assets/badges/Hivebadge.png";
// import IceBergBadge from "../../assets/badges/Iceberg_Badge.png";
// import IcicleBadge from "../../assets/badges/Iciclebadge.png";
// import InsectBadge from "../../assets/badges/Insectbadge.png";
// import JadeStarBadge from "../../assets/badges/JadeStar_Badge.png";
// import JetBadge from "../../assets/badges/Jetbadge.png";
// import LegendBadge from "../../assets/badges/Legendbadge.png";
// import MarshBadge from "../../assets/badges/Marshbadge.png";
// import MindBadge from "../../assets/badges/Mindbadge.png";
// import MineBadge from "../../assets/badges/Minebadge.png";
// import MineralBadge from "../../assets/badges/Mineralbadge.png";
// import PatienceBadge from "../../assets/badges/Patience_Badge.png";
// import PlainBadge from "../../assets/badges/Plainbadge.png";
// import PlantBadge from "../../assets/badges/Plant_Badge.png";
// import PrideBadge from "../../assets/badges/Pride_Badge.png";
// import PsychicBadge from "../../assets/badges/Psychic_Badge.png";
// import QuakeBadge from "../../assets/badges/Quakebadge.png";
// import RainBadge from "../../assets/badges/Rainbadge.png";
// import RelicBadge from "../../assets/badges/Relicbadge.png";
// import RisingBadge from "../../assets/badges/Risingbadge.png";
// import RockBadge from "../../assets/badges/RockBadge.png";
// import RumbleBadge from "../../assets/badges/Rumble_Badge.png";
// import SeaRubyBadge from "../../assets/badges/SeaRuby_Badge.png";
// import SoulBadge from "../../assets/badges/Soulbadge.png";
// import SpikeShellBadge from "../../assets/badges/SpikeShell_Badge.png";
// import StoneBadge from "../../assets/badges/Stonebadge.png";
// import StormBadge from "../../assets/badges/Stormbadge.png";
// import ThunderBadge from "../../assets/badges/Thunderbadge.png";
// import TranquilityBadge from "../../assets/badges/Tranquility_Badge.png";
// import TrioBadge from "../../assets/badges/Triobadge.png";
// import VolcanoBadge from "../../assets/badges/Volcanobadge.png";
// import VoltageBadge from "../../assets/badges/Voltage_Badge.png";
// import WaterBadge from "../../assets/badges/WaterBadge.png";
// import ZephyrBadge from "../../assets/badges/Zephyrbadge.png";

/**
 * Badge Model:
 * name: string,
 * icon: string,
 * progressTarget: number,
 * currentProgress: number,
 * objectives: object,
 */
export const allBadges = [
  {
    name: "BasicBadge",
    icon: BasicBadge,
    progressTarget: 1,
    currentProgress: 0,
    objectives: {
      bulblsaurOwned: false,
      squirtleOwned: false,
      charmanderOwned: false,
    },
  },
  {
    name: "GlacierBadge",
    icon: GlacierBadge,
    progressTarget: 1,
    currentProgress: 0,
    objectives: {
      laprasOwned: false,
      mamoswineOwned: false,
      jynxOwned: false,
      dewgongOwned: false,
      cloysterOwned: false,
      weavileOwned: false,
    },
  },
  {
    name: "RainbowBadge",
    icon: RainbowBadge,
    progressTarget: 1,
    currentProgress: 0,
    objectives: {
      typeFireOwned: false,
      typeWaterOwned: false,
      typeIceOwned: false,
      typeGrassOwned: false,
      typeDarkOwned: false,
      typeFairyOwned: false,
      typeNormalOwned: false,
      typeGroundOwned: false,
      typeSteelOwned: false,
      typeGhostOwned: false,
      typePoisonOwned: false,
      typeRockOwned: false,
      typeBugOwned: false,
      typePsychicOwned: false,
      typeElectricOwned: false,
      typeFlyingOwned: false,
      typeDragonOwned: false,
      typeFightingOwned: false,
    },
  },
  {
    name: "HeatBadge",
    icon: HeatBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenFirePokemonOwned: false,
      twentyFirePokemonOwned: false,
      thirtyFirePokemonOwned: false,
      fortyFirePokemonOwned: false,
      fiftyFirePokemonOwned: false,
      sixtyFirePokemonOwned: false,
      seventyFirePokemonOwned: false,
      eightyFirePokemonOwned: false,
      ninetyFirePokemonOwned: false,
      hundrenFirePokemonOwned: false,
    },
  },
  {
    name: "BoulderBadge",
    icon: BoulderBadge,
    progressTarget: 1,
    currentProgress: 0,
    objectives: {
      kabutopsOwned: false,
      onixOwned: false,
      omastarOwned: false,
      rhyhornOwned: false,
      gravelerOwned: false,
    },
  },
  {
    name: "KnuckleBadge",
    icon: KnuckleBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenFightingPokemonOwned: false,
      twentyFightingPokemonOwned: false,
      thirtyFightingPokemonOwned: false,
      fortyFightingPokemonOwned: false,
      fiftyFightingPokemonOwned: false,
      sixtyFightingPokemonOwned: false,
      seventyFightingPokemonOwned: false,
      eightyFightingPokemonOwned: false,
      ninetyFightingPokemonOwned: false,
      hundrenFightingPokemonOwned: false,
    },
  },
  {
    name: "CascadeBadge",
    icon: CascadeBadge,
    progressTarget: 1,
    currentProgress: 0,
  },
  {
    name: "CliffBadge",
    icon: CliffBadge,
    progressTarget: 1,
    currentProgress: 0,
  },
  {
    name: "CoalBadge",
    icon: CoalBadge,
    progressTarget: 1,
    currentProgress: 0,
  },
  {
    name: "CobbleBadge",
    icon: CobbleBadge,
    progressTarget: 1,
    currentProgress: 0,
  },
];
