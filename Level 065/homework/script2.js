// Make a password generator with javascript (use Math.random())


function generatePassword(length) {
    // Define character sets
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    // Combine all character sets into one
    const allCharacters = lowercase + uppercase + digits + specialChars;
    
    let password = '';
    
    // Generate password by randomly selecting characters from the combined set
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    
    return password;
}

// Example usage: Generate a 12-character long password
let password = generatePassword(12);
console.log("Generated Password:", password);
