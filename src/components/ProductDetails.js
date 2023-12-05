import React, { useState } from "react";
import "./ProductDetails.css";
import img1 from "../images/Images.jpg";
import img2 from "../images/newimg1.jpg";
import img3 from "../images/image 63.jpg";
import img4 from "../images/image 631.jpg";
import { useLocation } from "react-router-dom";
import ColorPicker from "./ColorPicker";
import CartButton from "./CartButton";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle, faTruck } from "@fortawesome/free-solid-svg-icons";
import TabDescReview from "./TabDescReview";

const ProductDetails = () => {
  const location = useLocation();
  const [bigImage, setBigImage] = useState(location.state.product.image);

  const changeBigImage = (newImage) => {
    setBigImage(newImage);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < location.state.product.rating; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }
    return stars;
  };

  const handleColorSelect = (color) => {
    console.log(`Product ordered with color: ${color}`);
  };

  return (
    <>
      <Header />
      <div className="mt-5">
        <div className="flexClass">
          <div className="thumbnail-container">
            <img
              src={location.state.product.image}
              className="thumbnail"
              onClick={() => changeBigImage(location.state.product.image)}
              alt="Thumbnail 1"
            />
            <img
              src={img2}
              className="thumbnail"
              onClick={() => changeBigImage(img2)}
              alt="Thumbnail 2"
            />
            <img
              src={img3}
              className="thumbnail"
              onClick={() => changeBigImage(img3)}
              alt="Thumbnail 3"
            />
            <img
              src={img4}
              className="thumbnail"
              onClick={() => changeBigImage(img4)}
              alt="Thumbnail 4"
            />
          </div>

          <div className="bigImgClass">
            <img
              id="bigImage"
              src={bigImage}
              className="big-image"
              alt="Big Image"
            />
          </div>

          <div className="">
            <div className="prodDetailwidth">
              <div key={location.state.product.id}>
                <div className="nameClass1">
                  <p className="">{location.state.product.name}</p>
                </div>
                <div>
                  <p className="rating1">{renderStars()}</p>
                  <p className="">{location.state.product.text2}</p>
                  <p className="">{location.state.product.text1}</p>
                </div>
                <div>
                  <p className="price">${location.state.product.price}</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, sapiente.
                  </p>
                </div>
              </div>
              <ColorPicker onColorSelect={handleColorSelect} />
              <CartButton />
              <div className="search-buttons-container mt-5">
                <div className="search-button2">
                  <FontAwesomeIcon
                    icon={faTruck}
                    style={{ color: "#aa3147" }}
                    className="icon2"
                  />
                  <div className="text-container">
                    <p className="textbold">Free Delivery</p>
                    <p className="textsize1">
                      Enter Your Postal code for Delivery Availability
                    </p>
                  </div>
                </div>
                <div className="search-button2">
                  <FontAwesomeIcon
                    icon={faRecycle}
                    style={{ color: "#aa3147" }}
                    className="icon2"
                  />

                  <div className="text-container">
                    <p className="textbold">Return Delivery</p>
                    <p className="textsize1">
                      Free 30 day Delivery Returns. Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TabDescReview />
    </>
  );
};

export default ProductDetails;
