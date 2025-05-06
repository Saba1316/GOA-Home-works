# Create a dictionary where you will have products, their values ​​should be booleans (these booleans describe whether an item is in stock or not) 
# your duty is to pass the filter function and display only those that are not in stock

products = {
    "apple": True,
    "banana": False,
    "orange": True,
    "grape": False,
    "pear": True
}

out_of_stock = filter(lambda item: not products[item], products)

out_of_stock_list = list(out_of_stock)
print("Products not in stock:", out_of_stock_list)