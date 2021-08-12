import React from "react";

const Layout = ({
  BadgeSideBar,
  DigitalCardBinder,
  FilterBar,
  isBadgeSideBar,
  Navigation,
  SideBar,
}) => {
  return (
    <div className="main-container">
      {Navigation}
      {FilterBar}
      {!isBadgeSideBar ? SideBar : BadgeSideBar}
      {DigitalCardBinder}
    </div>
  );
};

export default Layout;
