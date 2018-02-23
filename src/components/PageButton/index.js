import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as  actions from "../../state/actions.js";

class PageButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.fetchAllMovies.bind(null)}>{this.props.page}</button>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};


export default connect(null, mapDispatchToProps)(PageButton); 