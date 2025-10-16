// Map key to sound
const keySoundMap = {
    'a': 'kick',
    's': 'snare',
    'd': 'hihat',
    'f': 'openhat',
    'g': 'ride',
    'h': 'tom',
    'b':'boom',
    't':'tink'
};

// Play sound function
function playSound(soundName) {
    const audio = new Audio(`sounds/${soundName}.wav`); // 
    audio.play();
}

// Click event
document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', function() {
        const sound = this.dataset.sound;
        playSound(sound);
    });
});

// Keyboard event
document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    if(keySoundMap[key]) {
        playSound(keySoundMap[key]);
    }
});
