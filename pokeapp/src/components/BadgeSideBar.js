import {badgeIconMaker} from "../utilities/bagdeIcon";
import ProgressBar from "@ramonak/react-progress-bar";


const BadgeSideBar = ({setIsBadgeSideBar}) => {


    return(
        <div className="sidebar">
            <button onClick={()=>{setIsBadgeSideBar(false)}}> Close </button>
            <ProgressBar completed={60}/>
            <img src={badgeIconMaker("BalanceBadge")}/>
        </div>
    )
};

export default BadgeSideBar;