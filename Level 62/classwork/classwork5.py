# Make a level 2 data hiding example

class Employee:
    def __init__(self, name, salary):
        self.name = name               #
        self.__salary = salary         
        self.__bonus = 5000           
    
    def get_salary(self):
        return self.__salary
    
    def set_salary(self, salary):
        if salary > 0:
            self.__salary = salary

    def get_bonus(self):
        return self.__bonus
    
    def set_bonus(self, bonus):
        if bonus >= 0:
            self.__bonus = bonus


emp = Employee("John", 50000)


print(emp.name)              
print(emp.get_salary())       
print(emp.get_bonus())        


emp.set_salary(55000)
emp.set_bonus(6000)

print(emp.get_salary())      
print(emp.get_bonus())       