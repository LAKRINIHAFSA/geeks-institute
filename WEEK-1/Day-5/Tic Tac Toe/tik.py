# Tic Tac Toe game for two human players in the console

def display_board(board):
    """
    Display the current state of the Tic Tac Toe board.

    :param board: list of 9 elements representing the 3x3 grid
    """
    # We print the board in a 3x3 layout
    print("\n")
    print(f" {board[0]} | {board[1]} | {board[2]} ")
    print("---+---+---")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("---+---+---")
    print(f" {board[6]} | {board[7]} | {board[8]} ")
    print("\n")


def player_input(player, board):
    """
    Ask the current player to choose a position from 1 to 9.

    :param player: current player symbol ('X' or 'O')
    :param board: current board to check if the chosen position is free
    :return: integer index (0-8) where the player wants to place the mark
    """
    while True:
        choice = input(f"Player {player}, choose a position (1-9): ").strip()

        # Validate that the input is a digit
        if not choice.isdigit():
            print("Invalid input. Please enter a number between 1 and 9.")
            continue

        # Convert input to integer
        pos = int(choice)

        # Validate that the position is in the correct range
        if pos < 1 or pos > 9:
            print("Invalid number. Please choose a number between 1 and 9.")
            continue

        # Convert to 0-based index
        index = pos - 1

        # Check if the chosen cell is free
        if board[index] != " ":
            print("That position is already taken. Choose another one.")
            continue

        # If everything is valid, return the index
        return index


def check_win(board, player):
    """
    Check if the given player has won the game.

    :param board: list of 9 elements representing the grid
    :param player: player symbol ('X' or 'O')
    :return: True if the player has 3 in a row, otherwise False
    """
    # All possible winning combinations (indices)
    winning_combinations = [
        # Horizontal rows
        (0, 1, 2),
        (3, 4, 5),
        (6, 7, 8),
        # Vertical columns
        (0, 3, 6),
        (1, 4, 7),
        (2, 5, 8),
        # Diagonals
        (0, 4, 8),
        (2, 4, 6),
    ]

    # Check each combination to see if all positions contain the player's symbol
    for combo in winning_combinations:
        a, b, c = combo
        if board[a] == board[b] == board[c] == player:
            return True

    return False


def is_board_full(board):
    """
    Check if the board is full (no empty spaces).

    :param board: current board
    :return: True if full (tie), False otherwise
    """
    # If there is at least one empty space, the board is not full
    return " " not in board


def play():
    """
    Main game loop for Tic Tac Toe.

    1. Initialize an empty board.
    2. Alternate turns between Player X and Player O.
    3. After each move, check if the player has won or if the game is a tie.
    4. Ask if players want to play again at the end.
    """
    print("Welcome to Tic Tac Toe!")

    while True:
        # Create a board with 9 empty spaces
        board = [" "] * 9

        # X always starts first
        current_player = "X"
        game_over = False

        # Game loop for a single match
        while not game_over:
            # Display the current board
            display_board(board)

            # Ask the current player for a move
            index = player_input(current_player, board)

            # Place the player's mark on the board
            board[index] = current_player

            # Check if the current player has won
            if check_win(board, current_player):
                display_board(board)
                print(f"Player {current_player} wins! Congratulations!")
                game_over = True
            # If no winner, check if the board is full (tie)
            elif is_board_full(board):
                display_board(board)
                print("It's a tie! No more moves available.")
                game_over = True
            else:
                # Switch to the other player and continue
                current_player = "O" if current_player == "X" else "X"

        # Ask if players want to play another game
        again = input("Do you want to play again? (y/n): ").strip().lower()
        if again != "y":
            print("Thanks for playing Tic Tac Toe! Goodbye.")
            break


# Run the game only if this file is executed directly
if __name__ == "__main__":
    play()
