
// JS utilise les Types dynamiques.     ><      Type statique.
//                let test = '123' // OK        bool test = '123' // Error

// Statitque : Type défini au moment de la compilation
// Dynamique : Type défini au moment de l'exécution du script.

// Type primitifs = tous les types sauf les objects
// Boolean / Nombre / String / Undefined / Null / Symbole (ES6) / BigInt (ES2020

// Objects :
// Objet littéral / Tableau / Fonction / Date / tout le reste..


// Types primitifs :

// String
const name = 'Jean';
console.log(typeof name);

// Nombre
const age = 18;
console.log(typeof age);

// Null
const hobbies = null;
console.log(typeof hobbies);

// Undefined
let action;
console.log(typeof action);

// Symbole
let sym = Symbol();
console.log(typeof sym);

// Boolean
let actif = true;
console.log(typeof actif);



// Object :

// Objet littéral :
const cities = {
    name : 'Paris',
    state : 'France'
};
console.log(typeof cities);

// Fonction : 
const greetings = function () {
    console.log('Hello');
};
console.log(typeof greetings);

// Date :
const today = new Date();
console.log(typeof today);

// Array :
const arr = [1, 2, 3];
console.log(typeof arr);