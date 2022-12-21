
// Ajout d'Elements dans un tableau :

console.log('Ex unshit & push :');

const arr = [ 1, 2, 3];

arr[0] = '1';

arr.unshift(0);     // Ajout d'Element en DEBUT de Tableau
arr.push(4,5);      // Ajout d'Element en FIN de Tableau

console.log(arr);


// Exemple avec Spread Operator
console.log('ex Spread Operator :');

let arr2 = [5, 6, 7];

arr2 = [ ...arr2, 8, 9];
console.log(arr2);


arr2 = [4, ...arr2];
console.log(arr2);



// Fonction Splice

// (index de départ, nbr élément à supprimer, ajout élément à partir de l'index)
arr2.splice(1, 0, 4.5)
console.log(arr2);