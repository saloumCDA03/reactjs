/**
Créez un composant React qui permet à l'utilisateur de basculer entre un thème sombre et un thème clair.
Créez un fichier CSS externe contenant les styles appropriés pour les deux thèmes.
Lorsque l'utilisateur bascule entre les thèmes en cliquant sur un bouton,
utilisez JavaScript pour ajouter ou supprimer les classes CSS correspondant au thème actuel sur l'ensemble de la page,
ce qui changera dynamiquement le style de l'application en fonction du thème sélectionné.
 */
import React, { useState } from "react";
import "./ThemeSwitcher.css"; // Importe le fichier CSS pour les styles du composant.

const ThemeSwitcher = () => {
  // Utilise useState pour gérer l'état du thème (light ou dark).
  const [theme, setTheme] = useState("light");

  // Définit une fonction handleThemeChange pour basculer entre les thèmes.
  const handleThemeChange = () => {
    // Vérifie l'état actuel du thème et bascule vers l'autre.
    if (theme === "light") {
      setTheme("dark");

      // Ajoute la classe "dark-theme" au body pour appliquer les styles du thème sombre.
      document.body.classList.add("dark-theme");

      // Supprime la classe "light-theme" pour retirer les styles du thème clair.
      document.body.classList.remove("light-theme");
    } else {
      setTheme("light");

      // Ajoute la classe "light-theme" au body pour appliquer les styles du thème clair.
      document.body.classList.add("light-theme");

      // Supprime la classe "dark-theme" pour retirer les styles du thème sombre.
      document.body.classList.remove("dark-theme");
    }
  };

  // Rendu du composant avec un bouton pour changer de thème et un contenu de démonstration.
  return (
    <div className="App">
      <button onClick={handleThemeChange}>Changer de thème</button>
      <p>Contenu de l'application</p>
    </div>
  );
};

export default ThemeSwitcher;

/**
  styles.css 
.light-theme {
    background-color: #f5f5f5;
    color: #333;
  }
  
  .dark-theme {
    background-color: #333;
    color: #fff;
  }
  
 */
