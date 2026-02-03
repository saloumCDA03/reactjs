import React, { useState } from "react";
import MyButton from "./MyButton";
const MyParent = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <MyButton isActive={isActive} />
      <br />
      <button onClick={toggleActive}>
        {isActive ? "Désactiver" : "Activer"}
      </button>
    </div>
  );
};

export default MyParent;
