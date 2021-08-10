import { Badge } from "./Badge";
import { useSelector } from "react-redux";

const BadgeSideBar = ({ setIsBadgeSideBar, isBadgeSideBar,setbadgeBtnActive1, setbadgeBtnActive2, badgeBtnActive1, badgeBtnActive2 }) => {
  const badges = useSelector((state) => state.pokemon.allBadges);


  const renderBadges = (badges) => {
    return badges?.map((badge) => {
      return <Badge key={badge?.name} badge={badge} />;
    });
  };

  return (
    <div className="badge-sidebar">
      <div className="upper-section">
        <div className="button-container">
          <div
            className={badgeBtnActive1 ? "badge-btn active" : "badge-btn"}
            onClick={() => {
              setbadgeBtnActive1(true);
              setbadgeBtnActive2(false);
              setIsBadgeSideBar(true);
            }}
          >
            Badges
          </div>
          <div
            className={badgeBtnActive2 ? "badge-btn active" : "badge-btn"}
            onClick={() => {
              setbadgeBtnActive1(false);
              setbadgeBtnActive2(true);
              setIsBadgeSideBar(false);
            }}
          >
            Poke Info
          </div>
        </div>
      </div>

      <div className="badge-containter">
        {isBadgeSideBar ? renderBadges(badges) : null}
      </div>
    </div>
  );
};

export default BadgeSideBar;
