
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0
for member, age in family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    print(f"{member} has to pay ${cost}")
    total_cost += cost

print(f"Total cost for the family is: ${total_cost}")

user_family = {}
num_members = int(input("How many family members? "))

for num in range(num_members):
    name = input("Enter the name of the family member: ")
    age = int(input(f"Enter the age of {name}: "))
    user_family[name] = age

total_cost_user = 0
for member, age in user_family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    print(f"{member} has to pay ${cost}")
    total_cost_user += cost

print(f"Total cost for the family is: ${total_cost_user}")
