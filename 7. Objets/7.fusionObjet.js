
// Merge d'objets :

console.log("Merge d'objets :");

const terre = {
    population : 7e7,
    temperature : {
        min : -70,
        max : 60
    }
};

const terre2 = {
    satelite : 'Lune',
    isOld : false
};

console.log(terre);
console.log(terre2);

// Méthode 1 :
const terreTot = Object.assign({}, terre, terre2);
console.log(terreTot);


// Méthode 2 avec Spread Operator :
// Méthode plus répandue.
const terreTot2 = { ...terre, ...terre2};
console.log(terreTot2);