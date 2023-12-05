import "./CartItem.css";
import { useLocation } from "react-router-dom";

const CartItem = () => {
  //   const location = useLocation();
  //   // Calculate subtotal for the product
  //   const subtotal = location.state.product.price * 1;

  return (
    <div className="cart-item">
      {/* <div className="product-info">
        <img
          src={location.state.product.image}
          alt={location.state.product.name}
          className="product-image"
        />
        <div className="product-details">
          <p className="product-name">{location.state.product.name}</p>
          <p className="product-price">
            Price: ${location.state.product.price}
          </p>
          <p className="product-quantity">
            Quantity: {location.state.product.quantity}
          </p>
        </div>
      </div>
      <p className="subtotal">Subtotal: ${subtotal}</p> */}
    </div>
  );
};

export default CartItem;
