import BasicBadge from "../../assets/badges/Basicbadge.png";
import BoulderBadge from "../../assets/badges/Boulderbadge.png";
import BugBadge from "../../assets/badges/Bug_Badge_Viola.png";
import DarkBadge from "../../assets/badges/DarkBadge.png";
import DragonBadge from "../../assets/badges/DragonBadge.png";
import EarthBadge from "../../assets/badges/Earthbadge.png";
import FairyBadge from "../../assets/badges/Fairy_Badge.png";
import FeatherBadge from "../../assets/badges/Featherbadge.png";
import FightingBadge from "../../assets/badges/FightingBadge.png";
import FireBadge from "../../assets/badges/FireBadge.png";
import FreezeBadge from "../../assets/badges/Freezebadge.png";
import GlacierBadge from "../../assets/badges/Glacierbadge.png";
import GrassBadge from "../../assets/badges/GrassBadge.png";
import MineralBadge from "../../assets/badges/Mineralbadge.png";
import PlainBadge from "../../assets/badges/Plainbadge.png";
import PsychicBadge from "../../assets/badges/Psychic_Badge.png";
import RainbowBadge from "../../assets/badges/Rainbow_Badge.png";
import RockBadge from "../../assets/badges/RockBadge.png";
import SoulBadge from "../../assets/badges/Soulbadge.png";
import ToxicBadge from "../../assets/badges/Toxic_Badge.png";
import VoltageBadge from "../../assets/badges/Voltage_Badge.png";
import WaterBadge from "../../assets/badges/WaterBadge.png";

// Will use more of these imported images in future PR
// import BalanceBadge from "../../assets/badges/Balancebadge.png";
// import BeaconBadge from "../../assets/badges/Beaconbadge.png";
// import CoralEyeBadge from "../../assets/badges/Coral-Eye_Badge.png";
// import DynamoBadge from "../../assets/badges/Dynamobadge.png";
// import FenBadge from "../../assets/badges/Fenbadge.png";
// import FogBadge from "../../assets/badges/Fogbadge.png";
// import ForestBadge from "../../assets/badges/Forestbadge.png";
// import FreedomBadge from "../../assets/badges/Freedom_Badge.png";
// import HarmonyBadge from "../../assets/badges/Harmony_Badge.png";
// import HiveBadge from "../../assets/badges/Hivebadge.png";
// import IceBergBadge from "../../assets/badges/Iceberg_Badge.png";
// import IcicleBadge from "../../assets/badges/Iciclebadge.png";
// import JadeStarBadge from "../../assets/badges/JadeStar_Badge.png";
// import JetBadge from "../../assets/badges/Jetbadge.png";
// import LegendBadge from "../../assets/badges/Legendbadge.png";
// import MarshBadge from "../../assets/badges/Marshbadge.png";
// import MineBadge from "../../assets/badges/Minebadge.png";
// import PatienceBadge from "../../assets/badges/Patience_Badge.png";
// import PlantBadge from "../../assets/badges/Plant_Badge.png";
// import PrideBadge from "../../assets/badges/Pride_Badge.png";
// import QuakeBadge from "../../assets/badges/Quakebadge.png";
// import RainBadge from "../../assets/badges/Rainbadge.png";
// import RelicBadge from "../../assets/badges/Relicbadge.png";
// import RisingBadge from "../../assets/badges/Risingbadge.png";
// import RumbleBadge from "../../assets/badges/Rumble_Badge.png";
// import SeaRubyBadge from "../../assets/badges/SeaRuby_Badge.png";
// import SpikeShellBadge from "../../assets/badges/SpikeShell_Badge.png";
// import StoneBadge from "../../assets/badges/Stonebadge.png";
// import StormBadge from "../../assets/badges/Stormbadge.png";
// import ThunderBadge from "../../assets/badges/Thunderbadge.png";
// import TranquilityBadge from "../../assets/badges/Tranquility_Badge.png";
// import TrioBadge from "../../assets/badges/Triobadge.png";
// import VolcanoBadge from "../../assets/badges/Volcanobadge.png";
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
    name: "BugBadge",
    icon: BugBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
    },
  },
  {
    name: "DarkBadge",
    icon: DarkBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
    },
  },
  {
    name: "DragonBadge",
    icon: DragonBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
    },
  },
  {
    name: "EarthBadge",
    icon: EarthBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
    },
  },
  {
    name: "FairyBadge",
    icon: FairyBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
    },
  },
  {
    name: "FeatherBadge",
    icon: FeatherBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
    },
  },
  {
    name: "FightingBadge",
    icon: FightingBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
    },
  },
  {
    name: "FireBadge",
    icon: FireBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
    },
  },
  {
    name: "FreezeBadge",
    icon: FreezeBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
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
    name: "GrassBadge",
    icon: GrassBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
    },
  },
  {
    name: "MineralBadge",
    icon: MineralBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
    },
  },
  {
    name: "PlainBadge",
    icon: PlainBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
    },
  },
  {
    name: "PsychicBadge",
    icon: PsychicBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
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
    name: "RockBadge",
    icon: RockBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
    },
  },
  {
    name: "SoulBadge",
    icon: SoulBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
    },
  },
  {
    name: "ToxicBadge",
    icon: ToxicBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
    },
  },
  {
    name: "VoltageBadge",
    icon: VoltageBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
    },
  },
  {
    name: "WaterBadge",
    icon: WaterBadge,
    progressTarget: 10,
    currentProgress: 0,
    objectives: {
      tenOwned: false,
      twentyOwned: false,
      thirtyOwned: false,
      fortyOwned: false,
      fiftyOwned: false,
      sixtyOwned: false,
      seventyOwned: false,
      eightyOwned: false,
      ninetyOwned: false,
      hundredOwned: false,
    },
  },
];
