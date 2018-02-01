import React from "react";
import { Navigation } from "../components";
import renderer from "react-test-renderer";
import ReactTestUtils from 'react-dom/test-utils';

test("Navigation testing", function(){
  const navigationComponent = renderer.create(
    <Navigation menuId="test" links={[
      {href:"home",label:"home"}, 
      {href:"about", label:"about"}
    ]}/>
  ); 
  let tree = navigationComponent.toJSON(); 
  expect(tree).toMatchSnapshot();
  
});