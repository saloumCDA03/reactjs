/**
Exercice : Créez une application de liste de tâches en utilisant React.js
Objectif :  Le but de cet exercice est de créer une application de liste de tâches simple en utilisant React.js. 
            Vous apprendrez à gérer l'état local, à créer, lire, mettre à jour et supprimer des tâches.

Instructions :
    Créez un nouveau projet React en utilisant Create React App 

    Créez un composant TaskList pour afficher la liste des tâches. 
    Ce composant devrait contenir une liste de tâches sous forme d'objets avec des propriétés telles que l'ID, 
    le nom de la tâche et l'état (terminé ou non terminé).

    Affichez la liste des tâches dans le composant TaskList. 
    Chaque tâche doit avoir une case à cocher pour indiquer si elle est terminée ou non, 
    ainsi qu'un bouton pour supprimer la tâche.

    Ajoutez un formulaire ou une zone de texte dans le composant App permettant 
    d'ajouter de nouvelles tâches à la liste. 
    Lorsqu'un utilisateur soumet le formulaire, une nouvelle tâche non terminée doit être ajoutée à la liste.

    Implémentez la fonctionnalité de marquer une tâche comme terminée ou non terminée. 
    Lorsqu'un utilisateur coche ou décoche la case à cocher, l'état de la tâche doit être mis à jour en conséquence.

    Implémentez la fonctionnalité de suppression de tâches. 
    Lorsqu'un utilisateur clique sur le bouton de suppression, la tâche correspondante doit être supprimée de la liste.

    Vous pouvez ajouter des styles CSS pour améliorer l'apparence de la liste de tâches.

Fonctionnalités supplémentaires (optionnelles) :
    Permettez aux utilisateurs de modifier le nom d'une tâche existante.
    Ajoutez une option pour filtrer les tâches terminées ou non terminées.
    Triez les tâches par ordre alphabétique ou par date d'ajout.

Contraintes :
    Utilisez les concepts de gestion d'état local de React (useState, useEffect si nécessaire).
    Concentrez-vous sur la fonctionnalité de l'application plutôt que sur le design.
 */
import React, { useState } from "react";
import "./todoList.css";

function TodoList() {
  // États du composant
  // tasks: tableau des tâches, chaque tâche est un objet contenant id, name et completed
  const [tasks, setTasks] = useState([]);
  // newTask: contrôle le champ de saisie pour ajouter une nouvelle tâche
  const [newTask, setNewTask] = useState("");
  // showCompleted: booléen pour contrôler l'affichage des tâches complétées
  const [showCompleted, setShowCompleted] = useState(true);
  // sortBy: critère de tri des tâches ('name' pour nom, 'date' pour date d'ajout)
  const [sortBy, setSortBy] = useState("name");
  // editingTaskId: ID de la tâche actuellement en cours d'édition, null si aucune
  const [editingTaskId, setEditingTaskId] = useState(null);

  // Ajoute une nouvelle tâche à la liste après vérification que le champ n'est pas vide
  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = { id: Date.now(), name: newTask, completed: false };

      // Ajoute 'newTaskObj' à la liste des tâches en préservant l'immuabilité, créant une nouvelle instance de l'array.
      setTasks([...tasks, newTaskObj]);
      setNewTask(""); // Réinitialise le champ de saisie
    }
  };

  // Change le statut 'completed' de la tâche spécifiée par son ID
  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Supprime la tâche spécifiée par son ID
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Active le mode d'édition pour la tâche spécifiée par son ID
  const startEditingTask = (taskId) => {
    setEditingTaskId(taskId);
  };

  // Met à jour le nom de la tâche en cours d'édition
  const updateEditingTaskName = (taskId, newName) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, name: newName } : task
    );
    setTasks(updatedTasks);
  };

  // Termine le mode d'édition
  const finishEditingTask = () => {
    setEditingTaskId(null);
  };

  // Filtre les tâches à afficher selon le statut 'completed'
  const filteredTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.completed);

  // Trie les tâches selon le critère sélectionné ('name' ou 'date')
  if (sortBy === "name") {
    filteredTasks.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "date") {
    filteredTasks.sort((a, b) => a.id - b.id);
  }

  return (
    <div className="task-list">
      <h1>Ma liste de tâches</h1>
      <div className="task-form">
        {/* Champ de saisie pour ajouter une nouvelle tâche */}
        <input
          type="text"
          placeholder="Ajouter une nouvelle tâche"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Ajouter</button>
      </div>
      <div className="filter-options">
        {/* Checkbox pour afficher ou masquer les tâches complétées */}
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
          Afficher les tâches terminées
        </label>
        {/* Sélecteur pour choisir le critère de tri des tâches */}
        <label>
          Trier par :
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Nom</option>
            <option value="date">Date d'ajout</option>
          </select>
        </label>
      </div>
      {/* Liste des tâches */}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {/* Checkbox pour marquer une tâche comme complétée ou non */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {/* Affichage conditionnel : champ de saisie pour édition ou texte pour affichage */}
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={task.name}
                onChange={(e) => updateEditingTaskName(task.id, e.target.value)}
                onBlur={finishEditingTask} // Quitter l'édition au clic en dehors du champ
              />
            ) : (
              <span
                className={task.completed ? "completed" : ""}
                onClick={() => startEditingTask(task.id)} // Clic pour éditer le nom de la tâche
              >
                {task.name}
              </span>
            )}
            {/* Bouton pour supprimer la tâche */}
            <button onClick={() => deleteTask(task.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
