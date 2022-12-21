
// Décomposition d'Objets :

// Call API externe pour récupérer des données
// Requête HTTP pour récupérer des objets puis en extraire ce qu'on a besoin


const terre = {
    population: 7e7,
    satelite : 'Lune',
    temperature : {
        min : -70,
        max : 60
    },
    isOld : false,
    getTemperature : function() {
        console.log('15°C');
    }
};


// Pour extraire propriété d'un objet :
// const population = terre.population
// const satelite = terre.satelite


// Décomposition d'objet :
const { population, satelite } = terre;

console.log(population, satelite);


console.log('Spread Operator');
const { temperature, ...reste } = terre;
console.log(temperature, reste);

// Rest Operator toujours situé à la fin.