const alphabet = "abcdefghijklmnopqrstuvwxyz";

const letterSort = (inputValue) => {
    const lettersCount = {};

    for (const char of inputValue.toLowerCase()) {
        if (alphabet.includes(char)) {
            if (char in lettersCount) {
                lettersCount[char] += 1;
            } else {
                lettersCount[char] = 1;
            }
        }
    }

    const sortedLetters = Object.entries(lettersCount)
        .sort((a, b) => {
            if (b[1] !== a[1]) {
                return b[1] - a[1];
            } else {
                return a[0].localeCompare(b[0]);
            }
        });
        
    return sortedLetters;
}

export { letterSort };