# 1 - Create a class called Dog
class Dog:
    # 2 - __init__ method with parameters name and height
    def __init__(self, name, height):
        self.name = name      # dog's name
        self.height = height  # dog's height in cm

    # 3 - Method bark
    def bark(self):
        print(f"{self.name} goes woof!")

    # 4 - Method jump
    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")


# 5 - Create an object called davids_dog
davids_dog = Dog("Rex", 50)

# 6 - Print details and call methods for davids_dog
print(f"David's dog name: {davids_dog.name}, height: {davids_dog.height} cm")
davids_dog.bark()
davids_dog.jump()


# 7 - Create an object called sarahs_dog
sarahs_dog = Dog("Teacup", 20)

# 8 - Print details and call methods for sarahs_dog
print(f"Sarah's dog name: {sarahs_dog.name}, height: {sarahs_dog.height} cm")
sarahs_dog.bark()
sarahs_dog.jump()


# 9 - If statement to check which dog is bigger
if davids_dog.height > sarahs_dog.height:
    print(f"The bigger dog is {davids_dog.name}")
else:
    print(f"The bigger dog is {sarahs_dog.name}")

