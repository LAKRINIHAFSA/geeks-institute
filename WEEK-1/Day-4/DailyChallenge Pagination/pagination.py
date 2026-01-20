import math
# We need math.ceil to compute total number of pages

class Pagination:
    def __init__(self, items=None, page_size=10):
        """
        Initialize the Pagination object.

        :param items: optional list of items to paginate
        :param page_size: number of items per page (default is 10)
        """
        if items is None:
            # If items is None, use an empty list
            self.items = []
        else:
            # Otherwise, keep the given list
            self.items = items

        # Store page size
        self.page_size = page_size

        # Current page index (0-based)
        self.current_idx = 0

        # Compute total number of pages using math.ceil
        if len(self.items) == 0:
            # If there are no items, we still consider 1 page logically
            self.total_pages = 1
        else:
            self.total_pages = math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        """
        Return the items that are visible on the current page.
        """
        # Start index for the current page
        start = self.current_idx * self.page_size
        # End index for the current page
        end = start + self.page_size
        # Return the slice of items
        return self.items[start:end]

    def go_to_page(self, page_num):
        """
        Go to a specific page (1-based indexing).

        :param page_num: page number starting from 1
        :raises ValueError: if page_num is out of range
        """
        # Convert to internal index (0-based)
        internal_index = page_num - 1

        # Check if the index is valid
        if internal_index < 0 or internal_index >= self.total_pages:
            raise ValueError("Page number out of range")

        # Update current page index
        self.current_idx = internal_index

    def first_page(self):
        """
        Go to the first page.
        Returns self to allow method chaining.
        """
        self.current_idx = 0
        return self

    def last_page(self):
        """
        Go to the last page.
        Returns self to allow method chaining.
        """
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        """
        Go to the next page if possible.
        Returns self to allow method chaining.
        """
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        """
        Go to the previous page if possible.
        Returns self to allow method chaining.
        """
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def __str__(self):
        """
        Return a string with all visible items on the current page,
        each item on a new line.
        """
        visible = self.get_visible_items()
        return "\n".join(str(item) for item in visible)


if __name__ == "__main__":
    alphabetList = list("abcdefghijklmnopqrstuvwxyz")
    p = Pagination(alphabetList, 4)

    print(p.get_visible_items())        # ['a', 'b', 'c', 'd']

    p.next_page()
    print(p.get_visible_items())        # ['e', 'f', 'g', 'h']

    p.last_page()
    print(p.get_visible_items())        # ['y', 'z']

    p.go_to_page(10)
    print(p.current_idx + 1)            # Output: 7

    # This will raise ValueError:
    # p.go_to_page(0)
