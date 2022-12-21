

// Méthode Math natif en JS
console.log('Math :');

const a = Math.pow(2,3) // 2^3
console.log(a);

const b = Math.ceil(1.2) // Arrondi à la valeur supérieure
console.log(b);

const c = Math.floor(3.7) // Arondi à entier inférieur
console.log(c);

const d = Math.round(1.4)   // Arrondi au plus proche
console.log(d);

const e = Math.max(10, 8, 55, 3, 98)    // Renvoie uniqumeent la valeur max - Ideal pour tableau
console.log(e);

const f = Math.random();    // Numéro aléatoire entre 0 et 1
console.log(f);

const g = Math.round(Math.random() * 100);  // Pour un nombre entier aléatoire entre 0 et 100.
console.log(g);

const h = Math.round((Math.random() * 10) % 5)    // Pour un nombre entre 0 et 5
console.log(h);