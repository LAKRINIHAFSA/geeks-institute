 #Exercise 1 : Pets
# Base class that manages a collection of animals
class Pets:
    def __init__(self, animals):
        # Store the list of animal instances
        self.animals = animals

    def walk(self):
        # Call the walk method on each animal in the list
        for animal in self.animals:
            print(animal.walk())


# Parent Cat class
class Cat:
    is_lazy = True  # Class attribute shared by all cats

    def __init__(self, name, age):
        # Instance attributes
        self.name = name
        self.age = age

    def walk(self):
        # Method that describes the cat walking
        return f'{self.name} is just walking around'


# Bengal cat that inherits from Cat
class Bengal(Cat):
    def sing(self, sounds):
        # Method specific to Bengal
        return f'{sounds}'


# Chartreux cat that inherits from Cat
class Chartreux(Cat):
    def sing(self, sounds):
        # Method specific to Chartreux
        return f'{sounds}'


# 1. Create another cat breed named Siamese which inherits from Cat
class Siamese(Cat):
    def sing(self, sounds):
        # Method specific to Siamese
        return f'{sounds}'


# 2. Create a list called all_cats with one Bengal, one Chartreux and one Siamese
bengal_cat = Bengal(name="Luna", age=3)
chartreux_cat = Chartreux(name="Milo", age=4)
siamese_cat = Siamese(name="Bella", age=2)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

# 3. Sara’s pets: create a Pets instance with all_cats
sara_pets = Pets(animals=all_cats)

# 4. Take all the cats for a walk
sara_pets.walk()
# Exercise 2 : Dogs
# Class that represents a dog
class Dog:
    def __init__(self, name, age, weight):
        # Basic attributes of the dog
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        # Return a sentence that the dog is barking
        return f"{self.name} is barking"

    def run_speed(self):
        # Calculate running speed using the given formula
        # Note: we assume age is not zero to avoid division by zero
        return self.weight / self.age * 10

    def fight(self, other_dog):
        # Calculate the "power" of each dog as run_speed * weight
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        # Compare the powers and return the winner
        if self_power > other_power:
            return f"{self.name} won the fight"
        elif self_power < other_power:
            return f"{other_dog.name} won the fight"
        else:
            return "It is a draw"


# 3. Create 3 dogs and test the class
dog1 = Dog(name="Rex", age=5, weight=20)
dog2 = Dog(name="Buddy", age=3, weight=18)
dog3 = Dog(name="Max", age=4, weight=25)

# Example usages (you can adapt or remove prints for the platform)
print(dog1.bark())
print(dog2.bark())
print(dog3.bark())

print("Dog1 speed:", dog1.run_speed())
print("Dog2 speed:", dog2.run_speed())
print("Dog3 speed:", dog3.run_speed())

print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog3.fight(dog1))
# Exercise 3 : Dogs Domesticated(dog.py)
# Exercise 4 : Family
# Class that represents a family
class Family:
    def __init__(self, members, last_name):
        # members is a list of dictionaries with information about each member
        self.members = members
        # last_name is the family last name
        self.last_name = last_name

    def born(self, **kwargs):
        # Add a new child (dictionary) to the members list
        self.members.append(kwargs)
        # Print a congratulation message
        print(f"Congratulations to the {self.last_name} family for the new baby {kwargs.get('name', 'Unknown')}!")

    def is_18(self, name):
        # Check if a member with the given name is 18 or older
        for member in self.members:
            if member.get('name') == name:
                # Return True if age >= 18, else False
                return member.get('age', 0) >= 18
        # If no member with that name is found, return False
        return False

    def family_presentation(self):
        # Print the family last name
        print(f"The {self.last_name} family:")
        # Print all members' details
        for member in self.members:
            print(member)


# 3. Create an instance of the Family class and test the methods
members_list = [
    {
        'name': 'Michael',
        'age': 35,
        'gender': 'Male',
        'is_child': False
    },
    {
        'name': 'Sarah',
        'age': 32,
        'gender': 'Female',
        'is_child': False
    }
]

my_family = Family(members=members_list, last_name="Smith")

# Call family_presentation
my_family.family_presentation()

# Check if Michael is over 18
print("Is Michael over 18?", my_family.is_18("Michael"))

# Add a new child using born
my_family.born(name="Tom", age=2, gender="Male", is_child=True)

# Present the family again after adding the child
my_family.family_presentation()
# Exercise 5 : TheIncredibles Family
# Base Family class
class Family:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        # Add a new member (child) to the list
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family for the new baby {kwargs.get('name', 'Unknown')}!")

    def is_18(self, name):
        # Check if a member is 18 or older
        for member in self.members:
            if member.get('name') == name:
                return member.get('age', 0) >= 18
        return False

    def family_presentation(self):
        # Print last name and all member details
        print(f"The {self.last_name} family:")
        for member in self.members:
            print(member)


# TheIncredibles class that inherits from Family
class TheIncredibles(Family):
    def use_power(self, name):
        # Try to print the power of the member if they are over 18
        for member in self.members:
            if member.get('name') == name:
                if member.get('age', 0) >= 18:
                    # Member is old enough, print their power
                    print(f"{name}'s power is: {member.get('power')}")
                else:
                    # Raise an exception if member is not over 18
                    raise Exception(f"{name} is not over 18 years old")
                return
        # If no member found with that name
        print(f"No family member named {name} found.")

    def incredible_presentation(self):
        # Print custom sentence first
        print("*** Here is our powerful family ***")
        # Call parent method to print last name and members
        super().family_presentation()


# 4. Create an instance of TheIncredibles with given data
incredibles_members = [
    {
        'name': 'Michael',
        'age': 35,
        'gender': 'Male',
        'is_child': False,
        'power': 'fly',
        'incredible_name': 'MikeFly'
    },
    {
        'name': 'Sarah',
        'age': 32,
        'gender': 'Female',
        'is_child': False,
        'power': 'read minds',
        'incredible_name': 'SuperWoman'
    }
]

incredibles_family = TheIncredibles(members=incredibles_members, last_name="Incredibles")

# 5. Call incredible_presentation
incredibles_family.incredible_presentation()

# 6. Use born to add Baby Jack with “Unknown Power”
incredibles_family.born(
    name="Baby Jack",
    age=1,
    gender="Male",
    is_child=True,
    power="Unknown Power",
    incredible_name="BabyJack"
)

# 7. Call incredible_presentation again
incredibles_family.incredible_presentation()

# Example of using use_power method
incredibles_family.use_power("Michael")
