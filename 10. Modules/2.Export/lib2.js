
// Module Export

console.log('test');




// Export :
export let a;
export let b = 'b';
export function hello() {
    console.log('Hello !');
}
export const obj = {};

let c = 'c';
let d = 'd';
let e = 'e';

export {c, d, e}

// export par défaut
export default function i(){}

export {c, d, e, obj as default}