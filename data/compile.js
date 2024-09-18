const fs = require("fs");
const path = require("path");

const directoryPath = __dirname;

const channels = [];

const files = fs.readdirSync(directoryPath);

const jsonFiles = files.filter(
  (file) => path.extname(file) === ".json" && file !== "data.json"
);

jsonFiles.forEach((file) => {
  const filePath = path.join(directoryPath, file);
  const data = fs.readFileSync(filePath, "utf8");
  const jsonData = JSON.parse(data);
  channels.push(jsonData);
});

fs.writeFileSync(
  path.join(directoryPath, "data.json"),
  JSON.stringify(channels)
);
