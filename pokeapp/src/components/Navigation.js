import React from "react";


const Navigation = ({setIsPokeList}) => {

    return(
        
            <nav className="navigation">
               <div className="navigation-logo">
                   <div>Logo</div>
               </div>
                <div className="navigation-links">
                    <div className="card-links">
                        <h4 onClick={() => setIsPokeList(false) }>Pokedex</h4>
                        <h4 onClick={() => setIsPokeList(true) }>MyPoke</h4>
                    </div> 
                    <div className="coin-link">
                        <div className="coin-link-total">
                            <h4>$1,357</h4>
                        </div>
                        <div className="coin-link-earn">
                            <h4>Earn Coins</h4>
                        </div>
                    </div>                   
                </div>
            </nav>
    )
};

export default Navigation;