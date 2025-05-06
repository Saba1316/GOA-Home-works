# # Explain how to convert powers of 2 into binary system


# Converting powers of 2 into the binary system is quite simple. Each power of 2 corresponds to a single "1" in the binary system, and the position of that "1" corresponds to the exponent of 2.

# Here’s how it works:

# General Rule:
# 2
# 𝑛
# 2 
# n
#   in binary is represented by a "1" followed by n zeros.
# Examples:
# 2
# 0
# 2 
# 0
#  :

# 2
# 0
# =
# 1
# 2 
# 0
#  =1
# Binary: 1
# The exponent is 0, so there's only a "1" in the 2⁰ place.
# 2
# 1
# 2 
# 1
#  :

# 2
# 1
# =
# 2
# 2 
# 1
#  =2
# Binary: 10
# The exponent is 1, so there's a "1" in the 2¹ place and a "0" in the 2⁰ place.
# 2
# 2
# 2 
# 2
#  :

# 2
# 2
# =
# 4
# 2 
# 2
#  =4
# Binary: 100
# The exponent is 2, so the "1" is in the 2² place, followed by two zeros.
# 2
# 3
# 2 
# 3
#  :

# 2
# 3
# =
# 8
# 2 
# 3
#  =8
# Binary: 1000
# The exponent is 3, so the "1" is in the 2³ place, followed by three zeros.
# 2
# 4
# 2 
# 4
#  :

# 2
# 4
# =
# 16
# 2 
# 4
#  =16
# Binary: 10000
# The exponent is 4, so the "1" is in the 2⁴ place, followed by four zeros.
# Summary:
# The binary representation of any power of 2 follows the pattern:

# 2
# 𝑛
# 2 
# n
#   in binary is a "1" followed by n zeros.
# For example:

# 2
# 5
# 2 
# 5
#   → 100000
# 2
# 6
# 2 
# 6
#   → 1000000

# Converting a Fraction (Less Than 1) to Binary:
# Steps:
# Multiply the decimal number by 2.
# Record the integer part (either 0 or 1) as the next binary digit.
# Keep the fractional part (the part after the decimal) and repeat the process.
# Stop when the fractional part becomes 0, or if you reach the desired precision.