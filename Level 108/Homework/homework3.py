# Codewars 6 kyu: Colorful Number


# function colourful(n) {
#   const digits = n.toString().split('').map(Number);
#   const products = new Set();

#   for (let start = 0; start < digits.length; start++) {
#     let product = 1;
#     for (let end = start; end < digits.length; end++) {
#       product *= digits[end];
#       if (products.has(product)) {
#         return false;
#       }
#       products.add(product);
#     }
#   }

#   return true;
# }