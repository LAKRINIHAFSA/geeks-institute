
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
user_name = input("Enter your name: ")
if user_name in names:
    first_index = names.index(user_name)  
    print(f"The first occurrence of {user_name} is at index {first_index}")
else:
    print(f"{user_name} is not in the list")

