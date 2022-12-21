
// Définir ou Lier This ?



// Call()

// Exemple 1 :
// const a = {
//     foo : 'not bar'
// };

// const b = {
//     foo : 'bar',
//     fn() {
//         function c() {
//             console.log(this);
//         }
//         // c();         Pour la Window
//         c.call(a);   // Pour spécifier le this   Ici pour l'objet b
//     }
// };

// b.fn();


// function a() {}
// a.foo = 'bar';
// console.log(a.foo);


// Exemple 2 :

console.log('Ex Call :');

const b = {
    name : 'Antoine',
    lastname : 'Monie'
};

function bonjour(lang) {
    if (lang === 'fr') {
        console.log(`Bonjour ${this.name + ' ' + this.lastname}`);
    } else {
        console.log(`Hello ${this.name + ' ' + this.lastname}`);
    }
};

bonjour.call(b, 'en');


// Apply()

console.log('Ex Apply :');

const c = {
    name : 'Elodie',
    lastname : 'Havet'
};

function bonjour2(lang) {
    if (lang === 'fr') {
        console.log(`Bonjour ${this.name + ' ' + this.lastname}`);
    } else {
        console.log(`Hello ${this.name + ' ' + this.lastname}`);
    }
}

bonjour2.apply(c, ["fr"]);




// Bind()

// Retourne une nouvelle fonction

console.log('Ex Bind :');

const d = {
    name : 'Thierry',
    lastname : 'Henry'
};

function bonjour3(lang) {
    if (lang === 'fr') {
        console.log(`Bonjour ${this.name + ' ' + this.lastname}`);
    } else {
        console.log(`Hello ${this.name + ' ' + this.lastname}`);
    }
};

const e = bonjour3.bind(b);

e('fr')