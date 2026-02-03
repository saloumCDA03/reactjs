/*
Créez un composant fonctionnel qui contient un champ de saisie.
Lorsque l'utilisateur saisit une tâche, 
elle remplace l'ancienne valeur initialisée avec le Hook useState et s'affiche à l'écran.

*/
import React, { useState } from "react";

const TaskInput = () => {
  // Initialisation de l'état "task" avec une chaîne vide
  const [task, setTask] = useState("");

  // Fonction pour gérer la saisie de l'utilisateur dans le champ de saisie
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <div>
      {/* Champ de saisie pour la tâche. La valeur et l'événement onChange sont liés à l'état "task" */}
      <input type="text" value={task} onChange={handleChange} />

      {/* Affichage de la tâche actuelle */}
      <p>Tâche actuelle : {task}</p>
    </div>
  );
}

export default TaskInput;
