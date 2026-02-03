/**
 Créez un menu de navigation :

Créez un composant de menu de navigation avec plusieurs liens.
Utilisez un fichier CSS externe pour styliser le menu.
Ajoutez des styles de survol pour les liens et assurez-vous que les styles changent au survol.
 */
import React from "react";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#">À propos</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
/*
nav {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: #f00;
}

*/
