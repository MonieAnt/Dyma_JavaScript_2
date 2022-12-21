
// Raccourcis Syntaxiques :

const population = 7e7;
const satelite = 'Lune';
const temperature = {
        min : -70,
        max : 60
};

// Key Dynamic
const pop = 'population';


// const terre = {
//     population : population,
//     satelite : satelite,
//     temperature : temperature,
//     isOld : false,
// };

// ==

const terre = {
    [pop] : population,
    satelite,
    temperature,
    isOld : false,
};

console.log(terre);