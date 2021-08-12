import React from "react";

const Layout = ({
  Navigation,
  FilterBar,
  SideBar,
  DigitalCardBinder,
  BadgeSideBar,
  isBadgeSideBar,
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
