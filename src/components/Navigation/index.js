import React from "react";
import PropTypes from "prop-types";
import ToggleButton from "../ToggleButton";

const createLinkItem = (link, key) => {
  // check later to include regex formulation on ref
  if(!link.hasOwnProperty("href") || !link.hasOwnProperty("label")){
    throw new Error("In NavigationBar component :"+ 
    "Invalid link property assigned to NavigationBar." +
    "Each link item shoud be in form of {href:value, label:value}"); 
  }

  return (
    <li className="nav-item" key={key}>
      <a className="nav-link" href={`#${link.href}`}>{link.label}</a>
    </li>);
};
/*
const NavigationLinks = ({ links }) => (
  <ul className="navbar-nav  container justify-content-end">
    {links.map(({ href, label }, index) => (
      <li className="nav-item" key={index}>
        <a className="nav-link" href={href}>{label}</a>
      </li>)
    )}
  </ul>
);*/

const NavigationLinks = ({ links }) => (
  <ul className="navbar-nav  container justify-content-end">
    {links.map((link, index) => createLinkItem(link,index))}
  </ul>
);

const Navigation = ({ links, toggleable, menuId }) => (
  <nav id="menu1" className="navbar navbar-expand-md navbar-light bg-light menu-border">
    <p></p>
    {toggleable && <ToggleButton targetId={menuId} />}
    <div className="collapse navbar-collapse" id={`#${menuId}`}>
      <NavigationLinks links={links} />
    </div>
  </nav>
);

Navigation.defaultProps = {
  toggleable: true,
},

Navigation.propTypes = {
  links: PropTypes.arrayOf(Object).isRequired,
  menuId: PropTypes.string.isRequired,
  toggleable: PropTypes.bool,
};


export default Navigation;
