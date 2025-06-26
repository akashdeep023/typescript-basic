// import modules

import { add } from "./math";
// import Calculator from "./calculator";
import AnyName from "./calculator";

add(1, 2);

// const calc = new Calculator();
const calc = new AnyName();
console.log(calc.add(10, 5));
