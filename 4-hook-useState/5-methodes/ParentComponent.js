import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const handleClick = () => {
    console.log("Button clicked in ParentComponent");
  };

  return (
    <div>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
