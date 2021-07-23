import React from "react";

const Layout = ({ Navigation, FilterBar, SideBar, DigitalCardBinder }) => {
  return (
    <div className="main-container">
      {Navigation}
      {FilterBar}
      {SideBar}
      {DigitalCardBinder}
    </div>
  );
};

export default Layout;
