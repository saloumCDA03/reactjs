/*
Les Hooks
Les Hooks sont une fonctionnalité introduite dans React 16.8 qui d'utiliser des fonctionnalités de React telles que l'état et les effets sans avoir à écrire de classes. 
Les Hooks sont des fonctions qui permettent de "s'accrocher" aux fonctionnalités de l'état et du cycle de vie de React à partir de composants fonctionnels. 
Ils ne fonctionnent pas à l'intérieur des classes, mais permettent d'utiliser React sans classes. 
useState :
Avant l'introduction des Hooks dans React, l'utilisation de l'état local était principalement limitée aux composants de classe.
 Cependant, avec useState, les composants fonctionnels peuvent également avoir un état.
 C’est un hook de React qui permet de définir et de mettre à jour l'état d'un composant fonctionnel. 
Il est utilisé pour stocker des données qui peuvent être modifiées et qui doivent être conservées entre les rendus. 
La syntaxe de useState est la suivante :
const [state, setState] = useState(initialState);
state est la variable qui contient l'état actuel, 
setState est la fonction qui permet de mettre à jour l'état. 
initialState est la valeur initiale de l'état.
Voici un exemple d'utilisation de useState :
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

useState peut également être utilisé avec des objets :
const [id, setId] = useState({ name: '', age: 0 });

Pour mettre à jour un objet, il est important de se rappeler que setState ne fusionne pas automatiquement l'objet. Vous devez le faire manuellement :
setId(prevState => ({ ...prevState, name: 'Alice' }));

Il est tout à fait possible d'utiliser plusieurs appels useState dans un seul composant :
const [age, setAge] = useState(0);
const [fruit, setFruit] = useState('banane');
const [todos, setTodos] = useState([{ text: 'Apprendre les Hooks' }]);
Les composants fonctionnels sont devenus de plus en plus populaires en raison de leur syntaxe plus concise et de leur facilité de développement, de compréhension et de test. De plus, l'équipe React continue d'introduire davantage de Hooks pour les composants fonctionnels, ce qui les rend encore plus puissants.

*/
