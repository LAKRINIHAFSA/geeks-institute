
import random

def get_random_temp():
    """Return a random integer temperature between -10 and 40."""
    return random.randint(-10, 40)

# Test the function
print(get_random_temp())
#2/3
def main():
     
    temp = get_random_temp()
    
    print(f"The temperature right now is {temp} degrees Celsius.")
     
    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don't forget your coat.")
    elif 16 < temp <= 23:
        print("Nice weather! A light jacket should be enough.")
    elif 24 <= temp <= 32:
        print("Warm weather! Enjoy your day outside.")
    elif 33 <= temp <= 40:
    
        print("It's hot! Stay hydrated and cool.")

main()

def get_random_temp(season):
    if season == "winter":
        return random.uniform(-10, 16)   
    elif season == "spring":
        return random.uniform(10, 23)    
    elif season == "summer":
        return random.uniform(24, 40)    
    elif season == "autumn" or season == "fall":
        return random.uniform(5, 20)     
    else:
        return random.uniform(-10, 40)   
    
def main(): 
    season = input("Enter a season (summer, autumn, winter, spring): ").lower()
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp:.1f} degrees Celsius.")  
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today ")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat ")
    elif 17 <= temp <= 23:
        print("Nice weather! Enjoy your day ")
    elif 24 <= temp <= 32:
        print("It's warm! Perfect for light clothes ")
    elif 33 <= temp <= 40:
        print("It's very hot! Stay hydrated and cool down ")
