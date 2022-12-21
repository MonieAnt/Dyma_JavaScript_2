// 2. Ternaires


console.log('Exemple Simple sans Ternaire :');
const age = 15;
let isMajor;

if (age >= 18) {
    isMajor = true
} else {
    isMajor = false
}

console.log(isMajor);


// Exemple avec Ternaire :

console.log('Exemple avec Ternaire :');

const age2 = 21;

// Expression ? Si expression est vrai => true Sinon l'expression => false.
const isMajor2 = (age2 >= 18) ? true : false;
console.log(isMajor2);

const isMajor3 = (age2 >= 18) ? 'Tu es majeur' : 'Tu es mineur';
console.log(isMajor3);


// Double ternaire :
console.log('Double Ternaire :');
const age4 = 15;

const status = (age4 >= 18) ? 'Majeur' : (age4 < 2) ? 'Baby' : 'Ado'
console.log(status); 


// Idéalement :
// Un seul cas d'opérateur Ternaire => Ternaire
// Si plusieurs cas => Elseif