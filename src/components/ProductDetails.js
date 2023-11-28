// src/components/ProductDetails.js
import React, { useState } from "react";
import "./ProductDetails.css";

const ProductDetails = () => {
  const product = {
    name: "Product Name",
    rating: 4.5,
    price: "$49.99",
    colors: ["Red", "Green", "Blue"],
  };

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleColorChange = (color) => {
    // Implement color change logic here
  };

  const handleQuantityChange = (value) => {
    setQuantity(Math.max(1, quantity + value));
  };

  const handleBuyNowClick = () => {
    // Implement Buy Now logic here
    console.log(`Buy Now - Product: ${product.name}, Quantity: ${quantity}`);
  };

  return (
    <div className="product-details">
      <div className="image-column">
        {[1, 2, 3].map((index) => (
          <img
            key={index}
            // src={require(`../images/Images${index}.jpg`).default}
            alt={`Product ${index}`}
            className={index === selectedImage ? "selected" : ""}
            onClick={() => handleImageClick(index - 1)}
          />
        ))}
      </div>
      <div className="main-column">
        <img
          src={require(`../images/Images${selectedImage + 1}.jpg`).default}
          alt={`Product ${selectedImage + 1}`}
          className="big-image"
        />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>Rating: {product.rating}</p>
          <p>Price: {product.price}</p>
          <div className="color-chooser">
            {product.colors.map((color) => (
              <div
                key={color}
                className={`color ${color === "Red" ? "selected" : ""}`}
                onClick={() => handleColorChange(color)}
              >
                {color}
              </div>
            ))}
          </div>
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
          <button className="buy-now-button" onClick={handleBuyNowClick}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
