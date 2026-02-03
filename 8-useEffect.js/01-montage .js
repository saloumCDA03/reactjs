/*
Exercice 1 : Message de montage dans la console
Objectif :
Afficher un message dans la console une seule fois, lors du montage du composant.

Instructions :

Créez un composant fonctionnel.
Utilisez useEffect avec un tableau de dépendances vide pour afficher un message ("Composant monté") dans la console après le premier rendu.
*/
import React, { useEffect } from "react";

function Exercice1() {
    useEffect(() => {
        console.log("Composant monté");
    }, []); // L'effet s'exécute une seule fois

    return <div>Regardez la console pour le message de montage.</div>;
}

export default Exercice1;



