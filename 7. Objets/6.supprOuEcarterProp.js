
// 6. Supprimer ou Ecarter des propriétés :

console.log('Supprimer ou Ecarter des Propriétés :');

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

terre.habitable = true;
// OU
terre['vivable'] = true
// OU
const livable = 'livable2';
terre[livable] = true

console.log(terre);




// Supprission de propriété :

// Suppression totale
delete terre.satelite
console.log(terre);

// Set valeur à null :
const { satelite } = terre
terre.satelite = null
console.log(terre);

// Set valeur à undefined :
terre.satelite = undefined;
console.log(terre);




// Copy :
const { population, ...copyTerre} = terre
console.log(terre);