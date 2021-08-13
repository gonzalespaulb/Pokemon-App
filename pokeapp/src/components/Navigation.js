import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = ({ isMyPoke, isPokeDex, setIsMyPoke, setIsPokeDex, currencyDisplayRef }) => {
  const pokeDollars = useSelector((state) => state.pokemon.pokeDollars);



  return (
    <nav className="navigation">
      <div className="navigation-logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h4>Home</h4>
        </Link>
      </div>
      <div className="navigation-links">
        <div className="card-links">
          <div className="nav-link">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h4
                onClick={() => {
                  setIsPokeDex(true);
                  setIsMyPoke(false);
                }}
              >
                Pokedex
              </h4>
              <div className={isPokeDex ? "underline" : ""} />
            </Link>
          </div>

          <div className="nav-link">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h4
                onClick={() => {
                  setIsPokeDex(false);
                  setIsMyPoke(true);
                }}
              >
                MyPoke
              </h4>
              <div className={isMyPoke ? "underline" : ""} />
            </Link>
          </div>
        </div>
        <div className="coin-link" ref={currencyDisplayRef}>
          <div className="coin-link-total">
            <h4>${pokeDollars}</h4>
          </div>
          <div className="coin-link-earn">
            <Link to="/GamePage" style={{ textDecoration: "none", color:"#CA9007" }}>
              <h4>Earn Coins</h4>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
