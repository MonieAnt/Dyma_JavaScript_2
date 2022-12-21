
// JSON


// Initialement en XML : (Lourd)
{/* <object>
    <firstname>Jean</firstname>
    <lastname>Louis</lastname>
    <age>15</age>
</object> */}

const obj = {
    firstname: 'Jean',
    lastname: 'Louis',
    age: 15
}

// Format JSON : Juste de la data
    // '{
    //     "firstname": "Jean",
    //     "lastname": "Louis",
    //     "age": 15
    // }'


// Méthode pour transformer en JSON :
console.log(JSON.stringify(obj));

// Méthode pour récupérer un Objet JS depuis du JSON :
console.log(JSON.parse('{ "firstname": "Jean", "lastname": "Louis", "age": 15}'));