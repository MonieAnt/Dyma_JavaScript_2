
// Objet Arguments et Utilisation de l'opérateur Rest :

console.log('Objet Arguments :');


function add() {
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
        console.log(total);
    }
    console.log(total);
};

add(1, 2, 3, 4);




// Autre exemple avec Spread Operator :
console.log('Spread Operator :');

function add2(...numbers) {
    console.log(numbers);
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total);
}

add2(1,2,3,4)



// Autre exemple avec Spread Operator ET Opérateur :
console.log('Spread Operator + Operator :');

function add3(operateur, ...numbers) {
    console.log(numbers);
    let total = 0;
    if (operateur === '+') {
        for (let i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
    } else if (operateur === '-') {
        for (let i = 0; i < numbers.length; i++) {
            total -= numbers[i];
        }
    }
    console.log(total);
}

add3('-', 1, 2, 3, 4);