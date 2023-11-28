// Header.js
import React from "react";
import "./Header.css";
import img from "../images/Esyclick logo 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Header2 from "./Header2";

const Header = () => {
  return (
    <>
      <div className="">
        <div className="header-container container">
          <div className="search-icon">
            <button className="search-button">
              <FontAwesomeIcon icon={faSearch} className="icon" />
            </button>
          </div>

          <div className="logo">
            <img src={img} alt="Logo" />
          </div>
          <div className="header-icons">
            {/* Account Button */}
            <button className="search-button">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "#aa3147" }}
                className="icon"
              />
              Account
            </button>

            {/* Shopping Button */}
            <button className="search-button">
              <FontAwesomeIcon
                icon={faBagShopping}
                style={{ color: "#aa314b" }}
                className="icon"
              />
              Shopping
            </button>
          </div>
        </div>
      </div>
      <Header2 />
    </>
  );
};

export default Header;
