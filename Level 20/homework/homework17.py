# Task 17: Test all methods or functions learned today.

# len()
str1 = "This string contains forty-two characters."
print(len(str1))

# .upper(), .lower()
string1 = "goa is the best"
print(string1.upper())
string2 = "GOA IS THE BEST"
print(string2.lower())

# .append(), .insert(), .pop()
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits)
fruits.pop()
print(fruits)
fruits.insert(0, "car")
print(fruits)

# .capitalize()
txt = "goa is the best academy ever"

x = txt.capitalize()

print(x)

# .find()
txt = "goa is the best academy ever"

x = txt.find("best")

print(x)