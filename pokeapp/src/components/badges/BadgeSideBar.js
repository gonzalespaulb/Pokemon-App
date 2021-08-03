import { badgeIconMaker } from "./bagdeIcon";
import ProgressBar from "@ramonak/react-progress-bar";
import { useSelector } from "react-redux";


const BadgeSideBar = ({ setIsBadgeSideBar, isBadgeSideBar }) => {

  const badges = useSelector((state) => state.pokemon.allBadges);

  console.log(badges);

  const renderBadges = (badges) => {
    return badges?.map((badge) => {
      console.log(badge.icon)
      return (
        <div className="progress-bars" key={badge.name}>
          <h4>{badge.name}</h4>
          <img src={badge.icon} />
          <ProgressBar completed={badge.currentProgress*100} />
        </div>
      );
    });
  };

  return (
    <div className="sidebar">
      <button onClick={() => setIsBadgeSideBar(false)}>Close</button>
      {isBadgeSideBar ? renderBadges(badges) : null}
    </div>
  );
};

export default BadgeSideBar;
