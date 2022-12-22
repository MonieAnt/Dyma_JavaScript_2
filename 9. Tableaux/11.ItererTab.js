
// Itérer sur un Tableau :
console.log('Itérer sur un Tableau :');

const arr = [1, 2, 3];

// Méthode traditionnelle :
console.log('For :');
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};



// Nouvelle Méthode ForOf :
console.log('ForOf :');

for (let elem of arr) {
    console.log(elem);
};


// Méthode For Each :
console.log('For Each :');

arr.forEach((value, index) => {
    console.log(`value : ${value}, index : ${index}`);
})