#Exercise 1: Bank Account

class BankAccount:
    def __init__(self, balance=0, username="", password=""):
        # Initialize balance and login credentials
        self.balance = balance
        self.username = username
        self.password = password
        # Authentication flag
        self.authenticated = False

    def authenticate(self, username, password):
        # Check if the given credentials match the stored ones
        if username == self.username and password == self.password:
            self.authenticated = True
        else:
            self.authenticated = False

    def deposit(self, amount):
        # Ensure the user is authenticated before allowing deposit
        if not self.authenticated:
            raise Exception("You must be authenticated to deposit money")

        # Validate that amount is a positive integer
        if not isinstance(amount, int) or amount <= 0:
            raise Exception("Deposit amount must be a positive integer")

        # Update balance
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        # Ensure the user is authenticated before allowing withdrawal
        if not self.authenticated:
            raise Exception("You must be authenticated to withdraw money")

        # Validate that amount is a positive integer
        if not isinstance(amount, int) or amount <= 0:
            raise Exception("Withdraw amount must be a positive integer")

        # Update balance
        self.balance -= amount
        return self.balance


class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance=0, username="", password="", minimum_balance=0):
        # Initialize parent class with balance and credentials
        super().__init__(balance, username, password)
        # Set minimum balance allowed
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        # Ensure the user is authenticated before allowing withdrawal
        if not self.authenticated:
            raise Exception("You must be authenticated to withdraw money")

        # Validate that amount is a positive integer
        if not isinstance(amount, int) or amount <= 0:
            raise Exception("Withdraw amount must be a positive integer")

        # Calculate new balance
        new_balance = self.balance - amount

        # Check if new balance respects the minimum balance rule
        if new_balance < self.minimum_balance:
            raise Exception("Cannot withdraw: balance would go below minimum balance")

        # Update balance
        self.balance = new_balance
        return self.balance


class ATM:
    def __init__(self, account_list, try_limit):
        # Validate account_list type
        if not isinstance(account_list, list):
            raise Exception("account_list must be a list")

        # Ensure all accounts are instances of BankAccount (or subclasses)
        for account in account_list:
            if not isinstance(account, BankAccount):
                raise Exception("All items in account_list must be BankAccount or MinimumBalanceAccount instances")

        self.account_list = account_list

        # Validate try_limit
        if not isinstance(try_limit, int) or try_limit <= 0:
            raise Exception("try_limit must be a positive integer")

        self.try_limit = try_limit
        self.current_tries = 0

        # Start main menu
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\n--- Main Menu ---")
            print("1. Log in")
            print("2. Exit")

            choice = input("Choose an option (1 or 2): ")

            if choice == "1":
                username = input("Enter username: ")
                password = input("Enter password: ")
                self.log_in(username, password)
            elif choice == "2":
                print("Goodbye!")
                break
            else:
                print("Invalid choice, please try again.")

    def log_in(self, username, password):
        # Try to find an account with matching credentials
        for account in self.account_list:
            account.authenticate(username, password)
            if account.authenticated:
                # Reset tries and open account menu
                self.current_tries = 0
                print(f"\nLogin successful. Welcome {username}!")
                self.show_account_menu(account)
                return

        # If no account matched
        self.current_tries += 1
        print("Login failed. Username or password is incorrect.")

        if self.current_tries >= self.try_limit:
            print("You have reached the maximum number of tries. Shutting down the ATM.")
            raise SystemExit()
        else:
            print(f"Tries left: {self.try_limit - self.current_tries}")

    def show_account_menu(self, account):
        while True:
            print("\n--- Account Menu ---")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Show balance")
            print("4. Exit to main menu")

            choice = input("Choose an option (1, 2, 3 or 4): ")

            if choice == "1":
                amount_str = input("Enter amount to deposit: ")
                try:
                    amount = int(amount_str)
                    account.deposit(amount)
                    print(f"Deposit successful. New balance: {account.balance}")
                except Exception as e:
                    print(f"Error: {e}")

            elif choice == "2":
                amount_str = input("Enter amount to withdraw: ")
                try:
                    amount = int(amount_str)
                    account.withdraw(amount)
                    print(f"Withdrawal successful. New balance: {account.balance}")
                except Exception as e:
                    print(f"Error: {e}")

            elif choice == "3":
                print(f"Current balance: {account.balance}")

            elif choice == "4":
                print("Returning to main menu...")
                break
            else:
                print("Invalid choice, please try again.")
