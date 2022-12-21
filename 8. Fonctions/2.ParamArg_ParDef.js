
// Paramètres, Arguments et Paramètres par Défaut :

function func(param) {
    console.log(param.toUpperCase());
};

func('param');


function func(param2) {
    if(param2) {
        console.log(param2.toUpperCase());
    } else {
        console.log('KO');
    }
};

func('param');
func();


// Méthode souvent utilisée. Si la fonction n'a pas de paramètre, on lui en met un par défaut.
function func(param3 = 'default') {
    console.log(param3.toUpperCase());
};

func('test');