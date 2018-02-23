import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as  actions from "../../state/actions.js";
import ArticleCard from "../ArticleCard";
import PageButton from "../PageButton";
import style from "./style.scss";

const url = "/videos";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllMovies.bind(null, url,{page:0})();
  }

  render() {
    let movies = this.props.movies[this.props.page];

    return (
      <main>
        <p className="text-info px-5">{`${movies.length} results`} </p>
        <div className="d-flex flex-wrap justify-content-center">
          {movies.map((movie, index) =>
            <div className="articleItem card border-secondary m-1 p-2" key={index}>
              <ArticleCard {...movie} />
            </div>)
          }
        </div>
        <div className="search-pages">
          <PageButton page={1}/>
          <PageButton page={2}/>
          <PageButton page={3}/>
        </div>
      </main>
    );
  }
}


const mapStateToProps = (state) => {
  let {movies, page} = state; 
  return {
    page,
    movies,
  };
};

const mapDispathToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispathToProps)(Main); 