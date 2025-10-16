
# 1 - Define the Zoo class
class Zoo:
    # 2 - __init__ method with zoo_name
    def __init__(self, zoo_name):
        self.name = zoo_name       # name of the zoo
        self.animals = []          # list to store animals
    # Method to add a new animal if it doesn't exist
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    # Method to print all animals in the zoo
    def get_animals(self):
        print(self.animals)
    # Method to remove an animal if it exists
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    # Method to sort animals alphabetically and group by first letter
    def sort_animals(self):
        self.animal_groups = {}  # dictionary to store grouped animals
        for animal in sorted(self.animals):
            first_letter = animal[0].upper()
            if first_letter not in self.animal_groups:
                self.animal_groups[first_letter] = []
            self.animal_groups[first_letter].append(animal)
    # Method to print animals in each group
    def get_groups(self):
        for letter, animals in self.animal_groups.items():
            print(f"{letter}: {animals}")
# Create a zoo object
new_york_zoo = Zoo("New York Zoo")

# Add animals
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Eel")
new_york_zoo.add_animal("Emu")
new_york_zoo.add_animal("Giraffe")

# Print all animals
new_york_zoo.get_animals()

# Sell an animal
new_york_zoo.sell_animal("Eel")

# Print animals after selling
new_york_zoo.get_animals()

# Sort animals and group by first letter
new_york_zoo.sort_animals()

# Print groups
new_york_zoo.get_groups()

