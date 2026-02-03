/*
Faites un nouveau composant appelé Boite.
Dans votre composant App, placez le composant Boite comme une balise, 
semblable à  une balise HTML , et écrivez un texte entre ces balises.
<Boite>blabla</Boite>
Observez le résultat. Qu'est-ce que vous voyez à l'écran?
inspectez le code avec react developer tools
*/
import React from "react";

const Boite = ({ children }) => {
  return <div className="boite">{children}</div>;
};

export default Boite;
