
# Exercise 3: Working on a paragraph

paragraph = """Python is a powerful programming language. It is widely used for web development, data analysis, artificial intelligence, and more. Many beginners start learning Python because of its simplicity and readability. Practicing coding regularly helps improve your skills."""

num_chars = len(paragraph)

sentences = [s.strip() for s in paragraph.replace('!', '.').replace('?', '.').split('.') if s]
num_sentences = len(sentences)
words = paragraph.split()
num_words = len(words)
unique_words = set(words)
num_unique_words = len(unique_words)

non_whitespace_chars = len(paragraph.replace(" ", ""))
avg_words_per_sentence = num_words / num_sentences

num_non_unique_words = num_words - num_unique_words
print("Paragraph Analysis:")
print(f"Total characters: {num_chars}")
print(f"Total sentences: {num_sentences}")
print(f"Total words: {num_words}")
print(f"Unique words: {num_unique_words}")
print(f"Non-whitespace characters: {non_whitespace_chars}")
print(f"Average words per sentence: {avg_words_per_sentence:.2f}")
print(f"Non-unique words: {num_non_unique_words}")
