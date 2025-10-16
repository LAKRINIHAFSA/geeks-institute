//  Exercise: Video class

// 1. Create the class
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time; // duration in seconds
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

// 2. Instantiate a new Video instance and call watch()
const video1 = new Video("JavaScript Basics", "Alice", 120);
video1.watch(); 
// Output: Alice watched all 120 seconds of JavaScript Basics!

// 3. Instantiate a second Video instance
const video2 = new Video("HTML Tutorial", "Bob", 90);
video2.watch(); 
// Output: Bob watched all 90 seconds of HTML Tutorial!

// 4. Bonus: Use an array to store data for 5 videos
const videosData = [
  ["CSS Tricks", "Charlie", 150],
  ["React Intro", "Diana", 200],
  ["Node.js Guide", "Eve", 180],
  ["Python Basics", "Frank", 220],
  ["MongoDB Tutorial", "Grace", 160]
];

// 5. Loop through the array to instantiate those instances
const videos = videosData.map(data => new Video(data[0], data[1], data[2]));

// Call watch() for each video
videos.forEach(video => video.watch());
