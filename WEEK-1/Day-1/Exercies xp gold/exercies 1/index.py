

month = int(input("Enter the month number (1-12): "))
if 3 <= month <= 5:
    print("The season is Spring ")
elif 6 <= month <= 8:
    print("The season is Summer ")
elif 9 <= month <= 11:
    print("The season is Autumn ")
elif month == 12 or 1 <= month <= 2:
    print("The season is Winter ")
else:
    print("Invalid month number! Please enter a number from 1 to 12.")
