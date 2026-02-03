/*
Exercice 3 : Timer avec nettoyage
Objectif :
Créer un timer qui incrémente une valeur toutes les secondes et nettoyer cet intervalle lors du démontage du composant.

Instructions :

Créez un composant avec un état pour le temps (initialisé à 0).
Utilisez useEffect pour démarrer un intervalle qui incrémente ce temps toutes les secondes.
Retournez une fonction de nettoyage qui efface l'intervalle.
*/

import React, { useState, useEffect } from "react";

function Exercice3() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        // Nettoyage lors du démontage
        return () => clearInterval(interval);
    }, []); // S'exécute une seule fois

    return <div>Temps écoulé : {seconds} secondes</div>;
}

export default Exercice3;
/*
Sans useEffect, le code aurait plusieurs problèmes: 
    Création d'intervalles multiples : 
        À chaque rendu du composant, un nouvel intervalle serait créé avec setInterval, sans nettoyer les précédents. 
        Cela entraînerait de multiples intervalles s'exécutant simultanément, augmentant le compteur plus rapidement que prévu.
    Fuites de mémoire : 
        Sans la fonction de nettoyage fournie par useEffect, les intervalles continueraient de s'exécuter même après le démontage du composant, 
        causant des fuites de mémoire.
    Mises à jour d'état excessives : 
        Les mises à jour fréquentes de l'état (setSeconds) en dehors d'un useEffect pourraient déclencher des rendus en cascade, 
        affectant les performances.
    Absence de synchronisation avec le cycle de vie : 
        Il serait difficile de démarrer le timer au montage du composant et de l'arrêter au démontage sans useEffect.
*/