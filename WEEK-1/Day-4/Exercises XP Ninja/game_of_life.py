import time
import os

class GameOfLife:
    def __init__(self, rows, cols, initial_state=None):
        """
        Initialize the game with a fixed-size grid.

        :param rows: number of rows in the grid
        :param cols: number of columns in the grid
        :param initial_state: optional 2D list with 0/1 values
        """
        self.rows = rows
        self.cols = cols

        # If an initial state is given, use it
        if initial_state is not None:
            # We assume initial_state is a list of lists with the correct size
            self.grid = initial_state
        else:
            # Otherwise, start with an empty grid (all cells dead)
            self.grid = [[0 for _ in range(cols)] for _ in range(rows)]

    def set_cell(self, row, col, value):
        """
        Set a specific cell to alive (1) or dead (0).

        :param row: row index
        :param col: column index
        :param value: 1 for alive, 0 for dead
        """
        if 0 <= row < self.rows and 0 <= col < self.cols:
            self.grid[row][col] = 1 if value else 0

    def count_live_neighbors(self, row, col):
        """
        Count the number of live neighbors around a cell.

        Neighbors are the 8 surrounding cells (horizontal, vertical, diagonal).
        For fixed borders: if neighbor index is out of range, we ignore it.

        :param row: row index of the cell
        :param col: column index of the cell
        :return: number of live neighbors (0-8)
        """
        live_neighbors = 0

        # Check all positions around (row, col)
        for dr in [-1, 0, 1]:       # delta row
            for dc in [-1, 0, 1]:   # delta col
                # Skip the cell itself
                if dr == 0 and dc == 0:
                    continue

                neighbor_row = row + dr
                neighbor_col = col + dc

                # Check if neighbor is inside the grid (fixed borders)
                if 0 <= neighbor_row < self.rows and 0 <= neighbor_col < self.cols:
                    if self.grid[neighbor_row][neighbor_col] == 1:
                        live_neighbors += 1

        return live_neighbors

    def next_generation(self):
        """
        Compute the next generation of the grid, applying Conway's rules.

        Rules:
        1. Any live cell with fewer than two live neighbours dies (underpopulation).
        2. Any live cell with two or three live neighbours lives on to the next generation.
        3. Any live cell with more than three live neighbours dies (overpopulation).
        4. Any dead cell with exactly three live neighbours becomes a live cell (reproduction).
        """
        # Create a new grid for the next state
        new_grid = [[0 for _ in range(self.cols)] for _ in range(self.rows)]

        for row in range(self.rows):
            for col in range(self.cols):
                # Current cell state
                cell = self.grid[row][col]
                # Count live neighbors
                live_neighbors = self.count_live_neighbors(row, col)

                if cell == 1:
                    # Cell is currently alive
                    if live_neighbors < 2:
                        # Rule 1: dies by underpopulation
                        new_grid[row][col] = 0
                    elif live_neighbors in (2, 3):
                        # Rule 2: lives on to the next generation
                        new_grid[row][col] = 1
                    elif live_neighbors > 3:
                        # Rule 3: dies by overpopulation
                        new_grid[row][col] = 0
                else:
                    # Cell is currently dead
                    if live_neighbors == 3:
                        # Rule 4: becomes alive by reproduction
                        new_grid[row][col] = 1
                    else:
                        new_grid[row][col] = 0

        # Replace the old grid with the new one
        self.grid = new_grid

    def display(self):
        """
        Display the current grid in the console.

        We use '█' for alive cells and '.' for dead cells to make it visible.
        """
        # Clear the console for a nicer animation effect (optional)
        # Works on Windows and Unix-like systems
        if os.name == "nt":
            os.system("cls")
        else:
            os.system("clear")

        for row in range(self.rows):
            line = ""
            for col in range(self.cols):
                if self.grid[row][col] == 1:
                    # Alive cell
                    line += "█ "
                else:
                    # Dead cell
                    line += ". "
            print(line)
        print()  # Blank line after the grid

    def run(self, generations=10, delay=0.5):
        """
        Run the game for a given number of generations.

        :param generations: how many generations to simulate
        :param delay: time in seconds to wait between generations
        """
        for _ in range(generations):
            # Display the current state
            self.display()
            # Wait a bit so the user can see the change
            time.sleep(delay)
            # Move to the next generation
            self.next_generation()


# ---------------- EXAMPLES OF INITIAL STATES ---------------- #

def create_blinker():
    """
    Create a simple oscillator pattern called 'blinker'.
    It flips between vertical and horizontal line of 3 cells.
    """
    rows, cols = 5, 5
    grid = [[0 for _ in range(cols)] for _ in range(rows)]

    # Middle row, three live cells
    grid[2][1] = 1
    grid[2][2] = 1
    grid[2][3] = 1

    return rows, cols, grid


def create_glider():
    """
    Create a 'glider' pattern that moves diagonally.
    """
    rows, cols = 10, 10
    grid = [[0 for _ in range(cols)] for _ in range(rows)]

    # Glider pattern coordinates
    grid[1][2] = 1
    grid[2][3] = 1
    grid[3][1] = 1
    grid[3][2] = 1
    grid[3][3] = 1

    return rows, cols, grid


if __name__ == "__main__":
    # Example 1: run the blinker pattern
    # rows, cols, initial = create_blinker()

    # Example 2: run the glider pattern
    rows, cols, initial = create_glider()

    game = GameOfLife(rows, cols, initial_state=initial)
    # Run the game for 30 generations with 0.2 second between each generation
    game.run(generations=30, delay=0.2)
