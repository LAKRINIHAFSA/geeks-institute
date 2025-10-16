
def make_shirt(size, text):
    print(f"The size of the shirt is {size} and the text is '{text}'")
make_shirt("large", "I love Python")
def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'")
make_shirt()
make_shirt("medium")
make_shirt("small", "Python is fun!")
make_shirt(text="Keep learning Python!", size="extra large")
