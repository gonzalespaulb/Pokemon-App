import { Badge } from "./Badge";
import { useSelector } from "react-redux";
import { SidebarNav } from "../SidebarNav";

const BadgeSideBar = ({
  setIsBadgeSideBar,
  isBadgeSideBar,
  setBadgeBtnActive1,
  setBadgeBtnActive2,
  badgeBtnActive1,
  badgeBtnActive2,
}) => {
  const badges = useSelector((state) => state.pokemon.allBadges);

  const renderBadges = (badges) => {
    return badges?.map((badge) => {
      return <Badge key={badge?.name} badge={badge} />;
    });
  };

  return (
    <div className="sidebar">
      <div className="upper-section">
        <div className="button-container">
          <SidebarNav
            setIsBadgeSideBar={setIsBadgeSideBar}
            setBadgeBtnActive1={setBadgeBtnActive1}
            setBadgeBtnActive2={setBadgeBtnActive2}
            badgeBtnActive1={badgeBtnActive1}
            badgeBtnActive2={badgeBtnActive2}
          />
        </div>
      </div>

      <div className="badge-containter">
        {isBadgeSideBar ? renderBadges(badges) : null}
      </div>
    </div>
  );
};

export default BadgeSideBar;
