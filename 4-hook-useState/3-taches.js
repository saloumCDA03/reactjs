/*
3. Liste de tâches :
Créez un composant fonctionnel qui contient un champ de saisie 
<form onSubmit={}>
          <input
            type="text"
            value={}
            onChange={}
            placeholder="Ajoutez une tâche"
          />
          <button type="submit">Ajouter</button>
        </form> et une liste vide (ul li). 
Lorsque l'utilisateur saisit une tâche et appuie sur "Ajouter", la tâche doit être ajoutée à la liste. 
Les tâches doivent être stockées dans un tableau à l'aide du Hook useState

****La méthode map() parcourt chaque élément du tableau sur lequel elle est appelée, un par un, de gauche à droite
Pour chaque élément du tableau, map() applique une fonction de transformation . 
Cette fonction peut prendre jusqu'à trois arguments : 
  l'élément actuel du tableau, 
  l'index de l'élément actuel dans le tableau, 
  et le tableau lui-même. 
  Cette fonction retourne le nouvel élément transformé.
*/
import React, { useState } from "react";

function TaskList() {
  // Déclaration de la variable d'état tasks avec le Hook useState
  const [tasks, setTasks] = useState([]);

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
    const newTask = event.target.elements.task.value; // Récupère la valeur saisie dans le champ de saisie
    setTasks([...tasks, newTask]); // Ajoute la nouvelle tâche au tableau tasks en utilisant la fonction setTasks et la syntaxe de propagation de tableau
    event.target.reset(); // Réinitialise le formulaire
  };

  // Retourne un élément div qui contient un formulaire avec un champ de saisie et un bouton "Add", ainsi qu'une liste non ordonnée (ul) qui affiche chaque tâche saisie par l'utilisateur en utilisant la méthode map pour parcourir le tableau tasks et créer un élément li pour chaque tâche.
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Enter task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

// Exporte la fonction TaskList pour être utilisée dans d'autres fichiers
export default TaskList;
