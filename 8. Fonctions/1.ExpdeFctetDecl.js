
// Les Fonctions :

console.log('Les Fonctions :');

// Déclaration
function func() {
    console.log('Je suis la fonction : Func Exec');
};

// Invoquer une fonction = Exécuter la fonction :
func();
func();
func();
func();
func();

const fn = function func2() {
    console.log('Execution de la Func2');
}

const fn2 = function() {
    console.log('Execution de la Func2');
}

console.log(fn.name);
console.log(fn2.name);

fn()

console.log(fn);