/**
La méthode .map() en ReactJS est utilisée pour itérer sur un tableau et renvoyer un nouveau tableau avec des éléments modifiés. 
Elle est couramment utilisée pour rendre une liste d'éléments de manière dynamique. 
Voici un exemple d'utilisation de .map() pour rendre une liste d'éléments :
import React from 'react';
  function App() {
    const items = ['pomme', 'banane', 'orange'];

    return (
      <div>
        <h1>Liste d'éléments</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  export default App;
  nous avons un tableau d'éléments ['pomme', 'banane', 'orange']. 
  Nous utilisons .map() pour itérer sur le tableau et renvoyer un nouveau tableau d'éléments <li> avec le nom de l'élément comme contenu textuel. 
  La propriété key est utilisée pour identifier de manière unique chaque élément de la liste.
  Notez que la méthode .map() renvoie un nouveau tableau et ne modifie pas le tableau d'origine. 
  De plus, la propriété key est importante pour des raisons de performance et doit être un identifiant unique pour chaque élément de la liste.
  il existe plusieurs façons de créer une clé unique pour chaque élément dans une liste. 
  Voici quelques exemples :
    Utiliser un identifiant unique provenant des données : 
    Si vous avez des données avec un identifiant unique, vous pouvez l'utiliser comme clé. Par exemple :
      const items = [ { id: 1, name: 'apple' }, { id: 2, name: 'banana' }, { id: 3, name: 'orange' }, ];
      <ul> {items.map((item) => ( <li key={item.id}>{item.name}</li> ))} </ul>

  Si vous n'avez pas d'identifiant unique dans les données, vous pouvez utiliser l'index de l'élément dans le tableau comme clé.
    <ul> {items.map((item, index) => ( <li key={index}>{item}</li> ))}</ul>
    Cependant, cela peut causer des problèmes si l'ordre des éléments dans le tableau change.
    
  Il existe des bibliothèques telles que UUID qui peuvent générer des clés uniques pour vous.
    import { v4 as uuidv4 } from 'uuid';
    const items = ['apple', 'banana', 'orange'];
    <ul>{items.map((item) => (<li key={uuidv4()}>{item}</li>))}</ul>

 */
/*
Exercice 1 : Création d'une liste simple
Créez un composant React qui rend une liste de 3 ou 4 noms. 
Utilisez une boucle pour parcourir un tableau de noms et affichez-les à l'aide d'éléments JSX <li>. 
Ajoutez des clés uniques à chaque élément de la liste.

*/
function doubleNumbers(numbers) {
  const doubled = numbers.map((number) => number * 2);
  return doubled;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numbers);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
