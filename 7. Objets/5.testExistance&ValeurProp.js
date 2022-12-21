
// 5. Tester l'existance et la valeur d'une propriété :

const terre = {
    population : 7e7,
    satelite : 'Lune',
    temperature : {
        min : -70, 
        max : 60
    },
    isOld : false
}

console.log('Test terre.population :');
if (terre.population) {
    console.log('Ok');
} else {
    console.log('KO');
}

console.log('Test "population" in terre :');
if ('population' in terre) {
    console.log('Ok');
} else {
    console.log('KO');
}

console.log("Test 'terre.hasOwnProperty('isOld')' :");
if (terre.hasOwnProperty('isOld')) {
    console.log('Ok');
} else {
    console.log('KO');
}

