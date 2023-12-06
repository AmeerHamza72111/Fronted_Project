import { useState } from "react";
import "./CartItem.css";
import Header from "./Header";

const CartItem = () => {
  const [items, setItems] = useState(function () {
    const data = JSON.parse(localStorage.getItem("cardItem"));
    console.log(data);
    return data;
  });

  // Calculate subtotal for the product
  const subtotal = items.price * 1;

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="headingClass">
          <h3 className="product-name">Product</h3>
          <h3 className="product-name">Name</h3>
          <h3 className="product-name">Price</h3>
          <h3 className="product-name">Rating</h3>
          <h3 className="product-name">Brand</h3>
          <h3 className="product-name">Reviews</h3>
          <h3 className="product-name">Total</h3>
        </div>
        {items.map((item, index) => (
          <div className="cart-item">
            <div className="product-info">
              <div className="product-details">
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
                <p className="product-name">{item.name}</p>
                <p className="product-price">{item.price}</p>
                <p className="product-quantity">{item.rating}</p>
                <p className="product-quantity">{item.text1}</p>
                <p className="product-quantity">{item.text2}</p>
                <p className="subtotal">{subtotal}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
