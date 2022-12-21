
// Closures :

console.log('Closures :');


// function powerBy(power) {
//     return function(number) {
//         return number ** power      // ** = Math.pow()
//     }
// };

// console.log(powerBy(2)(3));

// const powerBy2 = powerBy(2);
// console.log(powerBy2(3));



// Exemple 2 :

const a = () => {
    let arr = [];
    for(var i = 0; i < 3; i++) {        // différent si let ou var
        arr.push(function() {
            console.log(i);
        });
    }
    return arr;
};

const tab = a();

tab[0]();
tab[1]();
tab[2]();