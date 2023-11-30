// ColorPicker.js

import React, { useState } from "react";

const ColorPicker = ({ onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onColorSelect(color);
  };

  const colorButtonStyle = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "2px solid #fff",
    margin: "0 5px",
    cursor: "pointer",
  };

  const selectedButtonStyle = {
    border: "2px solid black",
  };

  return (
    <div>
      <h4>Select Color:</h4>
      <button
        onClick={() => handleColorSelect("skyblue")}
        style={{
          ...colorButtonStyle,
          backgroundColor: "skyblue",
          ...(selectedColor === "skyblue" && selectedButtonStyle),
        }}
      />
      <button
        onClick={() => handleColorSelect("pink")}
        style={{
          ...colorButtonStyle,
          backgroundColor: "pink",
          ...(selectedColor === "pink" && selectedButtonStyle),
        }}
      />
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
};

export default ColorPicker;
