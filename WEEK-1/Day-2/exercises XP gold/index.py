# Exercise 1: Birthday Look-up
# Create a dictionary with 5 people and their birthdays

# Initialize dictionary with person names as keys and birthdays as values (YYYY/MM/DD format)
birthdays = {
    "sara": "1995/03/15",
    "imade": "1992/07/22",
    "lina": "2000/11/08",
    "sami": "2001/05/30",
    "saad": "2006/12/25"
}

# Print welcome message
print("Welcome! You can look up the birthdays of the people in the list!")

# Ask user to enter a person's name
person_name = input("Enter a person's name: ")

# Get and print the birthday of the requested person
birthday = birthdays[person_name]
print(f"{person_name}'s birthday is {birthday}")
# Exercise 2: Birthdays Advanced
# Enhanced version with all names displayed and error handling

# Initialize dictionary with 5 people and their birthdays
birthdays = {
   "sara": "1995/03/15",
    "imade": "1992/07/22",
    "lina": "2000/11/08",
    "sami": "2001/05/30",
    "saad": "2006/12/25"
}

# Print welcome message
print("Welcome! You can look up the birthdays of the people in the list!")

# Print all names in the dictionary
print("Available names:", ", ".join(birthdays.keys()))

# Ask user to enter a person's name
person_name = input("Enter a person's name: ")

# Check if the person exists in the dictionary
if person_name in birthdays:
    # Print the birthday if person is found
    birthday = birthdays[person_name]
    print(f"{person_name}'s birthday is {birthday}")
else:
    # Print error message if person is not found
    print(f"Sorry, we don't have the birthday information for {person_name}")
# Exercise 3: Sum
# Function that calculates X + XX + XXX + XXXX

def sum_pattern(x):
    # Convert integer x to string to build the number pattern
    x_str = str(x)
    
    # Initialize result variable
    result = 0
    
    # Build and add each pattern: X, XX, XXX, XXXX
    result += int(x_str)              # X
    result += int(x_str + x_str)      # XX
    result += int(x_str + x_str + x_str)        # XXX
    result += int(x_str + x_str + x_str + x_str)  # XXXX
    
    # Return the total sum
    return result

# Test the function
x = int(input("Enter a number: "))
output = sum_pattern(x)
print(f"Result: {output}")
# Exercise 4: Double Dice
# Simulate rolling two dice until they match (doubles)

import random

# Function 1: Simulate rolling a single dice
def throw_dice():
    # Return a random integer between 1 and 6
    return random.randint(1, 6)

# Function 2: Keep throwing 2 dice until both show the same number
def throw_until_doubles():
    # Initialize counter to track number of throws
    throws = 0
    
    # Keep throwing until we get doubles
    while True:
        # Throw two dice
        dice1 = throw_dice()
        dice2 = throw_dice()
        
        # Increment throw counter
        throws += 1
        
        # Check if both dice show the same number (doubles)
        if dice1 == dice2:
            # Return total throws when doubles are reached
            return throws

# Function 3: Main function that throws doubles 100 times
def main():
    # Initialize list to store results of each double throw attempt
    results = []
    
    # Throw doubles 100 times
    for i in range(100):
        # Call throw_until_doubles and store the number of throws needed
        throws_needed = throw_until_doubles()
        results.append(throws_needed)
    
    # Calculate total throws across all 100 double attempts
    total_throws = sum(results)
    
    # Calculate average throws per double attempt (rounded to 2 decimal places)
    average_throws = round(total_throws / 100, 2)
    
    # Print total throws message
    print(f"Total throws: {total_throws}")
    
    # Print average throws message
    print(f"Average throws to reach doubles: {average_throws}")

# Call the main function to execute the program
main()
