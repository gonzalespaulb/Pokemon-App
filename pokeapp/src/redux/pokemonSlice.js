import { createSlice } from "@reduxjs/toolkit";
import { allBadges } from "../components/badges/bagdeIcon";

export const pokemonSlice = createSlice({
  name: "pokemon",
  //initialize states
  initialState: {
    allPokemon: [],
    pokeDollars: 1000000,
    allBadges: allBadges,
    heatBadgeCount: 0,
    knuckleBadgeCount: 0,
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
    },
    buyPokemon: (state, action) => {
      if (state.pokeDollars - action.payload.value > 0) {
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
          (badge) => badge.name === "BasicBadge"
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
          (badge) => badge.name === "BoulderBadge"
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
        // <<----------------------------Knuckle Badge Logic Start------------------------------->>
        const knuckleBadgeIndex = state.allBadges.findIndex(
          (badge) => badge.name === "KnuckleBadge"
        );

        const knuckleBadge = state.allBadges[knuckleBadgeIndex];

        if (knuckleBadge.currentProgress !== knuckleBadge.progressTarget) {
          if (
            action.payload.types.length > 1
              ? action.payload.types[0].type.name === "fighting" ||
                action.payload.types[1].type.name === "fighting"
              : action.payload.types[0].type.name === "fighting"
          ) {
            state.knuckleBadgeCount++;
            switch (state.knuckleBadgeCount) {
              case 10:
                knuckleBadge.objectives.tenFightingPokemonOwned = true;
                break;
              case 20:
                knuckleBadge.objectives.twentyFightingPokemonOwned = true;
                break;
              case 30:
                knuckleBadge.objectives.thirtyFightingPokemonOwned = true;
                break;
              case 40:
                knuckleBadge.objectives.fortyFightingPokemonOwned = true;
                break;
              case 50:
                knuckleBadge.objectives.fiftyFightingPokemonOwned = true;
                break;
              case 60:
                knuckleBadge.objectives.sixtyFightingPokemonOwned = true;
                break;
              case 70:
                knuckleBadge.objectives.seventyFightingPokemonOwned = true;
                break;
              case 80:
                knuckleBadge.objectives.eightyFightingPokemonOwned = true;
                break;
              case 90:
                knuckleBadge.objectives.ninetyFightingPokemonOwned = true;
                break;
              case 100:
                knuckleBadge.objectives.hundredFightingPokemonOwned = true;
                break;
              default:
                break;
            }
            if (knuckleBadge.objectives.tenFightingPokemonOwned) {
              knuckleBadge.currentProgress = 1;
            }
            if (knuckleBadge.objectives.twentyFightingPokemonOwned) {
              knuckleBadge.currentProgress = 2;
            }
            if (knuckleBadge.objectives.thirtyFightingPokemonOwned) {
              knuckleBadge.currentProgress = 3;
            }
            if (knuckleBadge.objectives.fortyFightingPokemonOwned) {
              knuckleBadge.currentProgress = 4;
            }
            if (knuckleBadge.objectives.fiftyFightingPokemonOwned) {
              knuckleBadge.currentProgress = 5;
            }
            if (knuckleBadge.objectives.sixtyFightingPokemonOwned) {
              knuckleBadge.currentProgress = 6;
            }
            if (knuckleBadge.objectives.seventyFightingPokemonOwned) {
              knuckleBadge.currentProgress = 7;
            }
            if (knuckleBadge.objectives.eightyFightingPokemonOwned) {
              knuckleBadge.currentProgress = 8;
            }
            if (knuckleBadge.objectives.ninetyFightingPokemonOwned) {
              knuckleBadge.currentProgress = 9;
            }
            if (knuckleBadge.objectives.hundredFightingPokemonOwned) {
              knuckleBadge.currentProgress = 10;
            }
          }
        }
        // <<----------------------------Knuckle Badge Logic End------------------------------->>
        // <<----------------------------Glacier Badge Logic Start------------------------------->>

        const glacierBadgeIndex = state.allBadges.findIndex(
          (badge) => badge.name === "GlacierBadge"
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
        // <<----------------------------Heat Badge Logic Start------------------------------->>
        const heatBadgeIndex = state.allBadges.findIndex(
          (badge) => badge.name === "HeatBadge"
        );

        const heatBadge = state.allBadges[heatBadgeIndex];

        if (heatBadge.currentProgress !== heatBadge.progressTarget) {
          if (
            action.payload.types.length > 1
              ? action.payload.types[0].type.name === "fire" ||
                action.payload.types[1].type.name === "fire"
              : action.payload.types[0].type.name === "fire"
          ) {
            state.heatBadgeCount++;
            switch (state.heatBadgeCount) {
              case 10:
                heatBadge.objectives.tenFirePokemonOwned = true;
                break;
              case 20:
                heatBadge.objectives.twentyFirePokemonOwned = true;
                break;
              case 30:
                heatBadge.objectives.thirtyFirePokemonOwned = true;
                break;
              case 40:
                heatBadge.objectives.fortyFirePokemonOwned = true;
                break;
              case 50:
                heatBadge.objectives.fiftyFirePokemonOwned = true;
                break;
              case 60:
                heatBadge.objectives.sixtyFirePokemonOwned = true;
                break;
              case 70:
                heatBadge.objectives.seventyFirePokemonOwned = true;
                break;
              case 80:
                heatBadge.objectives.eightyFirePokemonOwned = true;
                break;
              case 90:
                heatBadge.objectives.ninetyFirePokemonOwned = true;
                break;
              case 100:
                heatBadge.objectives.hundredFirePokemonOwned = true;
                break;
              default:
                break;
            }
            if (heatBadge.objectives.tenFirePokemonOwned) {
              heatBadge.currentProgress = 1;
            }
            if (heatBadge.objectives.twentyFirePokemonOwned) {
              heatBadge.currentProgress = 2;
            }
            if (heatBadge.objectives.thirtyFirePokemonOwned) {
              heatBadge.currentProgress = 3;
            }
            if (heatBadge.objectives.fortyFirePokemonOwned) {
              heatBadge.currentProgress = 4;
            }
            if (heatBadge.objectives.fiftyFirePokemonOwned) {
              heatBadge.currentProgress = 5;
            }
            if (heatBadge.objectives.sixtyFirePokemonOwned) {
              heatBadge.currentProgress = 6;
            }
            if (heatBadge.objectives.seventyFirePokemonOwned) {
              heatBadge.currentProgress = 7;
            }
            if (heatBadge.objectives.eightyFirePokemonOwned) {
              heatBadge.currentProgress = 8;
            }
            if (heatBadge.objectives.ninetyFirePokemonOwned) {
              heatBadge.currentProgress = 9;
            }
            if (heatBadge.objectives.hundredFirePokemonOwned) {
              heatBadge.currentProgress = 10;
            }
          }
        }
        // <<----------------------------Heat Badge Logic End------------------------------->>
        // <<----------------------------Rainbow Badge Logic Start------------------------------->>
        const rainbowBadgeIndex = state.allBadges.findIndex(
          (badge) => badge.name === "RainbowBadge"
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
          state.pokeDollars += action.payload.value;
        }
      }
    },
  },
});

export const { winPokemon, buyPokemon, sellPokemon, setPokeList } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
