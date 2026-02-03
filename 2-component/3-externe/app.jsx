// Importation des bibliothèques et composants nécessaires
import React from "react"; // Importation de la bibliothèque React
import MonComposant from "./MonComposant"; // Importation du composant fonctionnel MonComposant
import MonComposantClass from "./MonComposantClass"; // Importation du composant de classe MonComposantClass

// Définition du composant principal App
function App() {
  return (
    // Utilisation de la syntaxe courte des Fragments pour regrouper les composants
    <>
      {/* Rendu du composant fonctionnel MonComposant*/}
      <MonComposant />
      {/* Rendu du composant de classe MonComposantClass */}
      <MonComposantClass />
    </>
  );
}

// Exportation du composant App pour qu'il puisse être utilisé dans d'autres parties de l'application
export default App;
