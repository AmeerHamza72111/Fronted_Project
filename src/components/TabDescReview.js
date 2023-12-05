// TabDescReview.js
import React, { useState } from "react";
import "./TabDescReview.css";
import WriteReview from "./WriteReview";
import Accordian from "./Accordian";
import Footer from "./Footer";

const TabDescReview = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 4,
      progress: 90,
      review:
        "Great quality and stylish design. The bag exceeded my expectations!",
      profilePhoto: "https://placekitten.com/50/50",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 5,
      progress: 100,
      review:
        "Absolutely love it! The leather is so soft, and the bag is very spacious.",
      profilePhoto: "https://placekitten.com/51/51",
    },
  ];
  const renderStars = (review) => {
    const stars = [];
    for (let i = 0; i < review.rating; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }

    console.log(stars);
    return stars;
  };
  return (
    <>
      <div className="tabs-container mt-5">
        <div className="tabs">
          <div
            className={`tab ${activeTab === "description" ? "active" : ""}`}
            onClick={() => handleTabChange("description")}
          >
            Description
          </div>

          <div
            className={`tab ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => handleTabChange("reviews")}
          >
            Reviews
          </div>
        </div>
      </div>
      <div className="tab-content mt-2">
        {activeTab === "description" && (
          <div className="">
            <h5>Description Tab Content</h5>
            <p>
              Introducing our premium leather messenger bag, a stylish and
              functional accessory designed to complement your modern lifestyle.
              Crafted with meticulous attention to detail, this bag seamlessly
              blends fashion and functionality, making it the perfect companion
              for your everyday adventures.
            </p>
            <h6>Key Features:</h6>
            <ul>
              <li>
                <strong>Luxurious Genuine Leather:</strong> Our messenger bag is
                made from high-quality, full-grain leather that not only exudes
                sophistication but also ensures durability and longevity.
              </li>
              <li>
                <strong>Spacious Interior:</strong> The thoughtfully designed
                interior offers ample space to accommodate your essentials.
                Whether you're heading to the office, a coffee shop, or a
                weekend getaway, this bag can effortlessly carry your laptop,
                notebooks, and other daily necessities.
              </li>
              <li>
                <strong>Versatile Design:</strong> The versatile design makes it
                suitable for various occasions. Carry it as a crossbody bag for
                a casual day out or remove the shoulder strap to transform it
                into a sleek hand-held briefcase for more formal settings.
              </li>
              <li>
                <strong>Secure and Organized:</strong> Stay organized with
                multiple compartments, including a padded laptop sleeve,
                zippered pockets, and dedicated spaces for your phone, pens, and
                cards. The secure closures ensure that your belongings are
                safely tucked away.
              </li>
              <li>
                <strong>Adjustable Shoulder Strap:</strong> The adjustable and
                detachable shoulder strap provides customizable comfort,
                allowing you to carry the bag in a way that suits your
                preference.
              </li>
            </ul>
            <h6>Dimensions:</h6>
            <p>
              <strong>Width:</strong> 14 inches
              <br />
              <strong>Height:</strong> 10 inches
              <br />
              <strong>Depth:</strong> 4 inches
            </p>
            <h6>Care Instructions:</h6>
            <p>
              To maintain the beauty of your leather messenger bag, simply wipe
              it clean with a soft, damp cloth. Avoid exposure to extreme
              temperatures and prolonged sunlight.
            </p>
            <p>
              Elevate your style and stay organized with our Elegant Leather
              Messenger Bag. It's not just a bag; it's a statement of
              sophistication.
            </p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="">
            <div className="row">
              <div className="col-md-7">
                <h5>Customer Feedback</h5>
                {reviews.map((review) => (
                  <div key={review.id} className="review-container">
                    <div className="profile">
                      <img
                        src={review.profilePhoto}
                        alt={`Profile of ${review.name}`}
                      />
                      <span>{review.name}</span>
                    </div>
                    <div className="rating-progress">
                      <div className="rating">
                        <p className="rating1">{renderStars(review)}</p>
                      </div>
                      <div className="progress-bar">
                        <div style={{ width: `${review.progress}%` }}></div>
                      </div>
                      <span>{review.progress}%</span>
                    </div>
                    <p>{review.review}</p>
                  </div>
                ))}
                <div className="more-reviews">
                  <button>View All reviews</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <WriteReview />
      <Accordian />
      <Footer />
    </>
  );
};

export default TabDescReview;
