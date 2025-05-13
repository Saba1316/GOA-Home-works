# Write code where there will be NameError and handle it with try/except.

name = "Saba"
try:
  print(name)
except NameError:
  print("Check the variable name")