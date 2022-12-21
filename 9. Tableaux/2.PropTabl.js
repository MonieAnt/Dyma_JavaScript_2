
// Propriétés d'un tableau :

const arr = ["terre", "soleil", "lune"];

// Index de 0 à Array.length - 1
console.log(arr[arr.length - 1]);

console.log(arr);


// Retirer tous les éléments du tableau :
// Pas réassigné si const
// Sinon

arr.length = 0;

console.log(arr);