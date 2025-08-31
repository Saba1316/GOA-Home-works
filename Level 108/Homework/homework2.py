# Codewars 6 kyu: Sentence Calculator


# function sentenceValue(sentence) {
#   return sentence.split('').reduce((sum, char) => {
#     if (char >= 'a' && char <= 'z') {
#       return sum + (char.charCodeAt(0) - 96); // 'a' = 97
#     } else if (char >= 'A' && char <= 'Z') {
#       return sum + 2 * (char.charCodeAt(0) - 64); // 'A' = 65
#     } else {
#       return sum; // ignore other characters
#     }
#   }, 0);
# }