// src/components/Footer.js

import React from "react";
import "./Footer.css";
import img from "../images/Esyclick logo 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgVisa from "../images/image 30.png";
import imgVisa2 from "../images/image 31.png";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faCcVisa,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const catalogLinks = [
  { id: 1, title: "Nacklaces", url: "/category1" },
  { id: 2, title: "Hoodies", url: "/category2" },
  { id: 3, title: "Jewelery Box", url: "/category3" },
  { id: 3, title: "T-Shirt", url: "/category4" },
  { id: 3, title: "Jacket", url: "/category5" },
];
const aboutUs = [
  { id: 1, title: "FAQ", url: "/category1" },
  { id: 2, title: "About Us", url: "/category2" },
  { id: 3, title: "Term & Conditions", url: "/category3" },
];
const custServices = [
  { id: 1, title: "Constact us", url: "/category1" },
  { id: 2, title: "Track Your Order", url: "/category2" },
  { id: 3, title: "Product Care & Repair", url: "/category3" },
  { id: 3, title: "Book an Appointment", url: "/category4" },
  { id: 3, title: "Shipping & Return", url: "/category5" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="logo1">
            <img src={img} alt="Logo" />
          </div>
          <div className="col-md-6">
            <div className="text1">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                quos modi, vel porro nihil temporibus quisquam consectetur
                facere doloribus provident!
              </p>
            </div>
            <div className="social-media">
              <FontAwesomeIcon icon={faFacebook} className="icon1" />
              <FontAwesomeIcon icon={faTwitter} className="icon1" />
              <FontAwesomeIcon icon={faLinkedin} className="icon1" />
              <FontAwesomeIcon icon={faInstagram} className="icon1" />
            </div>
            <div className="visa">
              <div className="heading1">
                <h4>WE ACCEPT HERE</h4>
              </div>
              <div>
                <span>
                  <img src={imgVisa} alt="visaImg" className="icon1" />
                </span>
                <img src={imgVisa2} alt="visaImg" className="icon1" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row adjustingCol">
              <div className="col-md-4">
                <div className="catalog-links">
                  <h6>CATALOG</h6>
                  <p>
                    {catalogLinks.map((link) => (
                      <p key={link.id}>
                        <a href={link.url}>{link.title}</a>
                      </p>
                    ))}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="catalog-links">
                  <h6>ABOUT US</h6>
                  <p>
                    {aboutUs.map((link) => (
                      <p key={link.id}>
                        <a href={link.url}>{link.title}</a>
                      </p>
                    ))}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="catalog-links">
                  <h6>CUSTOMER SERVICES</h6>
                  <p>
                    {custServices.map((link) => (
                      <p key={link.id}>
                        <a href={link.url}>{link.title}</a>
                      </p>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
