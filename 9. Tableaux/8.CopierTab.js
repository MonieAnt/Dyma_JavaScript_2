
// Copier un Array

const arr = [1, 2, 3];

const copy = arr;

copy.push(4);

console.log(arr);
console.log(copy);

// Se copie aussi sur l'Array initial


// Idem avec fonction

const b = (arr) => {
    arr.push(6);
};

b(arr)
console.log(arr);


// Shallow Copy = Copie Superficielle
console.log('Shallow Copy :');

// Méthode Slice :
console.log('\n Methode Slice() :');
const arr2 = [5, 6, 7];
const copy2 = arr2.slice();

copy2.push(9);

console.log('arr :', arr2);
console.log('copy :', copy2);


// Spread Operator
console.log('\n Avec SpreadOperator :');
const arr3 = [
    1,
    {
        name : 'soleil'
    },
    3
];

const copy3 = [ ...arr3];
copy3.push(4);

console.log('arr :', arr3);
console.log('copy :', copy3);



console.log('\n Array.from() :');
const arr4 = [
    1,
    {
        name : 'soleil'
    },
    3
];

const copy4 = Array.from(arr4)
copy4.push(4);

console.log('arr :', arr4);
console.log('copy :', copy4);





// Deep Copy = Copie Profonde
console.log('Deep Copy :');

const arr5 = [
    5,
    {
        name : 'six'
    },
    7
];

// Transformation du tableau en JSON string et retransformer ce JSON avec parse :
const copy5 = JSON.parse(JSON.stringify(arr5));

copy5[1].name = 'lune';

console.log('arr :', arr5);
console.log('copy :', copy5);

