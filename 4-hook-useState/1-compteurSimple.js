/*
Gestion des événements onClick dans React
Dans React, la gestion des événements est très similaire à celle des éléments DOM, mais avec quelques différences syntaxiques. 
Par exemple, les événements React sont nommés en camelCase plutôt qu'en minuscules.

Au lieu d'utiliser une chaîne de caractères comme gestionnaire d'événements, 
comme c'est le cas en HTML pur, avec JSX, vous passez une fonction.
        <button onClick={() => this.uneFonction()}></button> 
*/

/*
Compteur Basique :

Concevez un composant fonctionnel qui montre un chiffre (commençant à 0 grâce au Hook useState).
Intégrez un bouton intitulé "Ajouter" qui, à chaque pression, augmente le chiffre du compteur de 1 en utilisant setCompteur (ou tout autre nom que vous attribuez à la fonction de mise à jour du Hook useState).
créer un compteur simple en utilisant React Native et les Hooks de React.

 
Créez un composant fonctionnel.
À l'intérieur de ce composant, initialisez l'état du compteur à 0 en utilisant le Hook useState.
Affichez la valeur actuelle du compteur à l'écran.
Ajoutez un bouton avec le titre "Incrémenter".
Lorsque ce bouton est cliqué, il devrait augmenter la valeur du compteur de 1. Pour ce faire, utilisez la fonction de mise à jour fournie par le Hook useState.
Assurez-vous que votre composant est le composant par défaut de l'application.
*/
import React, { useState } from "react";

function CounterComponent() {
  // Initialisation de l'état "count" à 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p> {/* Affichage de la valeur actuelle du compteur */}
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>{" "}
      {/* Bouton pour incrémenter le compteur */}
    </div>
  );
}

export default CounterComponent;
