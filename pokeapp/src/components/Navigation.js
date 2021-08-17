import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import coinLogo from "../assets/uiIcons/coingif.gif";
import pokeDollar from "../assets/uiIcons/pokeDollar.svg";

const Navigation = ({
  isMyPoke,
  isPokeDex,
  setIsMyPoke,
  setIsPokeDex,
  currencyDisplayRef,
}) => {
  const pokeDollars = useSelector((state) => state.pokemon.pokeDollars);

  const [logo, setLogo] = useState(false);
  const hoverInLogo = () => {
    setLogo(true);
  }

  const hoverOutLogo = () => {
    setLogo(false);
  }

  return (
    <nav className="navigation">
      <div className="navigation-logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1
            onMouseEnter={hoverInLogo}
            onMouseLeave={hoverOutLogo}
            className="logo-text"
          >
            {!logo ? `ポケパレス` : `poképalace`}
          </h1>
        </Link>
      </div>
      <div className="navigation-links">
        <div className="card-links">
          <div className="nav-link">
            <Link
              to="/"
              className="nav-link-font"
              style={{ textDecoration: "none" }}
            >
              <h4
                className="nav-link-font"
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
                className="nav-link-font"
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
            <h4 className="coin-link-font">
              <img
                src={pokeDollar}
                alt="pokeDollar"
                className="poke-dollar-icon"
              />
              {pokeDollars}
            </h4>
          </div>
          <div className="coin-link-earn">
            <Link
              to="/GamePage"
              style={{ textDecoration: "none", color: "#CA9007" }}
            >
              <h4 className="coin-link-font">Earn Coins</h4>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
