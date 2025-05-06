# Understanding the code

def domain_name(url):
    x = url.replace("https://", "").replace("http://", "").replace("www.", "")
    x = x.split(".")
    return x[0]

print(domain_name("http://www.codewars.com/kata/"))

# Breaking it Down
# Removing Protocols (http:// or https://)
# "http://www.codewars.com/kata/" → "www.codewars.com/kata/"
# Removing "www."
# "www.codewars.com/kata/" → "codewars.com/kata/"
# Splitting at "."
# x = "codewars.com/kata/".split(".")
# This results in ['codewars', 'com/kata/']
# Returning the First Element
# The function returns x[0], which is "codewars".
# Final Output
# "codewars"
# Correct Answer
# ✅ "codewars" (highlighted in blue)