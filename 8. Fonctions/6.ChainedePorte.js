
// 6. Chaine de portée :
// ScopChain
console.log('Extérieur portée Lexicale :');

function a() {
    console.log(foo);
}

function b() {
    let foo = 1;
    a();
}

let foo = 2;
b();




// Autre exemple à l'intérieur de la porté lexicale :
console.log('Intérieur portée Lexicale :');

function d() {
    function c() {
        console.log(foo2);
    }

    let foo2 = 1;
    c();
}

let foo2 = 2;
d();