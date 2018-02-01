import React from "react";
import Brand from "../Brand";
import NavigationBar from "../Navigation"; 

const Footer = () => (
  <footer className="page-footer">
    <div id="page-footer-container">
      <div className="container-fluid">
        <div className="row row-border justify-content-between">
          <div className="brand-container col-2 menu-border">
            <Brand />
          </div>
          <div className="menu-container col-6 menu-border">
            <NavigationBar links = {[
              {href:"#", label:"About Us"}, 
              {href:"#courses", label:"Terms of use"},
              {href:"#mycourses", label:"Policy"},  
              {href:"#sign-in", label:"Contact Us"}
            ]}/>
          </div>
        </div>
      </div>
    </div>
  </footer>);

export default Footer; 