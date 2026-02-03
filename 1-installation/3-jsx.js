/*      COURS       */
/*
La méthode createElement est une fonction fondamentale de la bibliothèque React. 
Elle est utilisée pour créer et renvoyer des éléments React, 
qui sont les plus petites unités de construction des interfaces utilisateur React.

Syntaxe de createElement :
React.createElement(type, [props], [...children])
    type :  élément que vous souhaitez créer. 
            Cela peut être une chaîne (pour les éléments DOM comme 'div', 'span', etc.) 

    props : Un objet contenant les propriétés (ou "props") que vous souhaitez passer à l'élément. 
            Cela peut inclure des attributs comme className ou id pour les éléments DOM, 

    children : Les éléments enfants qui doivent être imbriqués à l'intérieur de l'élément créé. 
            Cela peut être du texte, d'autres éléments React, ou un mélange des deux.
*/

/**
 * Exercice : Créer un titre 
Objectif : Utilisez React.createElement pour créer un titre (h1)  

Étapes :
Modification de App.jsx :
Ouvrez src/App.jsx dans votre éditeur de code.
Remplacez le contenu du return du composant App pour utiliser React.createElement au lieu de JSX.

importation de React: import React from 'react';

function App() {
  return React.createElement('h1', null, 'Bienvenue à React !');
}

export default App;
Vérification :
Assurez-vous que votre serveur de développement est en cours d'exécution avec npm start.
Ouvrez votre navigateur et vous devriez voir le titre et le paragraphe que vous avez créés avec createElement.
Cet exercice vous donne une idée de base de la façon dont createElement fonctionne. 
Bien sûr, pour des applications plus complexes, vous utiliserez probablement JSX pour sa lisibilité et sa simplicité, mais comprendre createElement vous donne une idée de ce qui se passe sous le capot de React.
 */

