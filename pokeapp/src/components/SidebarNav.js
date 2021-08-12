import React from "react";


export const SidebarNav = ({ setIsBadgeSideBar, setBadgeBtnActive1, setBadgeBtnActive2, badgeBtnActive1, badgeBtnActive2 }) => {
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
        Badges
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
        Poke Info
      </div>
    </>
  );
};
