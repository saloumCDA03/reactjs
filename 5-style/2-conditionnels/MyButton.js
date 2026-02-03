import React from "react";

const MyButton = ({ isActive }) => {
  const buttonStyle = {
    backgroundColor: isActive ? "green" : "gray",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
  };

  return <button style={buttonStyle}>Bouton</button>;
};

export default MyButton;
