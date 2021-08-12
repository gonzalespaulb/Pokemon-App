import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";

export const Badge = ({ badge }) => {

  const [isHovered, setIsHovered] = useState(false);

  let percentComplete = badge?.currentProgress * (100 / badge?.progressTarget);

  return (
    <div  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="badge">
     <div className={!isHovered ? "overlay" : "overlay onHover"}></div>
      <div className="badge-info">
      <h4>{badge?.name}</h4>
      <img className="badge-icon" src={badge?.icon} alt={badge?.name} />
      </div>
      <ProgressBar className="progress-bar" completed={percentComplete} />
    </div>
  );
};
