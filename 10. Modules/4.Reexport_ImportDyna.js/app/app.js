
// import { login, logout } from './features/authentification/index.js';

// console.log('Module App.js loaded');

// login();
// logout();







console.log('Import Dynamique :');

const auth = import('./features/authentification/index.js');
// console.log(auth);

// Retourne une Promesse pour gérer un Event Async

auth.then( m => {
    console.log(m);

    m.login();

    m.logout();

})