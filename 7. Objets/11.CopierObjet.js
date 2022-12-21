
// Copier Objet :

console.log("Copie d'Objet :");

const a = {
    name: 'toto',
    lastname: 'Tutu',
    foo : {
        bar: 'zoo'
    }
};


// Méthode superficiel - Shallow Copy :
const b = Object.assign({}, a);

b.name = 'Tata'
b.foo.bar = 123

console.log(a);
console.log(b);


// Opérateur Spread :
console.log('Spread Op :');
const c = {...a}
console.log(c);



// Deep Copy :
console.log('Deep Copy');
const d = JSON.parse(JSON.stringify(a));
console.log(d);