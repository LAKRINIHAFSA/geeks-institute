#Exercise 3: Restaurant Menu Manager
class MenuManager:
    def __init__(self):
        self.menu = [
            {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True}
        ]
    
    def add_item(self, name, price, spice, gluten):
        new_dish = {"name": name, "price": price, "spice": spice, "gluten": gluten}
        self.menu.append(new_dish)
        print(f"'{name}' has been added to the menu.")
    
    def update_item(self, name, price, spice, gluten):
        for dish in self.menu:
            if dish["name"] == name:
                dish["price"] = price
                dish["spice"] = spice
                dish["gluten"] = gluten
                print(f"'{name}' has been updated.")
                return
        print(f"Sorry, '{name}' is not in the menu.")
    
    def remove_item(self, name):
        for i, dish in enumerate(self.menu):
            if dish["name"] == name:
                self.menu.pop(i)
                print(f"'{name}' has been removed from the menu.")
                print(f"Updated menu: {self.menu}")
                return
        print(f"Sorry, '{name}' is not in the menu.")
