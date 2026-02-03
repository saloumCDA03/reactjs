/*
Exercice 4 : Synchronisation du titre du document
Objectif :
Modifier le titre de la page (document.title) en fonction d'un compteur.

Instructions :

Créez un composant avec un compteur.
Utilisez useEffect pour mettre à jour document.title chaque fois que le compteur change.
*/

import { useState, useEffect } from "react";

function Exercice4() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Compteur : ${count}`;
    }, [count]); // Se déclenche à chaque changement de "count"

    return (
        <div>
            <p>Compteur : {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrémenter</button>
        </div>
    );
}

export default Exercice4;