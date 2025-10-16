
my_fav_numbers = [21, 30, 4,3]
print("My favorite numbers:", my_fav_numbers)

my_fav_numbers.extend([10, 42])
print("After adding numbers:", my_fav_numbers)

my_fav_numbers.pop(5)
print("After removing the last number:", my_fav_numbers)

friend_fav_numbers = [5, 7, 30]
print("Friend's favorite numbers:", friend_fav_numbers)

our_fav_numbers = my_fav_numbers + friend_fav_numbers

print("Our favorite numbers ", our_fav_numbers)