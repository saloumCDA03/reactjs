/*
Exercice 2 : Affichage et mise à jour d'un compteur
Objectif :
Utiliser useEffect pour surveiller un state (compteur) et afficher sa valeur dans la console à chaque changement.

Instructions :

Créez un composant avec un compteur initialisé à 0.
Ajoutez un bouton pour incrémenter le compteur.
Utilisez useEffect avec le compteur comme dépendance pour afficher sa nouvelle valeur à chaque mise à jour.

******************
dans ce cas précis, on pourrait obtenir un résultat similaire sans utiliser useEffect. 
Cependant, l'utilisation de useEffect dans cet exemple illustre des concepts importants :
    Séparation des préoccupations :
         useEffect permet de séparer la logique de rendu (ce qui est affiché) de la logique des effets secondaires (comme la journalisation).
        Contrôle précis de l'exécution : on peut contrôler exactement quand le log se produit (après le rendu et seulement quand count change).
        Préparation pour des cas plus complexes :cette structure prépare à des scénarios plus complexes où useEffect devient essentiel.
*/
import { useState, useEffect } from "react";

function Exercice2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Le compteur est maintenant : ${count}`);
    }, [count]); // L'effet se déclenche lorsque "count" change

    return (
        <div>
            <p>Compteur : {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrémenter</button>
        </div>
    );
}

export default Exercice2;
