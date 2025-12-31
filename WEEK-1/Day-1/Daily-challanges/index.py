# Challenge 1: 
# Ask the user for a number
number = int(input("Enter a number: "))

# Ask the user for the desired list length
length = int(input("Enter the length: "))

# Create an empty list to store multiples
multiples_list = []

# Loop through range starting from 1 to length
for i in range(1, length + 1):
    # Calculate the multiple by multiplying number with counter
    multiple = number * i
    # Add the multiple to the list
    multiples_list.append(multiple)

# Display the result
print(multiples_list)
# Challenge 2: 

# Ask the user for a string
user_string = input("Enter your word: ")

# Initialize an empty string for the result
result = ""

# Loop through each character in the user string
for i in range(len(user_string)):
    # Check if this is the first character OR if current character is different from previous
    if i == 0 or user_string[i] != user_string[i - 1]:
        # Add the character to result only if it's not a duplicate of the previous one
        result += user_string[i]

# Display the cleaned string
print(result)
