import React from "react";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import * as  actions from "../../state/actions.js";
import ArticleCard from "../ArticleCard";
import style from "./style.scss";

import store from "../../state/store.js";
import { fetchAllMovies } from "../../state/actions.js";
const url = "/videos";

function fetch() {
  store.dispatch(fetchAllMovies(url));
}


/*const Main = ({ MOVIES, fetchAllMovies }) => {
  return (
    <main className="d-flex flex-wrap justify-content-center"
      onClick={fetchAllMovies.bind(null,url )}>
      <p>{`${MOVIES.length} results`} </p>
      {MOVIES.map((movie, index) =>
        <div className="articleItem m-3" key={index}>
          <ArticleCard {...movie} />
        </div>)
      }
    </main>
  );
};*/

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllMovies.bind(null, url)();
  }

  render() {
    let { MOVIES } = this.props;
    return (
      <main>
        <p className="text-info px-5">{`${MOVIES.length} results`} </p>
        <div className="d-flex flex-wrap justify-content-center">
          {MOVIES.map((movie, index) =>
            <div className="articleItem card border-secondary m-1 p-2" key={index}>
              <ArticleCard {...movie} />
            </div>)
          }
        </div>
      </main>
    );
  }
}


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