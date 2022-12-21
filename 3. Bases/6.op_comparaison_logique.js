
//  =
// Simple assignation à une variable
let a = 'test';


// ==
// Comparer 2 variables
let b = 1, c = 3, d = 1;
console.log(b == c);
console.log(b == d);

console.log(b == true);

console.log(true + '');

// == Comparaison true car number devient string
console.log(1 == '1');

// === Comparaison de type également
console.log(1 === '1');

// Comparaison :
console.log(1 < 2 < 3);
// True car 1 plus petit que 2 
// et 2 plus petit que 3

console.log(3 < 2 < 1);
// True car 3 < 2 = false
// et false < 1 = true
// (false) = 0


// !
// Converti en bolean et donne valeur opposée
console.log(!true);


// && et ||

console.log(true && true);
console.log(true && false);

console.log(true || true);
console.log(true || false);


if (a && b) {
    console.log('OK');
}

if (a || z) {
    console.log('ok aussi');
}