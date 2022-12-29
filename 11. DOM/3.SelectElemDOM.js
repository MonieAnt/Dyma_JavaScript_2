
// Selectionner des éléments du DOM

// console.log(window.document === document);

const elem = document.getElementById("foo")
console.log(elem);

const elem2 = document.getElementById("myParagraph")
console.log(elem2);



const elem3 = document.querySelector('#foo')            // Reprend le 1er Elem qui match
console.log(elem3);

const elem4 = document.querySelector('img[alt="Javascript Logo"]') ;           
console.log(elem4);