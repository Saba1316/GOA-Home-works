# Practice exception handling, from 
# the tasks given in the class assignment, do the second to the fourth with different examples 
# (give different types of examples, just don't change the variable names)

name = "Saba"
try:
  print(city)
except NameError:
  print("Check the variable name")


sequence = [1, 2, 3, 4, 5]

try:
    print(sequence[6])
except IndexError:
    print("Error: Index out of range.")


a = 34
b = "Saba"

try:
	print(float(b))
	print(bool(b - a))
except ValueError:
	print("Error: Unable to convert the string to a float.")