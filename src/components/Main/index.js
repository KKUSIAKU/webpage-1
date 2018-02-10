import React from "react";
import { connect } from "react-redux"; 

import ArticleCard from "../ArticleCard";
import CONSTANTS from "../../public/constants.js";
import style from "./style.scss";

const {MOVIES} = CONSTANTS; 

const Main = ({MOVIES}) => (
  <main className="d-flex flex-wrap justify-content-center">
    {MOVIES.map((movie, index) => 
      <div className="articleItem m-3" key={index}>
        <ArticleCard {...movie} />
      </div>)
    }
  </main>
);

const mapStateToProps = (state) => {
  let MOVIES = state.MOVIES; 
  return {
    MOVIES
  };
}; 

export default connect(mapStateToProps, null) (Main); 