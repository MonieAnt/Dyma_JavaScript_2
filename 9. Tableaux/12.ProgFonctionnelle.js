
// Programmation Fonctionnelle :
console.log('Programmation Fonctionnelle :');

// *
// Map / Filter
// *

const arr = ['UN', 'DEUX', 'TROIS']     // Exemple de ce que je peux recevoir d'une API
                                        // j'aimerai les traiter en minuscules
console.log(arr);

// Méthode avec forEach :
console.log('Méthode ForEach :');

const a = [];

arr.forEach((value) => {
    a.push(value.toLocaleLowerCase())
});

console.log(a);



// Méthode Map :
console.log('Method Map :');            // Retourne un nouveau tableau
const b = arr.map((value) => {
    return value.toLocaleLowerCase();
})

console.log(b);


// *
// *
// *

// Autre Démo avec Tableau d'Objets :
console.log('Demo Tab Objets :');

const obj = [
    {
        name : 'SHIRT',
        quantity : 5
    },
    {
        name : 'SHOES',
        quantity : 10
    },
    {
        name : 'PANTS',
        quantity : 4
    },
    {
        name : 'HAT',
        quantity : 12
    }
];
console.log(obj);

// Je veux uniquement récupéré les noms de mes obj
console.log('Map :');
const dressing = obj.map(value => {
    return value.name;
});

console.log(dressing);



// *
// Filter
// *

// Garder les produits qui ont plus de 5 en quantité ET mettre les noms en minuscule
console.log('Filter :');

const dressing2 = obj
    .filter(item => item.quantity > 8)
    .map(item => {
        return {
            ...item,
            name : item.name.toLocaleLowerCase()
        };
    });

console.log(dressing2);