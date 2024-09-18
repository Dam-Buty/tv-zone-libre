const fs = require("fs");
const path = require("path");

// Set here the JSON file you want to shuffle
const filePath = path.join(__dirname, "99.test.json");

let channelData = JSON.parse(fs.readFileSync(filePath, "utf8"));

if (Array.isArray(channelData.videos)) {
  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  channelData.videos = shuffleArray(channelData.videos);

  fs.writeFileSync(filePath, JSON.stringify(channelData, null, 2));
  console.log(`Shuffled videos and updated ${path.basename(filePath)}.`);
} else {
  console.log(`"videos" array not found in ${path.basename(filePath)}.`);
}
