import React from "react";
import PokeDollarIcon from "../assets/pokeDollar.svg";
import { typeIconMaker } from "../utilities/pokemonIcon";
import ToolTip from "./ToolTip";

const SideBar = ({ selectedPokemon }) => {
//Will use this funtction at a later issue
  const abilityMapper = (abilities) => {
    return abilities?.map((abilityObject, index) => {
      return <p key={index}>{abilityObject.ability.name}</p>;
    });
  };
  //Will use this funtction at a later issue
  const gameMapper = (games) => {
    return games?.map((gameObject, index) => {
      return <p key={index}>{gameObject.version.name}</p>;
    });
  };

  const typeIconMapper = (types) => {
    return types?.map((typeObject, index) => {
      return <ToolTip content={typeObject.type.name}><img className="type-icons" src={typeIconMaker(typeObject.type.name)} key={index}/> </ToolTip>
    })
  };

  const weaknessIconMapper = (weaknesses) => {
    return weaknesses?.map((weakness, index) => {
      return <ToolTip content={weakness.name}><img className="type-icons" src={typeIconMaker(weakness.name)} key={index}/> </ToolTip>
    })
  };

  // ---------- Still being used for reference ----------------------------------
  
  // const renderPokemonInfo = () => {
  //     return(
  //       <>
  //       <div>{iconMapper(selectedPokemon.types)}</div>
  //       <p>{selectedPokemon.name}</p>
  //       <img src={selectedPokemon.picture} alt={selectedPokemon.name} />
  //       <p>{selectedPokemon.id}</p>
  //       <img src={PokeDollarIcon} alt="Currency Icon" style={{height: '16px'}}/>
  //       <p>{selectedPokemon.value}</p>
  //       <div>{typeMapper(selectedPokemon.types)}</div>
  //       <div>{weaknessMapper(selectedPokemon.weaknesses)}</div>
  //       <div>{abilityMapper(selectedPokemon.abilities)}</div>
  //       <button> Buy </button>
  //       <button> Sell </button>
  //       <button> More Information </button>
  //       <p>{selectedPokemon.height}</p>
  //       <p>{selectedPokemon.weight}</p>
  //       <div>{gameMapper(selectedPokemon.games)}</div>
        
  //       </>
  //     )
  // }

  // ---------- Still being used for reference ----------------------------------


  const sidebarInformation = () => {
    const sideBarImageURL = {
      backgroundImage: `url(${selectedPokemon.picture})`,
    }
    const makeUpperCase = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return(
      <div className="sidebar-container">
        <div className="sidebar-dropdown">
          <div className="dropdown"></div>
          <div className="close-btn"></div>
        </div>

        <div 
          className="sidebar-image"
          style={sideBarImageURL}
        >   
        </div>

        <div
          className="sidebar-name-id"  
        >
          <h3>{makeUpperCase(selectedPokemon.name)}</h3>
          <h4>#{selectedPokemon.id}</h4>
        </div>

        <div className="type-weakness">
          <div className="sidebar-type">
            <h4>Type</h4>
            <div>
              {typeIconMapper(selectedPokemon.types)}
            </div>    
          </div>

          <div className="sidebar-weakness">
            <h4>Weakness</h4>     
            <div>
            {weaknessIconMapper(selectedPokemon.weaknesses)}
            </div>  
          </div>
        </div>


        <div className="btn-container">
          <div className="buy-sell-container">
            <div className="buy-btn">
              <h4>Buy</h4>
            </div>
            <div className="sell-btn">
              <h4>Sell</h4>
            </div>
          </div>

          <div className="more-info-btn">
              <h4>More Information</h4>
          </div>
        </div>
      </div>
    )
  }
 

  return (
    <div className="sidebar">
        {selectedPokemon.types ? sidebarInformation() : <p>Side Bar</p>}
    </div>
  );
};

export default SideBar;
