
// Autres Méthodes de Programmation Fonctionnelle :

console.log('Autre Méthode :');

// Reduce

const myBasket = [
    {
        name : 'SHIRT',
        quantity : 2,
        price : 50
    },
    {
        name : 'SHOES',
        quantity : 1,
        price : 90
    },
    {
        name : 'CAP',
        quantity : 1,
        price : 30
    }
];


const total = myBasket.reduce((acc, value, index) => {
    console.log(`acc : ${acc}, value : ${value}, index : ${index}`);
    acc += value.price * value.quantity
    return acc;
}, 0)

console.log(total);

// Version raccourcie
const total2 = myBasket.reduce(
    (acc, value) =>(acc += value.price * value.quantity), 0
);

console.log(total2);