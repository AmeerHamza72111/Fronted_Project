// Accordion.js
import React, { useState } from "react";
import "./Accordian.css"; // Create a corresponding CSS file for styling
import { CardList } from "../Pages/PlannersAndKits";

const Accordian = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="accordion-container">
        <div
          className={`accordion-header ${isOpen ? "open" : ""}`}
          onClick={toggleAccordion}
        >
          <span className="accordion-title">Other Information</span>
          <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && (
          <div className="accordion-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              reiciendis cupiditate eaque temporibus ea cum, ab omnis ratione
              repellendus eum! Blanditiis libero odio voluptatum mollitia at
              repudiandae aspernatur repellat nostrum fugiat est, maxime ipsum
              magnam impedit modi officiis maiores itaque voluptas laborum vitae
              molestiae sed. Saepe quibusdam neque ducimus enim?
            </p>
          </div>
        )}
      </div>
      <p className="textRelatedItems">Related Items</p>
      <CardList isoldArv={true} />
    </div>
  );
};

export default Accordian;
