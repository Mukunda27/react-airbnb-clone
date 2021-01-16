import React from "react";
import "./card.scss";

const Card = ({ placeInfo }) => {
  return (
    <div className="place-card">
      <div className="card__img">
        <img className="img-fluid" src={placeInfo.imgSrc} alt="place" />
      </div>
      <div className="card__desc p-4">
        <div className="card__infoTitle mb-2">{placeInfo.title}</div>
        <div className="card__infoDesc">{placeInfo.desc}</div>
      </div>
    </div>
  );
};

export default Card;
