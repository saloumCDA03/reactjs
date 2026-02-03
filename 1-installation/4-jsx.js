/**
 * 
JSX est une extension de syntaxe pour JavaScript, 
recommandée par React pour décrire à quoi devrait ressembler l'interface utilisateur. 
Il ressemble à du HTML, mais il est intégré directement dans du JavaScript.
Un élément JSX ressemble à une balise HTML.

 */

/* 
Exercice : Créer un titre avec JSX
Objectif : Utilisez JSX pour créer un titre (h1) .

Étapes :
Dans la fonction App, retournez le JSX suivant :
<h1>Bienvenue à React !</h1>


import React from "react";

function App() {
  return (
    <div>
      {React.createElement("h1", null, "Bienvenue à React createElement !")}
      <h1>Bienvenue à React !</h1>
    </div>
  );
}

export default App;
*/
