
// 

const a = 1.55555555;
const b = new Number(1)

console.log(a, b);

console.log(a);
console.log(b);

console.log(a.toFixed(2)) // JS transforme a en objet via new Number. pour avoir accès aux méthodes.
// ! Retourne en String

// ==> Pour retrouver en format Number : parseFloat
console.log(parseFloat(a.toFixed(2)));

console.log('toString :');
console.log(a.toString()); // Convertir en string


console.log('isNaN :');
const e = Number('123')
const f = Number('123EARET')

console.log(Number.isNaN(e));   // 123 converti en Number et donc n'est pas NaN.
console.log(Number.isNaN(f));   // 123EARE est converti en Number et est NaN



console.log('isInteger :');
// Est un entier ?
console.log(Number.isInteger(55.0));    // True car converti 55.0 en 55
console.log(Number.isInteger(55.1));    // False car 55.1 n'est pas un entier