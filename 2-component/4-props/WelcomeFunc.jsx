// Importation de la bibliothèque React pour pouvoir utiliser ses fonctionnalités
import React from "react";

// Définition d'un composant fonctionnel nommé "WelcomeFunc"
function WelcomeFunc(props) {
  // Affichage des props dans la console
  console.log(props);
  // Retourne un élément h1 qui affiche un message de bienvenue en utilisant la prop "name" passée au composant
  return <h1>Bonjour, {props.name}</h1>;
}

// Exportation du composant WelcomeFunc pour qu'il puisse être utilisé dans d'autres fichiers
export default WelcomeFunc;
