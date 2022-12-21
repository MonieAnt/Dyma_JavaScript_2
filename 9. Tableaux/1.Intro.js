
// Intro :

const arr = [1, 'deux', { foo: 'bar'}, [1,2,3]];

const arr2 = Array(1,2,3);
const arr3 = new Array(2,3,4);


console.log(arr);
console.log(arr2);
console.log(arr3);


// Objet Iterable = Objet qu'on peut parcourir
const arr4 = Array.from('Hello');
console.log(arr4);

// Tableau avec Fonction CallBack :

// Fonction définie qui va s'appliquer sur chacun des éléments et va retourner un nouvel Array
const arr5 = Array.from([1,2,3], (nbr) => {
    return nbr + 4
});

console.log(arr5);