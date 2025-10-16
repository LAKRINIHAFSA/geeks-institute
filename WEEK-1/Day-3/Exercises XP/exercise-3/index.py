
# 1 - Define the class Song
class Song:
    # __init__ method with lyrics (a list)
    def __init__(self, lyrics):
        self.lyrics = lyrics  # store lyrics as an attribute

    # 2 - Method to print each line of the song
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


# 3 - Instantiate a Song object with lyrics
stairway = Song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])

# 4 - Call the method to print the lyrics
stairway.sing_me_a_song()
