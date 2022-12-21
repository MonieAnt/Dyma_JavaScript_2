
// Boucle et conditions :

// If / Else / Elseif

console.log('Boucles et conditions :');

const condition = true;
const condition2 = 0;

if (condition === true) {
    console.log("Si condition est true, j'affiche ceci.");
}


if (condition) {
    console.log("si condition existe, j'affiche ceci");
}

if (!condition2) {
    console.log("Condition 2 = 0 et 0 = false");
}


// Autre exemple :
console.log('Nouvel exemple :');

const name = 'Jean';
if (name) {
    console.log(`Bonjour ${name}`);
}


if (name) {
    console.log(`Bonjour ${name}`);
} else {
    console.log('Bonjour !!!');
}

// Autre exemple :
console.log('Autre :');
if (name === 'Paul') {
    console.log(`Bonjour ${name}`);
} else if (name === 'Jean') {
    console.log(`Bonjour ${name}`);
} else {
    console.log('Bonjour à toi.');
}