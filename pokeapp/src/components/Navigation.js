import React from "react";
import GamePage from "./GamePage";

const Navigation = ({ setIsPokeList, pokeDollars }) => {
  return (
    <nav className="navigation">
      <div className="navigation-logo">
        <div onClick={() => GamePage() }>Logo</div>
      </div>
      <div className="navigation-links">
        <div className="card-links">
          <h4 onClick={() => setIsPokeList(false)}>Pokedex</h4>
          <h4 onClick={() => setIsPokeList(true)}>MyPoke</h4>
        </div>
        <div className="coin-link">
          <div className="coin-link-total">
            <h4>${pokeDollars}</h4>
          </div>
          <div className="coin-link-earn">
            <h4>Earn Coins</h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
