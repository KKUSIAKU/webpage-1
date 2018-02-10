import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const defaultSrc = "../../public/images/defaultArticleImage.png";
const defaultAlt = "poster image not available";
const ArticleCard = ({
  articleId, title, year, src, alt }) => {
  if (src && !alt) {
    throw new Error("In <Article/> : alt property is not set while src property is found");
  }
  return (
    <article id={articleId}>
      <div className="card-img-container">
        <img
          className="img-fluid"
          src={src ? src : defaultSrc}
          alt={alt ? alt : defaultAlt} />
      </div>
      <header><h3 className="article-title py-2">{title}</h3></header>
      <footer className="d-flex justify-content-around">
        <p>{year}</p>
        <p>{year}</p>
      </footer>
    </article>
  );
};

ArticleCard.propTypes = {
  articleId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default ArticleCard; 
