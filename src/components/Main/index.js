import React from "react";
import ArticleCard from "../ArticleCard";
import CONSTANTS from "../../public/constants.js";
import style from "./style.scss";

const {MOVIES} = CONSTANTS; 

const Main = () => (
  <main className="d-flex flex-wrap justify-content-center">
    {MOVIES.map((movie, index) => 
      <div className="articleItem m-3" key={index}>
        <ArticleCard {...movie} />
      </div>)
    }
  </main>
);

export default Main; 