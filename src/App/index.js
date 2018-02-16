import React from "react";
import { Provider } from "react-redux";
import store from "../state/store.js";
import { Header, Footer, Main } from "../components";
import style from "./style.scss";
import {fetchAllMovies} from "../state/actions.js"; 
function fetch () {
  const url = "/videos";
  store.dispatch(fetchAllMovies(url));
}

const App = () => (
  <Provider store={store}>
    <div id="app-container" onClick={fetch}>
      <Header />
      <Main />
      <Footer />
    </div>
  </Provider>
);

export default App; 