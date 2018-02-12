import React from "react";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import * as  actions from "../../state/actions.js";
import ArticleCard from "../ArticleCard";
import style from "./style.scss";


const Main = ({ MOVIES, fetchMovies }) => {
  fetchMovies();
  return (
    <main className="d-flex flex-wrap justify-content-center">
      {MOVIES.map((movie, index) =>
        <div className="articleItem m-3" key={index}>
          <ArticleCard {...movie} />
        </div>)
      }
    </main>
  );
};

const mapStateToProps = (state) => {
  let MOVIES = state.MOVIES;
  return {
    MOVIES
  };
};

const mapDispathToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispathToProps)(Main); 