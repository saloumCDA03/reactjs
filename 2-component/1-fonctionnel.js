/*
COURS:
Un composant est une partie de l'interface utilisateur qui peut être réutilisée dans différentes parties de l'application. 
Les composants peuvent être des éléments simples comme des boutons ou des champs de texte, 
ou des éléments plus complexes comme des formulaires ou des tableaux. 

Les composants fonctionnels sont la manière la plus simple de créer un composant React. 
Ils sont appelés ainsi parce qu'ils sont littéralement des fonctions JavaScript.
exemple:
        const MonComposant = ( ) => {
        return <p>coucou, !</p>;
        } 

pour l'utiliser dans App.js:
        function App() {
        return <MonComposant />  ;
        }
Dans cet exemple, MonComposant commence par une majuscule,
 la majuscule est obligatoire pour les noms de composants.    
 React considère les composants commençant par des lettres minuscules comme des balises DOM. 
 Par exemple, <div /> représente une balise HTML div, mais <Welcome /> représente un composant, et exige que l’identifiant Welcome existe dans la portée courante."   
*/

/*

Exercice : Création d'un Composant avec Vite
Objectif : Créer un composant fonctionnel qui affiche le message "Bonjour !" à l'écran.

Étapes :
Créer un projet avec Vite 

Ouvrez src/App.js dans votre éditeur de code.
Définissez un composant fonctionnel appelé MonComposant qui retourne dans un h1: Bonjour ! 

utilisez le composant MonComposant pour afficher le message à l'écran.
*/

import React from "react";

const MonComposant = () => {
  return <h1>Hello, !</h1>;
};

function App() {
  return <MonComposant />;
}

export default App;
