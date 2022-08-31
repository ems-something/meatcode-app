import React, { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import "./styles.css";

function Article({ artInfo }) {
  const { category, title, image, content, url, createdAt, id } = artInfo;
  let [_category, setCategory] = useState(category);
  const [loaded, setLoaded] = useState(true);
  const [_img, setImg] = useState();

  return (
    <article className="card-container" id={id}>
      <div className="car-container__img-container">
        <img
          className="card-container__img"
          src={image}
          onLoad={() => setLoaded(false)}
        />
        {loaded ? (
          <div className="article-container__loader">
            
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="card-container__text">
        <header className="card-container__header">
          <h3>{title}</h3>
        </header>
        <p>{content}</p>
      </div>
      <a className="card-container__see-more" href={url} target="_blank">
        VER MÁS
      </a>
    </article>
  );
}

export default Article;
