import React from "react";

const Layout = ({ Navigation, FilterBar, SideBar, DigitalCardBinder, GamePage }) => {
  return (
    <div className="main-container">
      {Navigation}
      {FilterBar}
      {SideBar}
      {DigitalCardBinder}
      {GamePage}
    </div>
  );
};

export default Layout;
