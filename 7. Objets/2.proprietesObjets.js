
// Propriétés :

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
}


const prop = 'temperature'


console.log(terre);

console.log(terre.population);
console.log(terre['satelite']);

console.log(terre[prop]);


const copy = terre;
copy.isOld = true;

console.log(copy);
terre.getTemperature();