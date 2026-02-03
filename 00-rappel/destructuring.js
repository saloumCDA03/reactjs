

/*-
La destructuration en JavaScript est une fonctionnalité qui permet de décomposer des objets et des tableaux en éléments individuels. 
Cela facilite l'extraction de valeurs spécifiques et rend le code plus lisible
const { prop1, prop2 } = objet;
Vous définissez des variables prop1 et prop2 pour extraire les propriétés prop1 et prop2 de l'objet objet.
Exemple :
    const personne = { nom: "Alice", age: 30 };
    const { nom, age } = personne;
    console.log(nom);  // "Alice"
    console.log(age);  // 30
    Vous pouvez extraire plusieurs propriétés en une seule ligne.

    const fruits = ["pomme", "banane", "raisin"];
    const [premier, deuxieme] = fruits;
    console.log(premier);  // "pomme"
    console.log(deuxieme); // "banane"

    Vous pouvez définir des valeurs par défaut pour les propriétés au cas où elles ne seraient pas définies dans l'objet.
    const personne = { nom: "Bob" };
    const { nom, age = 25 } = personne;
    console.log(nom);  // "Bob"
    console.log(age);  // 25 (valeur par défaut)
    Si la propriété age n'est pas définie dans l'objet, elle prendra la valeur par défaut de 25.

*/
/*

Exercice 1 : Destructuration d'objet simple
Créez un objet person avec des propriétés telles que name, age, et country. 
Ensuite, utilisez la destructuration pour extraire ces propriétés et affichez-les dans la console.

const person = { name: "Alice", age: 30, country: "USA" };
const { name, age, country } = person
console.log(name);     // "Alice"
console.log(age);      // 30
console.log(country);  // "USA"


*/
/*************Exercice 2 :
Créez une fonction displayPersonInfo qui prend un objet person comme argument 
et utilisez la destructuration pour extraire les propriétés name et age, 
puis affichez-les dans la console.
*/
