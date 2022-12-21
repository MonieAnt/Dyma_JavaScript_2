
// Créer Number à partir de String via méthode Number

console.log(Number('44'));
console.log(Number('44px')); // Ne sais pas convertir px en number
console.log(+'44'); // Astuce pour convertir String en Number rapidement.

console.log(1 + "43"); // 143 en String
console.log(1 + +"43"); // 44 en Number. Converti en Number puis additionne


console.log(parseInt('45'));
console.log(parseInt('45px')); // Peut convertir en number 


console.log(parseFloat('11.55'));


console.log(Number.isNaN(undefined));