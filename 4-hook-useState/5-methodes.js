/**
 Pour passer des méthodes entre les composants, nous pouvons utiliser les Hooks. 
 Les Hooks sont une fonctionnalité ajoutée à React 16.8 qui permet d'utiliser l'état et d'autres fonctionnalités .
 */

/**
Créez un composant ParentComponent qui contient une méthode handleClick qui affiche un message dans la console lorsque le bouton est cliqué.
Créez un composant ChildComponent qui affiche un bouton.
Passez la méthode handleClick en tant que prop à ChildComponent.
Utilisez la méthode handleClick en tant que gestionnaire d'événements pour le bouton dans ChildComponent.
Lorsque vous cliquez sur le bouton dans ChildComponent, la méthode handleClick dans ParentComponent sera appelée et le message sera affiché dans la console.  
   
  * */
// ParentComponent.js
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const handleClick = () => {
    console.log("Button clické dans ParentComponent");
  };

  return (
    <div>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
-------------------
// ChildComponent.js
import React from "react";

const ChildComponent = ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ChildComponent;