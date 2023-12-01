import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ image, name, title, rating, classNamex, id }) => {
  return (
    <div className={`card ${classNamex}`}>
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-name">{name}</h2>
        <p className="card-title">{title}</p>
        <p className="card-rating">Rating: {rating}</p>
        <Link to={`/product?id=${id}`}>
          <button className="card-button">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
