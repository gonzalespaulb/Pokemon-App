import React, {useState} from "react";

const Layout = ({
  applyStyles,
  BadgeSideBar,
  DigitalCardBinder,
  FilterBar,
  isBadgeSideBar,
  Navigation,
  SideBar,
}) => {


  return (
    <div className={applyStyles(`main-container`)}>
      {Navigation}
      {FilterBar}
      {!isBadgeSideBar ? SideBar : BadgeSideBar}
      {DigitalCardBinder}
    </div>
  );
};

export default Layout;
