// Test the scope with yours (use all three keywords: var, let, const)

// Global scope
var globalVar = "I am a global var";
let globalLet = "I am a global let";
const globalConst = "I am a global const";

function testScope() {
    // Function scope
    var functionVar = "I am a function var";
    let functionLet = "I am a function let";
    const functionConst = "I am a function const";

    if (true) {
        // Block scope
        var blockVar = "I am a block var (not block-scoped)";
        let blockLet = "I am a block let";
        const blockConst = "I am a block const";
        
        console.log(blockVar); // Accessible inside block
        console.log(blockLet); // Accessible inside block
        console.log(blockConst); // Accessible inside block
    }

    console.log(functionVar); // Accessible inside function
    console.log(functionLet); // Accessible inside function
    console.log(functionConst); // Accessible inside function
    // Block-scoped variables (let, const) are not accessible outside the block
    // console.log(blockLet); // Error
    // console.log(blockConst); // Error
}

console.log(globalVar); // Accessible globally
console.log(globalLet); // Accessible globally
console.log(globalConst); // Accessible globally

testScope();

// Block-scoped variables are not accessible here
// console.log(blockLet); // Error
// console.log(blockConst); // Error
