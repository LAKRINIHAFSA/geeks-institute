
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name  
        self.age = cat_age    


# Define a function outside the class to find the oldest cat
def find_oldest_cat(cats):
    # Assume the first cat in the list is the oldest
    oldest = cats[0]

    # Loop through all cats
    for cat in cats:
        # Compare ages
        if cat.age > oldest.age:
            oldest = cat  # update the oldest cat
    return oldest  # return the oldest cat


# Instantiate 3 Cat objects
cat1 = Cat("Mimi", 3)
cat2 = Cat("Luna", 5)
cat3 = Cat("Simba", 2)

# Use the function to find the oldest cat
oldest_cat = find_oldest_cat([cat1, cat2, cat3])

# Print the result
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")
