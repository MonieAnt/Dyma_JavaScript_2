
// Trouver des Elements dans un Tableau :

const arr = ['un', 'deux', 'trois'];

console.log(arr.indexOf('trois'));
console.log(arr[arr.indexOf('deux')]);
// Si pas d'élément : il renvoie -1
console.log(arr.indexOf(2));


// Includes : True ou False
if(arr.includes('quatre')) {
    console.log('ok');
} else {
    console.log('KO');
};




// Avec Objet :

const arr2 = [
    {
    name : 'terre'
    }, 
    {
    name : 'lune'
    },
    {
    name : 'soleil'
    }
];


// Fonction qui retourne True ou False
const index = arr2.findIndex(elem => elem.name === 'soleil')       

console.log(index);


// Méthode Find. Ne retourne pas l'Index mais directement l'Element
const elem = arr2.find(elem => elem.name === 'lune');
console.log(elem);