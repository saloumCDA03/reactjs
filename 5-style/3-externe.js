/**

Créez un composant simple, comme un bouton .
Créez un fichier CSS externe pour ce composant.
Utilisez des sélecteurs CSS pour appliquer des styles spécifiques à ce composant.
Importez le fichier CSS dans votre composant React et appliquez-le.
 */

// .my-button {
//     background-color: blue;
//     color: white;
//     padding: 10px 20px;
//     border: none;
//     border-radius: 5px;
//   }

import React from "react";
import "./my-button.css";

const MyButtonExt = () => {
  return (
    <div>
      <button className="my-button">Click me</button>
    </div>
  );
};

export default MyButtonExt;
