
# Exercise 8: Sandwich Orders

#List of sandwich orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich",
                   "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", 
                   "Pastrami sandwich"]

#The deli ran out of pastrami, remove all occurrences using a while loop
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

print("Sandwich orders after removing pastrami:", sandwich_orders)

#Create an empty list for finished sandwiches
finished_sandwiches = []

#Prepare each sandwich: remove from sandwich_orders and add to finished_sandwiches
while sandwich_orders:
    sandwich = sandwich_orders.pop(0)  
    finished_sandwiches.append(sandwich)  
    print(f"I made your {sandwich.lower()}")  
# Finished sandwiches list
print("Finished sandwiches:", finished_sandwiches)
