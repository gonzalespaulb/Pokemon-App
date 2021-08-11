import React from "react";


export const SidebarNav = ({ setIsBadgeSideBar, setbadgeBtnActive1, setbadgeBtnActive2, badgeBtnActive1, badgeBtnActive2 }) => {
  return (
    <>
      <div
        className={badgeBtnActive1 ? "badge-btn-left active" : "badge-btn-left"}
        onClick={() => {
          setbadgeBtnActive1(true);
          setbadgeBtnActive2(false);
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
          setbadgeBtnActive1(false);
          setbadgeBtnActive2(true);
          setIsBadgeSideBar(false);
        }}
      >
        Poke Info
      </div>
    </>
  );
};
