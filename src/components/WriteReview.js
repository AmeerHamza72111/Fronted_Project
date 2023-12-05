// WriteReview.js
import React, { useState } from "react";
import "./WriteReview.css"; // Create a corresponding CSS file for styling

const WriteReview = () => {
  const [rating, setRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    // Implement your submission logic here
    console.log("Rating:", rating);
    console.log("Review Title:", reviewTitle);
    console.log("Review Content:", reviewContent);
    // You may want to send this data to your backend or perform other actions
  };

  return (
    <div className="write-review-container">
      <h3>Write a Review</h3>

      <div className="write-review-form">
        <div className="form-group">
          <label htmlFor="likeProducts">
            What do you like about the product?
          </label>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${rating >= star ? "filled" : ""}`}
                onClick={() => handleRatingChange(star)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="reviewTitle">Review Title</label>
          <input
            type="text"
            id="reviewTitle"
            className="form-control"
            placeholder="Summarize your review in a few words"
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="reviewContent">Review Content</label>
          <textarea
            id="reviewContent"
            className="form-control"
            rows="4"
            placeholder="Share your detailed thoughts on the product"
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default WriteReview;
