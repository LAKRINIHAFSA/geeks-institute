#Exercise 3 : Dogs Domesticated
from index import Dog
import random  # Import random to choose a random trick

# PetDog class that inherits from Dog
class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        # Use super() to initialize the Dog part
        super().__init__(name, age, weight)
        # Additional attribute specific to PetDog
        self.trained = trained

    def train(self):
        # Print the barking sound
        print(self.bark())
        # Set trained to True
        self.trained = True

    def play(self, *dogs):
        # Build a list of all dog names (including self)
        dog_names = [self.name] + [dog.name for dog in dogs]
        # Join names with comma and space
        names_str = ", ".join(dog_names)
        print(f"{names_str} all play together")

    def do_a_trick(self):
        # Only perform a trick if the dog is trained
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead",
            ]
            # Choose a random trick to perform
            print(random.choice(tricks))
        else:
            # If not trained, print a message (optional for clarity)
            print(f"{self.name} is not trained yet and cannot do a trick.")


# Example usage
pet_dog1 = PetDog(name="Rocky", age=3, weight=15)
pet_dog2 = PetDog(name="Lucky", age=4, weight=12)
pet_dog3 = PetDog(name="Bella", age=2, weight=10)

# Train one dog and make them play and do tricks
pet_dog1.train()
pet_dog1.play(pet_dog2, pet_dog3)
pet_dog1.do_a_trick()
