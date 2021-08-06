import { Badge } from "./Badge";
import { useSelector } from "react-redux";

const BadgeSideBar = ({ setIsBadgeSideBar, isBadgeSideBar }) => {
  const badges = useSelector((state) => state.pokemon.allBadges);

  const renderBadges = (badges) => {
    return badges?.map((badge) => {
      return (
        <div className="progress-bars" key={badge.name}>
          <Badge key={badge.name} badge={badge} />
        </div>
      );
    });
  };

  return (
    <div className="sidebar">
      <button onClick={() => setIsBadgeSideBar(false)}>PokeDex</button>

      <div className="badge-containter">
        {isBadgeSideBar ? renderBadges(badges) : null}
      </div>
    </div>
  );
};

export default BadgeSideBar;
