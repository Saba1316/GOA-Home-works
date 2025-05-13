# Write code where there will be ValueError and handle it with try/except.

a = 34
b = "Saba"

try:
	print(float(a))
	print(float(b))
except ValueError:
	print("Error: Unable to convert the string to a float.")