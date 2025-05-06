# 3) Write a Python program that converts a binary number to decimal

def binary_to_decimal(binary_num):
    decimal_num = 0
    binary_str = str(binary_num)
    
    for i in range(len(binary_str)):
        bit = int(binary_str[-(i + 1)])  # Get the bit from the right
        decimal_num += bit * (2 ** i)  # Calculate the decimal value
    
    return decimal_num

# Example usage:
binary_num = input("Enter a binary number: ")
decimal_num = binary_to_decimal(binary_num)
print(f"The decimal representation of {binary_num} is {decimal_num}")
