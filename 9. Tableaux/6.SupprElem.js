
// Supprimer des éléments du tableau :

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.shift();        // Supprimer et tout décaler vers la gauche
arr.pop();          // Suppression du DERNIER élément.

console.log(arr);

// Rest Operator :
// Pour supprimer le premier élément :
[ , ...arr] = arr;

console.log(arr);


// Supprimer un Element au milieu de tableau : Splice

// Index, nb élément à supprimer
arr.splice(2, 1);
console.log(arr);