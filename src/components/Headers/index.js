import React from "react";
import Brand from "../Brand";
import Navigation from "../Navigation";

const justifyConent = "end"; // use to set up bootstrap justify-content class 

const headerLinks = [
  { href: "#", label: "HOME" },
  { href: "#courses", label: "CATALOG" },
  { href: "#mycourses", label: "MY PURCHASES" },
  { href: "#sign-in", label: "LOG IN" },
  { href: "#sign-up", label: "SIGN UP" },
];
const headerMenuId = "nav-header";

const headerToggeable = true;

const Header = () => (
  <header className="page-header navbar-light bg-light fixed-top">
    <div id="page-header-container">
      <div className="container-fluid">
        <div className="row row-border justify-content-between">
          <div className="brand-container col-2 menu-border">
            <Brand />
          </div>
          <div className="menu-container col-6 menu-border">
            <Navigation
              menuId={headerMenuId}
              toggleable={headerToggeable}
              links={headerLinks}
              justify={justifyConent} />
          </div>
        </div>
      </div>
    </div>
  </header>);

export default Header;
