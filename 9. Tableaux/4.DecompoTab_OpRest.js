
// Décomposition de tableaux et Opérateur Rest :
console.log('Syntaxe longue :');
const arr = [1,2,3];

const a = arr[0];
const b = arr[1];

console.log(a);
console.log(b);


// En plus court :
console.log('Syntaxe courte :');
const [c,d] = arr;

console.log(c);
console.log(d);



// Opérateur Rest :
console.log('Opérateur Rest :');
const arr2 = [5,6,7];

const [x, ...rest] = arr;
console.log(x);
console.log(rest);


// Rest sur Tableau Imbriqué :
console.log('Op Rest sur Tab Imbriqué :');
const arr3 = [[5, 6], 7];

const [m, n] = arr;

console.log(m);
console.log(n);