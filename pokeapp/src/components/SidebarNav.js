import React from "react";

export const SidebarNav = ({
  setIsBadgeSideBar,
  setBadgeBtnActive1,
  setBadgeBtnActive2,
  badgeBtnActive1,
  badgeBtnActive2,
}) => {
  return (
    <>
      <div
        className={badgeBtnActive1 ? "badge-btn-left active" : "badge-btn-left"}
        onClick={() => {
          setBadgeBtnActive1(true);
          setBadgeBtnActive2(false);
          setIsBadgeSideBar(true);
        }}
      >
        {/* {badgeBtnActive1 ? "sidebar-nav-font-1" : "sidebar-nav-font-2"} */}
        <h4
          className={
            !badgeBtnActive1 ? "sidebar-nav-font-1" : "sidebar-nav-font-2"
          }
        >
          Badges
        </h4>
        <div className={badgeBtnActive1 ? "underline" : ""} />
      </div>
      <div
        className={
          badgeBtnActive2 ? "badge-btn-right active" : "badge-btn-right"
        }
        onClick={() => {
          setBadgeBtnActive1(false);
          setBadgeBtnActive2(true);
          setIsBadgeSideBar(false);
        }}
      >
        <h4
          className={
            badgeBtnActive1 ? "sidebar-nav-font-1" : "sidebar-nav-font-2"
          }
        >
          Poke Info
        </h4>
        <div className={badgeBtnActive2 ? "underline" : ""} />
      </div>
    </>
  );
};
