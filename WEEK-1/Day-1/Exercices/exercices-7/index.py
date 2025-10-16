

#Create the initial list
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print("Initial basket:", basket)

#Remove Banana from the list
basket.remove("Banana")
print("After removing Banana:", basket)

#Remove Blueberries from the list
basket.remove("Blueberries")
print("After removing Blueberries:", basket)

# Add Kiwi to the end of the list
basket.append("Kiwi")
print("After adding Kiwi:", basket)

#Add Apples to the beginning of the list
basket.insert(0, "Apples")
print("After adding Apples at the beginning:", basket)

#Count how many apples are in the basket
apple_count = basket.count("Apples")
print("Number of Apples in the basket:", apple_count)

#Empty the basket
basket.clear()
print("Basket after emptying:", basket)
