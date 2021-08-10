import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = ({ setIsPokeList, setIsBadgeSideBar, setbadgeBtnActive1, setbadgeBtnActive2 }) => {
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <h4 onClick={() => setIsPokeList(false)}>Pokedex</h4>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h4 onClick={() => setIsPokeList(true)}>MyPoke</h4>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
          <h4
            onClick={() => {
              setbadgeBtnActive1(true);
              setbadgeBtnActive2(false);
              setIsBadgeSideBar(true);
            }}
          >
            Badge Sidebar
          </h4>
          </Link>
        </div>
        <div className="coin-link">
          <div className="coin-link-total">
            <h4>${pokeDollars}</h4>
          </div>
          <div className="coin-link-earn">
            <Link to="/GamePage" style={{ textDecoration: "none" }}>
              <h4>Earn Coins</h4>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
