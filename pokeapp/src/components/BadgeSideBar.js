import {badgeIconMaker} from "../utilities/bagdeIcon";

const BadgeSideBar = ({setIsBadgeSideBar}) => {


    return(
        <div className="sidebar">
            <button onClick={()=>{setIsBadgeSideBar(false)}}> Close </button>
            <img src={badgeIconMaker("BalanceBadge")}/>
        </div>
    )
};

export default BadgeSideBar;