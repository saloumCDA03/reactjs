/**
 Inline styles:
 Dans React, les styles en ligne ne sont pas écrits comme des chaînes de caractères, mais comme des objets JavaScript. 
 Cela diffère de la manière dont nous définissons généralement les styles en ligne en HTML pur.
Avantages des styles en ligne :
    Isolation : Les styles en ligne sont spécifiques à un élément, ce qui évite les conflits de styles.
    Dynamisme : Il est facile de manipuler les styles en fonction de l'état ou des props du composant.
    Pas besoin d'ajouter des fichiers CSS supplémentaires : Tout est dans le fichier JS.

Définir un objet de style :
    function App() {
        return <button style={{backgroundColor: 'blue'}}>Cliquez-moi</button>;
    }
    ou-----------
    Créez un objet JavaScript où les propriétés sont en camelCase:
        const buttonStyle = {
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px'
            };
    Appliquer le style à un élément :
        function App() {
            return <button style={buttonStyle}>Cliquez-moi</button>;
            }
    -----------   
Limitations des styles en ligne :
    Pas de pseudo-classes ou pseudo-éléments : 
        Vous ne pouvez pas utiliser :hover, ::before, etc. avec des styles en ligne.
    Pas de médias queries : 
        Les styles en ligne ne prennent pas en charge les requêtes média.
    Verbosité : 
        Pour des styles complexes, les styles en ligne peuvent rendre le composant verbeux et difficile à lire.     
*/

/**
 * Créez un composant qui affiche un paragraphe de texte.
Utilisez des styles en ligne pour définir la couleur du texte et la taille de la police 
 */
import React from "react";

const MyComponent = () => {
  const styles = {
    color: "red",
    fontSize: "20px",
  };

  return (
    <div>
      <p style={styles}>Hello World!</p>
    </div>
  );
};

export default MyComponent;
