import React, {useState} from "react";

const ToolTip = ({direction, children, content}) => {

    const [active, setActive] = useState(false);

    const showTip = () => {
        setActive(true);
    };

    const hideTip = () => {
        setActive(false);
    };

    return(
        <div className="Tooltip-Wrapper" onMouseEnter={showTip} onMouseLeave={hideTip}>
            {children}
            {active && (
                <div className={`Tooltip-Tip ${ direction || "top"}`}>
                    
          {content}
        </div>
      )}
        </div>
    )
};

export default ToolTip;