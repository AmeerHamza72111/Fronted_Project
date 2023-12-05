import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Card = ({ product }) => {
  const { id, name, image, rating, price, text1, text2 } = product;
  const navigate = useNavigate();

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }
    return stars;
  };

  return (
    <div key={id} className="card card-list">
      <img src={image} alt={name} className="card-image" />
      <div className="card-details">
        <div className="name-rating-container">
          <p className="nameClass">
            <span>{name}</span>
          </p>
          <p className="rating">{renderStars()}</p>
        </div>
        <p className="txt1">{text1}</p>
        <p className="txt2">{text2}</p>
        <div className="name-rating-container">
          <p className="price">
            <span>${price}</span>
          </p>

          <button
            className="shop-now-button"
            onClick={() => {
              // onProductClick(product);
              navigate(`/product/${id}`, {
                state: {
                  product,
                },
              });
            }}
          >
            <FontAwesomeIcon icon={faBagShopping} className="icon" />
            Shop Now
          </button>
          {/* 
          <Link to={`/product/${id}`} >
            <FontAwesomeIcon icon={faBagShopping} className="icon" />
            Shop Now
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
