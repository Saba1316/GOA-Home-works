# Codewars 6 kyu: 
# FIXME: Hello


class Dinglemouse:
    def __init__(self):
        self.solut = {}
    
    def setName(self, name):
        self.solut['name'] = f"My name is {name}."
        return self
        
    def setAge(self, age):
        self.solut['age'] = f"I am {age}."
        return self
        
    def setSex(self,sex):
        self.solut['sex'] = f"I am {'male' if sex == 'M' else 'female'}."
        return self
        
    def hello(self):
        return " ".join([f"Hello."] + list(self.solut.values()))