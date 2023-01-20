import React from "react";
import branding from "../assets/branding.png";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const NAVIGATION_LINKS = [
    {
      path: "/",
      display: "HOME"
    },
    {
      path: "/about",
      display: "ABOUT"
    },
    // {
    //   path: "/winning-papers",
    //   display: "WINNING PAPERS"
    // }
  ];

  return (
    <div className="Header">
      <div className="branding">
        <img src={branding} className="logo" alt="logo" />
      </div>
      <div className="flex-spacer" />
      <div className="navigation-links">
        {NAVIGATION_LINKS.map((navigationLink) => {
          const navigationLinkClassName = location.pathname === navigationLink.path ? "navigation-link selected" : "navigation-link";
          return (
            <Link
              key={navigationLink.display}
              to={navigationLink.path}
              className={navigationLinkClassName}>
              {navigationLink.display}
            </Link>
          )
        })}
      </div>
    </div>
  )

}
