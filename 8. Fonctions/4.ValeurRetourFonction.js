
// Valeur Retour de fonction :
console.log('Valeur retour de Fonction :');


function operation(operateur, ...numbers) {
    let total = 0;
    if (operateur === '+') {
        for (let i=0; i < numbers.length; i++) {
            total += numbers[i];
        }
    }
    // return;      // Implicite --> undefined
    return total;
};

const total = operation('+', 1, 2, 3, 4);
console.log(total);