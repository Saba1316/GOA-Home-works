# Do anything with everything we've learned so far in OOP


class Employee:
    # Class attribute to track number of employees
    _employee_count = 0
    
    def __init__(self, name, salary):
        """Instance method: Initialize an employee's name and salary."""
        self.name = name
        self.salary = salary
        Employee._employee_count += 1  # Increment the count whenever an instance is created
    
    # Instance method: Get the employee's details
    def get_details(self):
        return f"Name: {self.name}, Salary: {self.salary}"

    # Class method: Track the total number of employees
    @classmethod
    def get_employee_count(cls):
        return cls._employee_count
    
    # Class method: Alternative constructor to create an Employee from a dictionary
    @classmethod
    def from_dict(cls, data):
        return cls(data['name'], data['salary'])
    
    # Static method: Calculate tax based on salary (doesn't need to access instance or class)
    @staticmethod
    def calculate_tax(salary):
        # Let's assume a simple flat tax rate of 10%
        return salary * 0.10

# Create employees using instance methods
emp1 = Employee("Alice", 50000)
emp2 = Employee("Bob", 60000)

# Access instance method
print(emp1.get_details())  # Output: Name: Alice, Salary: 50000
print(emp2.get_details())  # Output: Name: Bob, Salary: 60000

# Access class method to get total employees
print(f"Total employees: {Employee.get_employee_count()}")  # Output: Total employees: 2

# Use the static method to calculate tax
print(f"Tax for Alice: {Employee.calculate_tax(emp1.salary)}")  # Output: Tax for Alice: 5000.0
print(f"Tax for Bob: {Employee.calculate_tax(emp2.salary)}")    # Output: Tax for Bob: 6000.0

# Use class method to create an employee from a dictionary (alternative constructor)
employee_data = {'name': 'Charlie', 'salary': 70000}
emp3 = Employee.from_dict(employee_data)
print(emp3.get_details())  # Output: Name: Charlie, Salary: 70000

# Check total number of employees again
print(f"Total employees: {Employee.get_employee_count()}")  # Output: Total employees: 3
