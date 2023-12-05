import React from "react";
import "./Heading1.css";
import NewArrivals from "./NewArrivals";

const Heading1 = (props) => {
  let txt1 = "Planners And Kits";
  return (
    <div className="container1">
      <h1 className="heading">{props.txt1}</h1>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae earum
        vitae ex qui praesentium nihil maiores facilis id corrupti inventore?
      </p>
    </div>
  );
};

export default Heading1;
