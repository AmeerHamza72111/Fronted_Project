import React, { useState } from "react";
import "../components/CartButton.css";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import Card from "./Card";

const CartButton = ({ handleBuyNow }) => {
  const [quantity, setQuantity] = useState(0);
  const [liked, setLiked] = useState(false);
  // const { id, name, image, rating, price, text1, text2 } = product;
  const navigate = useNavigate();

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div style={styles.container}>
      <div style={styles.cartButton}>
        <button onClick={handleDecrement} style={styles.button1}>
          -
        </button>
        <div style={styles.quantity}>{quantity}</div>
        <button onClick={handleIncrement} style={styles.button2}>
          +
        </button>
      </div>
      <button onClick={handleBuyNow} style={styles.buyNowButton}>
        Buy Now
      </button>
      <div
        className={`like-button ${liked ? "liked" : ""}`}
        onClick={toggleLike}
      >
        <span className="heart-icon">💟</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  cartButton: {
    display: "flex",
    alignItems: "center",
    width: "120px",
    height: "40px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    position: "relative",
  },
  button1: {
    width: "40px",
    height: "100%",
    border: "1px solid #ccc",
    background: "none",
    cursor: "pointer",
    fontSize: "20px",
  },
  button2: {
    width: "40px",
    height: "100%",
    border: "none",
    background: "rgba(163, 60, 90, 1)",
    cursor: "pointer",
    fontSize: "20px",
    color: "white",
  },
  quantity: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "16px",
  },
  buyNowButton: {
    height: "40px",
    background: "rgba(163, 60, 90, 1)",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "120px",
  },
};

export default CartButton;
