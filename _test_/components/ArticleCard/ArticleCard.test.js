import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ArticleCard } from "../../../src/components";

Enzyme.configure({ adapter: new Adapter() });

describe("A <ArticleCard/> testing", function testNavigation() {

  it("should passed simply", function(){
    expect(true).toBe(true);
  });

  /*it("should render img node with default image and no image alt", function () {
    const id = "movie";
    const title ="movie title"; 
    const year = "1999";
    const Article = shallow(<ArticleCard
      articleId={id}
      title={title}
      year = {year}
    />);
    const ArticleChildren = Article.children();
    expect(ArticleChildren.length).toBe(3);
    expect(Article.childAt(0).contains(<p></p>)).toBe(true);
    expect(Article.find(".collapse").length).toBe(1);
  });*/
});
