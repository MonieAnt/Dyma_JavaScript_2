
// Keyword VAR

// Déclaration
var myvar;
console.log(myvar);

// Initialisation 
myvar = 23;

console.log(myvar);

// Error car variable 'test' non définie.
// console.log(test);

// Déclaration de plusieurs variables en même temps
var myvar2, myvar3, myvar4;
myvar2 = 56;

console.log(myvar + myvar2);




// Keyword Let depuis ES6
var name = 'jean';
var name = 'eric';

// Avec var, si variable de meme nom, elle écrase la précédente.
console.log(name);

// Message d'erreur : Already declared.
let firstname = 'Antoine';
// let firstname = 'Elodie';

console.log(firstname);


// Keyword CONST :
const user = 567;

console.log(user);

// Pas possible de réassigner une variable avec const.
// user = 234;
// console.log(user);


// Test avec Object :
const user2 = {
    name2 : 'Jean'
};

user2.name2 = 'Eric';

console.log(user2);


// Priorité :

// CONST
// Let
// Var