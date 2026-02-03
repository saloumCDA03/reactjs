/*
COURS:
Un composant est une partie de l'interface utilisateur qui peut être réutilisée dans différentes parties de l'application. 
Les composants peuvent être des éléments simples comme des boutons ou des champs de texte, 
ou des éléments plus complexes comme des formulaires ou des tableaux. 

Contrairement aux composants fonctionnels, les composants de classe sont définis en utilisant la syntaxe de classe ES6.
Avant l'introduction des Hooks dans React 16.8, les composants de classe étaient le principal moyen de gérer l'état et le cycle de vie des composants.

Voici un exemple de composant de classe qui affiche le message "Bonjour !" à l'écran :

*/
// Importation de la bibliothèque React depuis le module 'react'.
import React from "react";

// Définition d'un composant de classe nommé 'MonComposantClass'.
// Ce composant étend la classe 'Component' de React, ce qui signifie qu'il hérite de toutes ses fonctionnalités.
class MonComposantClass extends React.Component {
  // La méthode 'render' est obligatoire pour tous les composants React.
  // Elle détermine ce qui sera affiché à l'écran lorsque le composant est utilisé.
  render() {
    // Retourne un élément JSX (ici, une balise <h1>) qui sera rendu à l'écran.
    // Lorsque ce composant est utilisé, il affichera "Bonjour !" dans un en-tête de niveau 1.
    return <h1>Bonjour !</h1>;
  }
}
/*
Exercice : Création d'un Composant de Class

reprenez l'exercice 1 
Définissez un composant de classe appelé MonComposantClass qui retourne un texte dans un <p> 
Utilisez le composant MonComposantClass pour afficher le message à l'écran sous le h1.

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
chaque composant React retourne un seul élément parent, il faut donc envelopper tous les éléments enfants dans un conteneur unique, 
que ce soit un élément DOM comme <div></div>, ou utiliser des Fragments de React <></> pour éviter d'ajouter des nœuds supplémentaires au DOM. 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
*/

import React from "react";

const MonComposant = () => {
  return <h1>Hello,fonctionnel !</h1>;
};

class MonComposantClass extends React.Component {
  render() {
    return <p>MonComposantClass.</p>;
  }
}
function App() {
  return (
    <>
      <MonComposant />
      <MonComposantClass />
    </>
  );
}

export default App;
