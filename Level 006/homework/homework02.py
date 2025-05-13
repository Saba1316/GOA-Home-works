class Account:
    def __init__(self, first_name, last_name, age, password):
        # ინიციალიზაცია: მონაცემები
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.password = password

    def display_info(self):
        # მონაცემების გამოვლენა f-string-ის გამოყენებით
        print(f"მომხმარებელი: {self.first_name} {self.last_name}")
        print(f"ასაკი: {self.age}")
        print(f"პაროლი: {self.password}")

# მომხმარებლის მონაცემების მიღება
first_name = input("შეიტანეთ სახელი: ")
last_name = input("შეიტანეთ გვარი: ")
age = int(input("შეიტანეთ ასაკი: "))
password = input("შეიტანეთ პაროლი: ")

# Account ობიექტის შექმნა
account = Account(first_name, last_name, age, password)

# მონაცემების გამოტანა
account.display_info()
