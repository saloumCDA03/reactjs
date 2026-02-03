/**
 5. Formulaire d'inscription :  


Créez un composant fonctionnel qui contient deux champs de saisie : "Nom d'utilisateur" et "Mot de passe".
Ajoutez un bouton "S'inscrire".
Lorsque l'utilisateur saisit des informations et clique sur le bouton, 
ces informations doivent être stockées et un message de confirmation doit être affiché.
N'oubliez pas d'ajouter une validation pour les entrées, par exemple, 
en vous assurant que le mot de passe n'est pas laissé vide.
 */
// Importation de React et du Hook useState depuis la bibliothèque React
import React, { useState } from "react";

// Définition du composant fonctionnel Signup
function Signup() {
  // Initialisation des états pour le nom d'utilisateur, le mot de passe et le message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Vérifie si le mot de passe est vide
    if (password.trim() === "" || username.trim() === "") {
      setMessage("champs"); // Affiche un message d'erreur
    } else {
      setMessage(`Bienvenue ${username} !`); // Affiche un message de bienvenue
      setUsername(""); // Réinitialise le champ du nom d'utilisateur
      setPassword(""); // Réinitialise le champ du mot de passe
    }
  };

  return (
    <div>
      {/* Formulaire d'inscription */}
      <form onSubmit={handleSubmit}>
        <label>
          Nom d'utilisateur:
          {/* Champ de saisie pour le nom d'utilisateur */}
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Mot de passe:
          {/* Champ de saisie pour le mot de passe */}
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        {/* Bouton pour soumettre le formulaire */}
        <button type="submit">S'inscrire</button>
      </form>
      {/* Affichage du message (erreur ou bienvenue) */}
      <p>{message}</p>
    </div>
  );
}

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default Signup;
