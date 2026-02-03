/**
******* 
Introduction à useEffect Le gestionnaire d'effets secondaires de React
useEffect est l'un des hooks les plus puissants  en React. 
Il permet d'effectuer des opérations après le rendu d'un composant, telles que des appels à des API, la gestion d'événements ou la modification de l'état. 
Il est essentiel pour gérer les effets secondaire dans une application React.

*****
effet secondaire ???
Avant de plonger dans useEffect, il est important de comprendre ce qu'est un effet secondaire en programmation. 
Un effet secondaire est toute opération qui affecte quelque chose en dehors de la portée immédiate de la fonction qui l'exécute. 
Dans le contexte de React, cela peut inclure :
  Modifier le titre du document
  Effectuer des requêtes réseau
  Manipuler directement le DOM
  Configurer des abonnements ou des timers

  Voici un exercice qui vous permettra de constater les problèmes liés à l'absence de useEffect pour la gestion des effets de bord, en particulier pour la création et le nettoyage d'intervalles.
  Créer un composant React fonctionnel nommé ConsoleLogger qui affiche un message dans la console toutes les 2 secondes, en incrémentant un compteur à chaque fois.
  Contraintes :
    Ne pas utiliser le hook useEffect dans votre solution.
    Implémenter la logique de l'intervalle directement dans le corps du composant.
    Afficher dans la console le message "Message affiché toutes les 2 secondes" suivi du nombre d'incrémentations effectuées.
(((((((((((((((((((((((((((((((((((((((((((((((((((((((
  
function ConsoleLogger() {
  var inc = 0
  // useEffect(() => {
  //   // Met en place un intervalle qui affiche un message toutes les 2 secondes
  //   const interval = setInterval(() => {
  //     inc++
  //     console.log("Message affiché toutes les 2 secondes" + inc);
  //   }, 2000);

  //   // Nettoyage de l'intervalle lors du démontage du composant
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []); // Le tableau vide indique que cet effet ne s'exécute qu'une seule fois au montage
  setInterval(() => {
    inc++
    console.log("Message affiché toutes les 2 secondes" + inc);
  }, 2000);
  return (
    <div>
      <p>Regardez la console, un message s affiche toutes les 2 secondes.</p>
    </div>
  );
}

export default ConsoleLogger;
Pourquoi cet exemple pose problème
Exécution à chaque rendu :
Dans un composant fonctionnel, le corps de la fonction s'exécute à chaque rendu. Cela signifie que chaque fois que le composant se rend (par exemple, lors d'un rechargement ou d'une mise à jour), un nouvel appel à setInterval est créé. Au fil du temps, plusieurs intervalles seront actifs simultanément, ce qui entraîne l'affichage multiple du message et un risque de fuite de mémoire
Pas de nettoyage :
Sans useEffect, il n'y a pas de mécanisme pour nettoyer (clear) l'intervalle lorsque le composant est démonté. Cela peut continuer à exécuter la fonction de rappel même après que le composant a été retiré de l'interface, ce qui est indésirable.
)))))))))))))))))))))))))))))))))))))))))))))))))))))))

***********

Pourquoi useEffect ?
Dans les composants React, nous voulons souvent exécuter du code après que le composant ait été rendu à l'écran. 
useEffect nous permet de faire cela de manière déclarative, en nous assurant que notre code s'exécute au bon moment dans le cycle de vie du composant.

Syntaxe de base:
  useEffect(() => {
    // Code de l'effet
  }, []);
  
  Décomposons Cette syntaxe :
    useEffect prend deux arguments:
      Une fonction()
      Un tableau de dépendances [] (optionnel)

    La fonction passée à useEffect sera exécutée après chaque rendu du composant.
    Le tableau de dépendances permet de contrôler quand l'effet doit être ré-exécuté.
*/