// ESModules 

// 3 Examples

export function add(a, b) {
    return a + b;
  }

  
  import { add } from './math.js';
  console.log(add(2, 3)); // 5

  
// math.js
export default function multiply(a, b) {
    return a * b;
  }  