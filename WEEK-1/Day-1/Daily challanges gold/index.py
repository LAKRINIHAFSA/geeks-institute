from datetime import datetime

# Ask user for birthdate in format DD/MM/YYYY
birthdate_str = input("Enter your birthdate (DD/MM/YYYY): ")

# Parse the string to a datetime object
birthdate = datetime.strptime(birthdate_str, "%d/%m/%Y")

# Get today's date
today = datetime.today()

# Calculate age in years
age = today.year - birthdate.year

# Adjust age if birthday has not occurred yet this year
if (today.month, today.day) < (birthdate.month, birthdate.day):
    age -= 1

# Get the last digit of the age for number of candles
last_digit_age = age % 10

# Define a function to check if a year is a leap year
def is_leap_year(year: int) -> bool:
    # Leap year if divisible by 4 and not by 100, unless also divisible by 400
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

# Build the candle line with the correct number of 'i'
candles = "i" * last_digit_age

# Prepare the cake template using the candles string
cake = f"""___{candles}___
|:H:a:p:p:y:|
|___________|
|^^^^^^^^^^^|
|:B:i:r:t:h:d:a:y:|
|~~~~~~~~~~~|"""

# Decide how many cakes to print
if is_leap_year(birthdate.year):
    # If born in a leap year, print two cakes
    print(cake)
    print()
    print(cake)
else:
    # Otherwise, print one cake
    print(cake)
