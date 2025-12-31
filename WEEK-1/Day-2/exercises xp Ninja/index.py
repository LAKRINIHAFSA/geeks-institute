# Exercise 1: Cars

cars_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# Convert the string into a list by splitting on comma and space
cars_list = [car.strip() for car in cars_string.split(", ")]

# Print total number of manufacturers in the list
print(f"Number of manufacturers: {len(cars_list)}")

# Print the list in reverse/descending order (Z-A)
print("Manufacturers in reverse order:", sorted(cars_list, reverse=True))

# Count manufacturers with letter 'o' using list comprehension
cars_with_o = [car for car in cars_list if 'o' in car.lower()]
print(f"Manufacturers with letter 'o': {len(cars_with_o)}")

# Count manufacturers without letter 'i' using list comprehension
cars_without_i = [car for car in cars_list if 'i' not in car.lower()]
print(f"Manufacturers without letter 'i': {len(cars_without_i)}")

# BONUS 1: Remove duplicates from a list with duplicates
cars_with_duplicates = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

# Convert list to set to remove duplicates, then convert back to list
unique_cars = list(set(cars_with_duplicates))

# Sort the unique cars alphabetically
unique_cars_sorted = sorted(unique_cars)

# Print as comma-separated string without line breaks
cars_string_output = ", ".join(unique_cars_sorted)
print(f"Companies without duplicates: {cars_string_output}")
print(f"Number of companies after removing duplicates: {len(unique_cars)}")

# BONUS 2: Print manufacturers in ascending order (A-Z) with reversed letters
print("\nManufacturers in ascending order with reversed letters:")
for car in sorted(cars_list):
    # Reverse the letters of each manufacturer's name
    reversed_car = car[::-1]
    print(reversed_car)
# Exercise 2: What's your name?
# Function with optional parameter

def get_full_name(first_name, last_name, middle_name=None):
    # Check if middle_name is provided (not None)
    if middle_name:
        # Capitalize each part and combine with spaces
        return f"{first_name.capitalize()} {middle_name.capitalize()} {last_name.capitalize()}"
    else:
        # If no middle name, return only first and last name
        return f"{first_name.capitalize()} {last_name.capitalize()}"

# Test case 1: With middle name
full_name_1 = get_full_name(first_name="john", middle_name="hooker", last_name="lee")
print(full_name_1)  # Output: John Hooker Lee

# Test case 2: Without middle name
full_name_2 = get_full_name(first_name="bruce", last_name="lee")
print(full_name_2)  # Output: Bruce Lee
# Exercise 3: From English to Morse
# Convert between English and Morse code

# Morse code translation dictionary
morse_code_dict = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..',
    "'": '.----.' , '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
    '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.',
    '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
}

# Create reverse dictionary for Morse to English conversion
reverse_morse_dict = {v: k for k, v in morse_code_dict.items()}

def english_to_morse(text):
    # Convert input text to uppercase for processing
    text = text.upper()
    # List to store morse code for each character
    morse_result = []
    
    # Iterate through each character in the text
    for char in text:
        if char == ' ':
            # Word separator in morse code
            morse_result.append('/')
        elif char in morse_code_dict:
            # Add morse code for the character
            morse_result.append(morse_code_dict[char])
    
    # Join all morse codes with space between letters and slash between words
    return ' '.join(morse_result)

def morse_to_english(morse_text):
    # Split morse text by slash to separate words
    morse_words = morse_text.split(' / ')
    # List to store decoded words
    english_words = []
    
    # Process each word in morse code
    for morse_word in morse_words:
        # Split each word by space to get individual morse characters
        morse_chars = morse_word.split(' ')
        # List to store decoded characters
        english_chars = []
        
        # Convert each morse character to English
        for morse_char in morse_chars:
            if morse_char in reverse_morse_dict:
                # Add the decoded character
                english_chars.append(reverse_morse_dict[morse_char])
        
        # Join characters to form a word
        english_words.append(''.join(english_chars))
    
    # Join words with spaces
    return ' '.join(english_words)

# Test the functions
# English to Morse conversion
english_text = "hello world"
morse_text = english_to_morse(english_text)
print(f"English: {english_text}")
print(f"Morse: {morse_text}")

# Morse to English conversion
morse_input = ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
english_output = morse_to_english(morse_input)
print(f"\nMorse: {morse_input}")
print(f"English: {english_output}")
