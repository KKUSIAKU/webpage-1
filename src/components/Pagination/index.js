import React from "react";
import { connect } from "react-redux"; 
import { bindActionCreators } from "redux"; 
import * as actions from "../../state/actions.js"; 

import PageButton from "./PageButton"; 

const Pagination = (props) => (
  <div className="search-pages d-flex justify-content-center">
    <PageButton page={1} fetchAllMovies = {props.fetchAllMovies}/>
    <PageButton page={2} fetchAllMovies = {props.fetchAllMovies}/>
    <PageButton page={3} fetchAllMovies = {props.fetchAllMovies}/>
  </div>
); 

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(null, mapDispatchToProps)(Pagination);