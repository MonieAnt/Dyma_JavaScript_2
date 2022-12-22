import { a, b } from './lib3.js';
import { hello } from './lib3.js';
import { helloZ } from './lib3.js';

console.log(a);
console.log(b);
console.log(hello);

hello();

helloZ();




// Import All

import * as importBasket from './lib4.js';

console.log(importBasket.myBasket);

import './lib5.js';