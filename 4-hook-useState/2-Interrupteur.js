/*
2. Interrupteur On/Off :
Créez un composant fonctionnel qui affiche "Off" initialement (initialisé avec le Hook useState).
Ajoutez un bouton qui, lorsqu'il est cliqué, change l'affichage entre "On" et "Off" en utilisant setToggle (ou le nom que vous donnez à la fonction de mise à jour du Hook useState).
*/
import React, { useState } from "react";

// Définition du composant fonctionnel Toggle
function Toggle() {
  // Utilisation du Hook useState pour initialiser l'état "toggle" à false
  // "toggle" représente l'état actuel (On/Off)
  // "setToggle" est la fonction qui permet de mettre à jour cet état
  const [toggle, setToggle] = useState(false);

  // Fonction pour gérer le clic sur le bouton
  // Elle inverse l'état actuel de "toggle" à chaque appel
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      {/* Bouton qui, lorsqu'il est cliqué, appelle la fonction handleClick */}
      <button onClick={handleClick}>Toggle</button>

      {/* Affichage conditionnel de l'état actuel :
           Si "toggle" est vrai, affiche "On", sinon affiche "Off" */}
      <p>{toggle ? "On" : "Off"}</p>
    </div>
  );
}

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default Toggle;
