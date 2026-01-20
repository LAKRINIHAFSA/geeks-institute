
from game import Game  # Import the Game class from game.py


def get_user_menu_choice():
    """
    Display the main menu one time and get the user's choice.
    No loop inside this function.
    Return the user's choice as a string.
    Possible choices:
      'g' - play a new game
      's' - show scores
      'q' - quit the program
    """
    print("\n--- Rock Paper Scissors Menu ---")
    print("(g) Play a new game")
    print("(s) Show scores")
    print("(q) Quit")

    choice = input("Please choose (g/s/q): ").strip().lower()

    # Validate that the choice is one of the allowed options
    if choice not in ["g", "s", "q"]:
        # If invalid, we can return something like 'invalid'
        # The main() function will handle it
        return "invalid"

    return choice


def print_results(results):
    """
    Print the final results of all games played.

    :param results: dictionary with keys 'win', 'loss', 'draw'
                    and integer values for each result count.
                    Example: {'win': 2, 'loss': 4, 'draw': 3}
    """
    print("\n--- Game Results ---")

    # Get values from the dictionary, defaulting to 0 if key not found
    wins = results.get("win", 0)
    losses = results.get("loss", 0)
    draws = results.get("draw", 0)

    # Display the results in a user-friendly way
    print(f"Wins :  {wins}")
    print(f"Losses: {losses}")
    print(f"Draws:  {draws}")

    print("\nThank you for playing Rock Paper Scissors!")


def main():
    """
    Main function of the program.

    1. Repeatedly display the menu until the user wants to quit.
    2. When user chooses to play a game:
          - create a Game object and call its play() method
          - store the result in the results dictionary
    3. When user chooses to quit:
          - call print_results(results) to show a summary
    """
    # Dictionary to store results of all games
    results = {
        "win": 0,
        "loss": 0,
        "draw": 0
    }

    while True:
        # Show menu and get user choice (no loop inside this function)
        choice = get_user_menu_choice()

        if choice == "g":
            # User chose to play a new game
            game = Game()             # Create a new Game object
            result = game.play()      # Play one game and get the result string

            # Update the results dictionary
            if result in results:
                results[result] += 1
            else:
                # This should not happen, but we handle it for safety
                results[result] = 1

        elif choice == "s":
            # User chose to show scores (current results)
            print_results(results)

        elif choice == "q":
            # User chose to quit the program
            print_results(results)    # Show final summary before exiting
            break

        elif choice == "invalid":
            # User entered something invalid in the menu
            print("Invalid menu choice. Please enter g, s or q.")

        else:
            # Any other unexpected value (for safety)
            print("Unknown option. Please try again.")


# Run the program only if this file is executed directly
if __name__ == "__main__":
    main()
