
console.log('Valeurs et Références :');

let a = 1;
let b = a;

console.log({a, b});

b += 3;

console.log({a, b});



let e = { b : 1};

e.b = 5;
console.log(e);