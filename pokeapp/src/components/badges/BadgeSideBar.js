import { badgeIconMaker } from "./bagdeIcon";
import ProgressBar from "@ramonak/react-progress-bar";
import { allBadges } from "./bagdeIcon";

const BadgeSideBar = ({ setIsBadgeSideBar, isBadgeSideBar }) => {
  const renderBadges = (badgesArray) => {
    return badgesArray.map((badgeName) => {
      return (
        <div className="progress-bars" key={badgeName}>
          <img src={badgeIconMaker(badgeName)} />
          <ProgressBar key={badgeName} completed={20} />
        </div>
      );
    });
  };

  return (
    <div className="sidebar">
      <button onClick={() => setIsBadgeSideBar(false)}>Close</button>
      {isBadgeSideBar ? renderBadges(allBadges) : null}
    </div>
  );
};

export default BadgeSideBar;
