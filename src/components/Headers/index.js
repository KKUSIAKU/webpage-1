import React from "react";
import Brand from "../Brand";
import NavigationBar from "../Navigation"; 

const Header = () => (
  <header className="page-header navbar-light bg-light fixed-top">
    <div id="page-header-container">
      <div className="container-fluid">
        <div className="row row-border justify-content-between">
          <div className="brand-container col-2 menu-border">
            <Brand />
          </div>
          <div className="menu-container col-6 menu-border">
            <NavigationBar links = {[
              {href:"#", label:"HOME"}, 
              {href:"#courses", label:"CATALOG"},
              {href:"#mycourses", label:"MY PURCHASES"},  
              {href:"#sign-in", label:"LOG IN"}, 
              {href:"#sign-up", label:"SIGN UP"}, 
            ]}/>
          </div>
        </div>
      </div>
    </div>
  </header>);

export default Header;
