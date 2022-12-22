
// Trier un Tableau :

const a = [2, 1, 3];
const b = [2, 25, 100];

a.sort();
b.sort();       // Ne fonctionne pas car sort trie par String. Ok pour String mais pas pour Numéros.
                // ! Majuscules passent avant le lowerCase.

console.log(a);
console.log(b);

//

// Trier des Strings :
console.log('Trier des Strings');

const x = ['banane', 'Orange', 'ananas'];

x.sort((y, z) => y.localeCompare(z));       // Compare 2 chaines de caractères dans Méthode Sort
// x.sort((y, z) => y.localeCompare(z) * -1);  // Pour trier dans l'autre sens

console.log(x);


//


// Trier des Numbers :
console.log('Trier des Numbers');
const m = [ 3, 7, 1];
m.sort((y, z) => y - z);
console.log(m);


// Trier des Objets :
console.log('Trier des Objets');
const obj = [
    {
        quantity: 10
    },
    {
        quantity : 15
    },
    {
        quantity : 5
    }
];

obj.sort((y, z) => y.quantity - z.quantity)

console.log(obj);






//

// Inverser l'Ordre du Tableau :
console.log('Inverser Ordre Tableau');
const rev = [1, 2, 3];

rev.reverse();

console.log(rev);