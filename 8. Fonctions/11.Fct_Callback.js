
// Fonction CallBack :

// First Class Function

// Fonction en paramètre d'une autre fonction et invoqué à la fin de l'exécution de la 1ere fonction.


const b = (p1, p2) => {
    console.log('cb', p1, p2);
};

function fn(param1, param2) {
    console.log('a : ', param1);
    const p1  = 1, p2 = 2;
    param2(p1, p2);
};

fn('je suis a', b)