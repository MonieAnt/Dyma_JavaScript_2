
// Fonctions Fléchées :

// () => {}     Arrow Function

console.log('Fonction Fléchée :');

// Ex 1 :
const a = (param) => {
    console.log(param);
};
a('test');


// Ex 2 :
const b = (c, d) => c + d;
console.log(b(2, 4));


// Ex 3 :
const x = (y, z) => ({
    y,
    z,
    total : y + z
});
console.log(x(5, 8));


// Ex 4 : This
const m = () => {
    console.log(this);
};

m();

const n = {
    foo : 'bar'
};
m.call(n)


// Il est possible de retourner une valeur depuis une fonction fléchée sans le mot clé return.
// S'il n'y a qu'une seule instruction.

// Le this est défini par l'environnement lexical de la fonction fléchée