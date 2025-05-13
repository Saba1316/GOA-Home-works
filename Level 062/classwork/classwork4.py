# Make a level 1 data hiding example

class Employee:
    def __init__(self, name, salary):
        self.name = name           
        self._salary = salary     
    
    def display_info(self):
        print(f"Employee Name: {self.name}")
        print(f"Employee Salary: {self._salary}")
    
    def get_salary(self):
        
        return self._salary
    
    def set_salary(self, salary):
        
        if salary > 0:
            self._salary = salary
        else:
            print("Salary cannot be negative.")
emp = Employee("John Doe", 50000)
print(f"Name: {emp.name}")
print(f"Salary (via getter): {emp.get_salary()}")
emp.set_salary(55000)
print(f"Updated Salary (via getter): {emp.get_salary()}")
emp.set_salary(-1000)  