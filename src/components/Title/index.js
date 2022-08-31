import React from "react";
import "./styles.css";
import brush from "../../assets/img/BRUSH-3 2.png";

function Title({ title = "no title" }) {
  return (
    <div className="title-flex-container">
      <div className="title-container">
        <img className="title-container__img" src={brush} alt="brush" />
        <h2 className="title-container__text">{title}</h2>
      </div>
    </div>
  );
}

export default Title;