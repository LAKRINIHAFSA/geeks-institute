
#Exercise 1: GeometryX

import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius
    
    def perimeter(self):
        return 2 * math.pi * self.radius
    
    def area(self):
        return math.pi * self.radius ** 2
    
    def definition(self):
        print("A circle is a simple closed shape with all points equidistant from the center.")
#Exercise 2: Custom List Class
import random

class MyList:
    def __init__(self, letters):
        self.letters = letters
    
    def reverse_list(self):
        return self.letters[::-1]
    
    def sort_list(self):
        return sorted(self.letters)
    
    def random_list(self):
        return [random.randint(1, 100) for _ in range(len(self.letters))]
