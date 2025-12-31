# Daily Challenge: Dictionaries
# Create a dictionary mapping each letter to its positions in a word

# Ask user for a word
word = input("Enter a word: ")

# Convert the word to lowercase for consistency
word = word.lower()

# Initialize an empty dictionary to store letters and their indexes
letter_positions = {}

# Iterate through each character in the word with its index
for index, letter in enumerate(word):
    # Check if the letter already exists in the dictionary
    if letter in letter_positions:
        # If it exists, append the new index to the existing list
        letter_positions[letter].append(index)
    else:
        # If it doesn't exist, create a new entry with a list containing the index
        letter_positions[letter] = [index]

# Display the result dictionary
print(letter_positions)
