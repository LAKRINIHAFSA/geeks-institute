import math

import turtle


class Circle:
    def __init__(self, radius=None, diameter=None):
        """
        Initialize a Circle instance.

        You can create a circle by passing either a radius or a diameter.
        Internally we store only the radius.
        """
        if radius is not None and diameter is not None:
            # If both are given, we choose radius and ignore diameter
            self._radius = float(radius)
        elif radius is not None:
            # If only radius is given
            self._radius = float(radius)
        elif diameter is not None:
            # If only diameter is given, compute radius from diameter
            self._radius = float(diameter) / 2
        else:
            # If nothing is given, default radius is 1
            self._radius = 1.0

    @property
    def radius(self):
        """
        Get the radius of the circle.
        """
        return self._radius

    @radius.setter
    def radius(self, value):
        """
        Set the radius of the circle.
        Automatically update the internal value.
        """
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = float(value)

    @property
    def diameter(self):
        """
        Get the diameter of the circle.
        Diameter is always 2 * radius.
        """
        return self._radius * 2

    @diameter.setter
    def diameter(self, value):
        """
        Set the diameter of the circle.
        This will automatically update the radius.
        """
        if value < 0:
            raise ValueError("Diameter cannot be negative")
        self._radius = float(value) / 2

    @property
    def area(self):
        """
        Compute and return the area of the circle.
        Formula: π * r^2
        """
        return math.pi * (self._radius ** 2)

    def __str__(self):
        """
        Return a readable string representation of the circle.
        This is used, for example, when we print(circle).
        """
        return f"Circle(radius={self.radius:.2f}, diameter={self.diameter:.2f}, area={self.area:.2f})"

    def __repr__(self):
        """
        Return an unambiguous string representation of the circle.
        Useful in lists and debugging.
        """
        return f"Circle(radius={self.radius})"

    def __add__(self, other):
        """
        Add two circles together and return a NEW Circle.

        The new circle radius is the sum of the two radii.
        """
        if not isinstance(other, Circle):
            return NotImplemented
        # Create a new Circle with radius = sum of both radii
        new_radius = self.radius + other.radius
        return Circle(radius=new_radius)

    def __lt__(self, other):
        """
        Compare two circles to check if this circle is smaller than another one.

        This allows sorting and using < operator.
        """
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius < other.radius

    def __eq__(self, other):
        """
        Compare two circles to check if they are equal.

        They are equal if their radii are equal.
        """
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius == other.radius


# -EXAMPLE USAGE (for testing) -- #

if __name__ == "__main__":
    # Create some circles in different ways
    c1 = Circle(radius=2)
    c2 = Circle(diameter=10)  # radius will be 5
    c3 = Circle(radius=5)
    c4 = Circle()  # default radius 1

    # Print their attributes using __str__
    print(c1)
    print(c2)
    print(c3)
    print(c4)

    # Add two circles together
    c5 = c1 + c2
    print("c5 (c1 + c2):", c5)

    # Compare two circles
    print("Is c1 < c2 ?", c1 < c2)     # True
    print("Is c2 == c3 ?", c2 == c3)   # True (same radius 5)
    print("Is c1 == c4 ?", c1 == c4)   # False

    # Put them in a list and sort them
    circles = [c1, c2, c3, c4, c5]
    print("Before sorting:", circles)
    circles.sort()  # Uses __lt__ method
    print("After sorting:", circles)

    # --- BONUS (not mandatory) --- #
    # Draw sorted circles using turtle 
    
    # Initialize turtle screen
    screen = turtle.Screen()
    screen.title("Sorted Circles")

    t = turtle.Turtle()
    t.speed(0)  # Fastest speed

    # Start position for drawing
    start_x = -200
    start_y = 0

    # Draw each circle side by side
    for i, circle in enumerate(circles):
        t.penup()
        # Move turtle to a new x position for each circle
        t.goto(start_x + i * 100, start_y - circle.radius)
        t.pendown()
        # Draw a circle with radius equal to circle.radius
        t.circle(circle.radius)

    # Keep the window open until clicked
    screen.exitonclick()

