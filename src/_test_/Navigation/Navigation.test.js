import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Navigation } from "../../components";

Enzyme.configure({ adapter: new Adapter() });

describe("Navigation component testing", function testNavigation() {
  
  it("should render toggle button when toggeable property is not set false", function () {
    const id = "menu"; 
    const Menu = shallow(<Navigation
      menuId={id}
      links={[
        { href:"home", label:"home"},
        {href:"about", lable:"about"}
      ]}
    />);
    const MenuChildren = Menu.children();
    expect(MenuChildren.length).toBe(3);
    expect(Menu.childAt(0).contains(<p></p>)).toBe(true);
    expect(Menu.find(".collapse").length).toBe(1);
  });

  it("should not render toggle button when toggeable property is set false", function () {
    const id = "menu"; 
    const Menu = shallow(<Navigation
      menuId={id}
      toggleable={false}
      links={[
        {href:"home", label:"home"},
        {href:"about", lable:"about"}
      ]}
    />);
    const MenuChildren = Menu.children();
    expect(MenuChildren.length).toBe(2);
    expect(Menu.childAt(0).contains(<p></p>)).toBe(true);
    expect(Menu.find(".collapse").length).toBe(0);
    expect(Menu.find(".navbar-collapse").length).toBe(0);
  });


});
