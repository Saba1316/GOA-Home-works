// Nullish coalescing operator

// 3 Examples

let userInput = null;
let value = userInput ?? "Default";
console.log(value); // "Default"


let config = {
    theme: undefined
  };
  let theme = config.theme ?? "light";
  console.log(theme); // "light"



  function getName(name) {
    return name ?? "Anonymous";
  }
  console.log(getName("Lika")); // "Lika"
  console.log(getName(null));   // "Anonymous"