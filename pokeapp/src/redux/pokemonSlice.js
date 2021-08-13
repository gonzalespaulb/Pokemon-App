import { createSlice } from "@reduxjs/toolkit";
import { allBadges } from "../components/badges/bagdeIcon";
import { updateBadgeProgress } from "../components/badges/utils/allTypesHelper";

export const pokemonSlice = createSlice({
  name: "pokemon",
  //initialize states
  initialState: {
    allPokemon: [],
    pokeDollars: 10000,
    allBadges: allBadges,
    bugBadgeCount: 0,
    darkBadgeCount: 0,
    dragonBadgeCount: 0,
    earthBadgeCount: 0,
    fairyBadgeCount: 0,
    featherBadgeCount: 0,
    fightingBadgeCount: 0,
    fireBadgeCount: 0,
    freezeBadgeCount: 0,
    grassBadgeCount: 0,
    mineralBadgeCount: 0,
    plainBadgeCount: 0,
    psychicBadgeCount: 0,
    rockBadgeCount: 0,
    soulBadgeCount: 0,
    toxicBadgeCount: 0,
    voltageBadgeCount: 0,
    waterBadgeCount: 0,
  },
  //The reducers are the functions that change our state
  reducers: {
    //Updates allPokemon state with the updated info
    setPokeList: (state, action) => {
      state.allPokemon = action.payload;
    },

    winPokemon: (state, action) => {
      const pokeIndex = state.allPokemon.findIndex(
        (element) => element.id === action.payload.id
      );

      state.allPokemon[pokeIndex].quantity++;
      state.pokeDollars = state.pokeDollars - 1000;
    },
    buyPokemon: (state, action) => {
      let type1 = action.payload.types[0].type.name;
      let type2 = null;

      if (action.payload.types.length > 1) {
        type2 = action.payload.types[1].type.name;
      }

      if (state.pokeDollars - action.payload.value >= 0) {
        //Finds the index of pokemon in the array that matches the id of the pokemon being updated
        const pokeIndex = state.allPokemon.findIndex(
          (element) => element.id === action.payload.id
        );

        //If Pokemon is in the list, just update the quantity property and deduct pokedollars
        if (pokeIndex !== -1) {
          state.allPokemon[pokeIndex].quantity++;
          state.pokeDollars -= action.payload.value;
        }

        // <<----------------------------Badge Reducer Logic Start------------------------------>>
        // <<----------------------------Basic Badge Logic Start------------------------------->>
        const basicBadgeIndex = state.allBadges.findIndex(
          (badge) => badge.name === "Basic Badge"
        );
        const basicBadge = state.allBadges[basicBadgeIndex];
        if (basicBadge.currentProgress !== basicBadge.progressTarget) {
          switch (action.payload.name) {
            case "bulbasaur":
              basicBadge.objectives.bulblsaurOwned = true;
              break;
            case "squirtle":
              basicBadge.objectives.squirtleOwned = true;
              break;
            case "charmander":
              basicBadge.objectives.charmanderOwned = true;
              break;
            default:
              break;
          }

          if (
            basicBadge.objectives.bulblsaurOwned &&
            basicBadge.objectives.squirtleOwned &&
            basicBadge.objectives.charmanderOwned
          ) {
            basicBadge.currentProgress = basicBadge.progressTarget;
          }
        }
        // <<----------------------------Basic Badge Logic End------------------------------->>
        // <<----------------------------Boulder Badge Logic Start------------------------------->>

        const boulderBadgeIndex = state.allBadges.findIndex(
          (badge) => badge?.name === "Boulder Badge"
        );
        const boulderBadge = state.allBadges[boulderBadgeIndex];
        if (boulderBadge.currentProgress !== boulderBadge.progressTarget) {
          switch (action.payload.name) {
            case "kabutops":
              boulderBadge.objectives.kabutopsOwned = true;
              break;
            case "onix":
              boulderBadge.objectives.onixOwned = true;
              break;
            case "omastar":
              boulderBadge.objectives.omastarOwned = true;
              break;
            case "rhyhorn":
              boulderBadge.objectives.rhyhornOwned = true;
              break;
            case "graveler":
              boulderBadge.objectives.gravelerOwned = true;
              break;
            default:
              break;
          }

          if (
            boulderBadge.objectives.kabutopsOwned &&
            boulderBadge.objectives.onixOwned &&
            boulderBadge.objectives.omastarOwned &&
            boulderBadge.objectives.rhyhornOwned &&
            boulderBadge.objectives.gravelerOwned
          ) {
            boulderBadge.currentProgress = boulderBadge.progressTarget;
          }
        }

        // <<----------------------------Boulder Badge Logic End------------------------------->>
        // <<----------------------------Bug Badge Logic Start------------------------------->>
        if (type1 === "bug" || type2 === "bug") {
          const bugBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Bug Badge"
          );

          let bugBadge = state.allBadges[bugBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            bugBadge,
            action.payload,
            "bug",
            state.bugBadgeCount
          );
          state.allBadges[bugBadgeIndex] = updatedBadge;
          state.bugBadgeCount = count;
        }
        // <<----------------------------Bug Badge Logic End------------------------------->>
        // <<----------------------------Dark Badge Logic Start------------------------------->>
        if (type1 === "dark" || type2 === "dark") {
          const darkBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Dark Badge"
          );

          let darkBadge = state.allBadges[darkBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            darkBadge,
            action.payload,
            "dark",
            state.darkBadgeCount
          );
          state.allBadges[darkBadgeIndex] = updatedBadge;
          state.darkBadgeCount = count;
        }
        // <<----------------------------Dark Badge Logic End------------------------------->>
        // <<----------------------------Dragon Badge Logic Start------------------------------->>
        if (type1 === "dragon" || type2 === "dragon") {
          const dragonBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Dragon Badge"
          );

          let dragonBadge = state.allBadges[dragonBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            dragonBadge,
            action.payload,
            "dragon",
            state.dragonBadgeCount
          );
          state.allBadges[dragonBadgeIndex] = updatedBadge;
          state.dragonBadgeCount = count;
        }
        // <<----------------------------Dragon Badge Logic End------------------------------->>
        // <<----------------------------Earth Badge Logic Start------------------------------->>
        if (type1 === "ground" || type2 === "ground") {
          const earthBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Earth Badge"
          );

          let earthBadge = state.allBadges[earthBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            earthBadge,
            action.payload,
            "ground",
            state.earthBadgeCount
          );
          state.allBadges[earthBadgeIndex] = updatedBadge;
          state.earthBadgeCount = count;
        }
        // <<----------------------------Earth Badge Logic End------------------------------->>
        // <<----------------------------Fairy Badge Logic Start------------------------------->>
        if (type1 === "fairy" || type2 === "fairy") {
          const fairyBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Fairy Badge"
          );

          let fairyBadge = state.allBadges[fairyBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            fairyBadge,
            action.payload,
            "fairy",
            state.fairyBadgeCount
          );
          state.allBadges[fairyBadgeIndex] = updatedBadge;
          state.fairyBadgeCount = count;
        }
        // <<----------------------------Fairy Badge Logic End------------------------------->>
        // <<----------------------------Feather Badge Logic Start------------------------------->>
        if (type1 === "flying" || type2 === "flying") {
          const featherBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Feather Badge"
          );

          let featherBadge = state.allBadges[featherBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            featherBadge,
            action.payload,
            "flying",
            state.featherBadgeCount
          );
          state.allBadges[featherBadgeIndex] = updatedBadge;
          state.featherBadgeCount = count;
        }
        // <<----------------------------Feather Badge Logic End------------------------------->>
        // <<----------------------------Fighting Badge Logic Start------------------------------->>
        if (type1 === "fighting" || type2 === "fighting") {
          const fightingBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Fighting Badge"
          );

          let fightingBadge = state.allBadges[fightingBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            fightingBadge,
            action.payload,
            "fighting",
            state.fightingBadgeCount
          );
          state.allBadges[fightingBadgeIndex] = updatedBadge;
          state.fightingBadgeCount = count;
        }
        // <<----------------------------Fighting Badge Logic End------------------------------->>
        // <<----------------------------Fire Badge Logic Start------------------------------->>
        if (type1 === "fire" || type2 === "fire") {
          const fireBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Fire Badge"
          );

          let fireBadge = state.allBadges[fireBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            fireBadge,
            action.payload,
            "fire",
            state.fireBadgeCount
          );
          state.allBadges[fireBadgeIndex] = updatedBadge;
          state.fireBadgeCount = count;
        }
        // <<----------------------------Fire Badge Logic End------------------------------->>
        // <<----------------------------Freeze Badge Logic Start------------------------------->>
        if (type1 === "ice" || type2 === "ice") {
          const freezeBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Freeze Badge"
          );

          let freezeBadge = state.allBadges[freezeBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            freezeBadge,
            action.payload,
            "ice",
            state.freezeBadgeCount
          );
          state.allBadges[freezeBadgeIndex] = updatedBadge;
          state.freezeBadgeCount = count;
        }
        // <<----------------------------Freeze Badge Logic End------------------------------->>
        // <<----------------------------Glacier Badge Logic Start------------------------------->>

        const glacierBadgeIndex = state.allBadges.findIndex(
          (badge) => badge.name === "Glacier Badge"
        );
        const glacierBadge = state.allBadges[glacierBadgeIndex];
        if (glacierBadge.currentProgress !== glacierBadge.progressTarget) {
          switch (action.payload.name) {
            case "lapras":
              glacierBadge.objectives.laprasOwned = true;
              break;
            case "mamoswine":
              glacierBadge.objectives.mamoswineOwned = true;
              break;
            case "jynx":
              glacierBadge.objectives.jynxOwned = true;
              break;
            case "dewgong":
              glacierBadge.objectives.dewgongOwned = true;
              break;
            case "cloyster":
              glacierBadge.objectives.cloysterOwned = true;
              break;
            case "weavile":
              glacierBadge.objectives.weavileOwned = true;
              break;
            default:
              break;
          }

          if (
            glacierBadge.objectives.laprasOwned &&
            glacierBadge.objectives.mamoswineOwned &&
            glacierBadge.objectives.jynxOwned &&
            glacierBadge.objectives.dewgongOwned &&
            glacierBadge.objectives.cloysterOwned &&
            glacierBadge.objectives.weavileOwned
          ) {
            glacierBadge.currentProgress = glacierBadge.progressTarget;
          }
        }
        // <<----------------------------Glacier Badge Logic End------------------------------->>
        // <<----------------------------Grass Badge Logic Start------------------------------->>
        if (type1 === "grass" || type2 === "grass") {
          const grassBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Grass Badge"
          );

          let grassBadge = state.allBadges[grassBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            grassBadge,
            action.payload,
            "grass",
            state.grassBadgeCount
          );
          state.allBadges[grassBadgeIndex] = updatedBadge;
          state.grassBadgeCount = count;
        }
        // <<----------------------------Grass Badge Logic End------------------------------->>
        // <<----------------------------Mineral Badge Logic Start------------------------------->>
        if (type1 === "steel" || type2 === "steel") {
          const mineralBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Mineral Badge"
          );

          let mineralBadge = state.allBadges[mineralBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            mineralBadge,
            action.payload,
            "steel",
            state.mineralBadgeCount
          );
          state.allBadges[mineralBadgeIndex] = updatedBadge;
          state.mineralBadgeCount = count;
        }
        // <<----------------------------Mineral Badge Logic End------------------------------->>
        // <<----------------------------Plain Badge Logic Start------------------------------->>
        if (type1 === "normal" || type2 === "normal") {
          const plainBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Plain Badge"
          );

          let plainBadge = state.allBadges[plainBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            plainBadge,
            action.payload,
            "normal",
            state.plainBadgeCount
          );
          state.allBadges[plainBadgeIndex] = updatedBadge;
          state.plainBadgeCount = count;
        }
        // <<----------------------------Plain Badge Logic End------------------------------->>
        // <<----------------------------Psychic Badge Logic Start------------------------------->>
        if (type1 === "psychic" || type2 === "psychic") {
          const psychicBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Psychic Badge"
          );

          let psychicBadge = state.allBadges[psychicBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            psychicBadge,
            action.payload,
            "psychic",
            state.psychicBadgeCount
          );
          state.allBadges[psychicBadgeIndex] = updatedBadge;
          state.psychicBadgeCount = count;
        }
        // <<----------------------------Psychic Badge Logic End------------------------------->>
        // <<----------------------------Rainbow Badge Logic Start------------------------------->>
        const rainbowBadgeIndex = state.allBadges.findIndex(
          (badge) => badge.name === "Rainbow Badge"
        );
        const rainbowBadge = state.allBadges[rainbowBadgeIndex];
        if (rainbowBadge.currentProgress !== rainbowBadge.progressTarget) {
          switch (action.payload.types[0].type.name) {
            case "fighting":
              rainbowBadge.objectives.typeFightingOwned = true;
              break;
            case "water":
              rainbowBadge.objectives.typeWaterOwned = true;
              break;
            case "ice":
              rainbowBadge.objectives.typeIceOwned = true;
              break;
            case "grass":
              rainbowBadge.objectives.typeGrassOwned = true;
              break;
            case "dark":
              rainbowBadge.objectives.typeDarkOwned = true;
              break;
            case "fairy":
              rainbowBadge.objectives.typeFairyOwned = true;
              break;
            case "normal":
              rainbowBadge.objectives.typeNormalOwned = true;
              break;
            case "ground":
              rainbowBadge.objectives.typeGroundOwned = true;
              break;
            case "steel":
              rainbowBadge.objectives.typeSteelOwned = true;
              break;
            case "ghost":
              rainbowBadge.objectives.typeGhostOwned = true;
              break;
            case "poison":
              rainbowBadge.objectives.typePoisonOwned = true;
              break;
            case "rock":
              rainbowBadge.objectives.typeRockOwned = true;
              break;
            case "bug":
              rainbowBadge.objectives.typeBugOwned = true;
              break;
            case "psychic":
              rainbowBadge.objectives.typePsychicOwned = true;
              break;
            case "electric":
              rainbowBadge.objectives.typeElectricOwned = true;
              break;
            case "flying":
              rainbowBadge.objectives.typeFlyingOwned = true;
              break;
            case "dragon":
              rainbowBadge.objectives.typeDragonOwned = true;
              break;
            case "fire":
              rainbowBadge.objectives.typeFireOwned = true;
              break;
            default:
              break;
          }

          if (
            rainbowBadge.objectives.typeFightingOwned &&
            rainbowBadge.objectives.typeDragonOwned &&
            rainbowBadge.objectives.typeFlyingOwned &&
            rainbowBadge.objectives.typeElectricOwned &&
            rainbowBadge.objectives.typePsychicOwned &&
            rainbowBadge.objectives.typeBugOwned &&
            rainbowBadge.objectives.typeRockOwned &&
            rainbowBadge.objectives.typePoisonOwned &&
            rainbowBadge.objectives.typeGhostOwned &&
            rainbowBadge.objectives.typeSteelOwned &&
            rainbowBadge.objectives.typeGroundOwned &&
            rainbowBadge.objectives.typeNormalOwned &&
            rainbowBadge.objectives.typeFairyOwned &&
            rainbowBadge.objectives.typeDarkOwned &&
            rainbowBadge.objectives.typeGrassOwned &&
            rainbowBadge.objectives.typeIceOwned &&
            rainbowBadge.objectives.typeWaterOwned &&
            rainbowBadge.objectives.typeFireOwned
          ) {
            rainbowBadge.currentProgress = rainbowBadge.progressTarget;
          }
        }
        // <<----------------------------Rainbow Badge Logic End------------------------------->>
        // <<----------------------------Rock Badge Logic Start------------------------------->>
        if (type1 === "rock" || type2 === "rock") {
          const rockBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Rock Badge"
          );

          let rockBadge = state.allBadges[rockBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            rockBadge,
            action.payload,
            "rock",
            state.rockBadgeCount
          );
          state.allBadges[rockBadgeIndex] = updatedBadge;
          state.rockBadgeCount = count;
        }
        // <<----------------------------Rock Badge Logic End------------------------------->>
        // <<----------------------------Soul Badge Logic Start------------------------------->>
        if (type1 === "ghost" || type2 === "ghost") {
          const soulBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Soul Badge"
          );

          let soulBadge = state.allBadges[soulBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            soulBadge,
            action.payload,
            "ghost",
            state.soulBadgeCount
          );
          state.allBadges[soulBadgeIndex] = updatedBadge;
          state.soulBadgeCount = count;
        }
        // <<----------------------------Soul Badge Logic End------------------------------->>
        // <<----------------------------Toxic Badge Logic Start------------------------------->>
        if (type1 === "poison" || type2 === "poison") {
          const toxicBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Toxic Badge"
          );

          let toxicBadge = state.allBadges[toxicBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            toxicBadge,
            action.payload,
            "poison",
            state.toxicBadgeCount
          );
          state.allBadges[toxicBadgeIndex] = updatedBadge;
          state.toxicBadgeCount = count;
        }
        // <<----------------------------Toxic Badge Logic End------------------------------->>
        // <<----------------------------Voltage Badge Logic Start------------------------------->>
        if (type1 === "electric" || type2 === "electric") {
          const voltageBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Voltage Badge"
          );

          let voltageBadge = state.allBadges[voltageBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            voltageBadge,
            action.payload,
            "electric",
            state.voltageBadgeCount
          );
          state.allBadges[voltageBadgeIndex] = updatedBadge;
          state.voltageBadgeCount = count;
        }
        // <<----------------------------Voltage Badge Logic End------------------------------->>
        // <<----------------------------Water Badge Logic Start------------------------------->>
        if (type1 === "water" || type2 === "water") {
          const waterBadgeIndex = state.allBadges.findIndex(
            (badge) => badge.name === "Water Badge"
          );

          let waterBadge = state.allBadges[waterBadgeIndex];

          let { updatedBadge, count } = updateBadgeProgress(
            waterBadge,
            action.payload,
            "water",
            state.waterBadgeCount
          );
          state.allBadges[waterBadgeIndex] = updatedBadge;
          state.waterBadgeCount = count;
        }
        // <<----------------------------Water Badge Logic End------------------------------->>
      }
    },
    // <<----------------------------Badge Reducer Logic End------------------------------>>
    sellPokemon: (state, action) => {
      //Finds the index of pokemon in the array that matches the id of the pokemon being updated
      const pokeIndex = state.allPokemon.findIndex(
        (element) => element.id === action.payload.id
      );

      //Checks to see if the pokemon that is clicked on is in the list
      if (pokeIndex !== -1) {
        //Saturate the quantity at 0,
        if (state.allPokemon[pokeIndex].quantity >= 1) {
          state.allPokemon[pokeIndex].quantity--;
          //User gets paid the pokemon's value
          state.pokeDollars += Math.floor(action.payload.value * 0.6);
        }
      }
    },
  },
});

export const { winPokemon, buyPokemon, sellPokemon, setPokeList } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
