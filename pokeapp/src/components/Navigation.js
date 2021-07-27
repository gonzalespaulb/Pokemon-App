import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ setIsPokeList, pokeDollars }) => {
  return (
    <nav className="navigation">
      <div className="navigation-logo">
        <Link to="/" style={{textDecoration: "none"}}> <div>Home</div> </Link>
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
            <Link style={{textDecoration: "none"}} to="/GamePage">
              <h4>Earn Coins</h4>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
