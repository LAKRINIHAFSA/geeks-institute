
import random  # We use this to choose a random item for the computer


class Game:
    def get_user_item(self):
        """
        Ask the user to choose rock/paper/scissors.
        Keep asking until the user enters a valid choice.
        Return the chosen item as a string.
        """
        valid_items = ["rock", "paper", "scissors"]

        while True:
            # Ask the user for an item
            user_input = input("Please choose (rock/paper/scissors): ").strip().lower()

            # Validate the input
            if user_input in valid_items:
                # Return the valid choice
                return user_input
            else:
                # Tell the user the input is invalid and loop again
                print("Invalid choice. Try again with rock, paper or scissors.")

    def get_computer_item(self):
        """
        Randomly choose rock/paper/scissors for the computer.
        Return the computer's item as a string.
        """
        items = ["rock", "paper", "scissors"]
        # random.choice picks a random element from the list
        computer_choice = random.choice(items)
        return computer_choice

    def get_game_result(self, user_item, computer_item):
        """
        Determine the result of the game.

        :param user_item: the user's choice (rock/paper/scissors)
        :param computer_item: the computer's choice (rock/paper/scissors)
        :return: 'win', 'loss' or 'draw'
        """
        # If both chose the same item, it is a draw
        if user_item == computer_item:
            return "draw"

        # All winning combinations for the user
        winning_combinations = {
            "rock": "scissors",     # rock beats scissors
            "paper": "rock",        # paper beats rock
            "scissors": "paper"     # scissors beat paper
        }

        # Check if the computer_item is exactly what the user_item beats
        if winning_combinations[user_item] == computer_item:
            # User wins
            return "win"
        else:
            # Otherwise, user loses
            return "loss"

    def play(self):
        """
        Play one game of rock-paper-scissors.

        1. Get the user's item.
        2. Get the computer's random item.
        3. Determine the result.
        4. Print a message describing the game.
        5. Return the result as 'win', 'loss' or 'draw'.
        """
        # Step 1: get user choice
        user_item = self.get_user_item()
        # Step 2: get computer choice
        computer_item = self.get_computer_item()
        # Step 3: get result of the game
        result = self.get_game_result(user_item, computer_item)

        # Build a message describing the selections
        base_message = f"You selected {user_item}. The computer selected {computer_item}. "

        # Add the result text depending on the result string
        if result == "win":
            base_message += "You win!"
        elif result == "loss":
            base_message += "You lose."
        else:
            base_message += "It's a draw!"

        # Print the message to the user
        print(base_message)

        # Return the result string
        return result
