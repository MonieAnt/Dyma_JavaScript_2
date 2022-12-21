
// Fusion de Tableaux = Merge :

console.log('The Array Merge');

const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

const d = a + b;

console.log(c);
// Concaténation des 2 tableaux en String. Pas terrible


// Méthode concat() :
console.log('Method Concat() :');
const e = a.concat(b);
const f = a.concat(b).concat(c);

console.log(e);
console.log(f);
// ! Méthode concat retourne un NOUVEAU Tableau


// Notation ES6 avec Spread Operator :
console.log('Spread Operator');

const xxx = [...a, ...b, ...c]
console.log(xxx);