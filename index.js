const fs = require('fs');
const path = require("path");
const sDataFolder = path.join(__dirname, 'data/');
const fetchSectorWorlds = require('./libs/sectors');

// check we have this folder
try {
  if(!fs.existsSync(sDataFolder)) {
    console.log(`The folder ${sDataFolder} does not exist.`);
    fs.mkdirSync(path.join(__dirname, "data"));
  }
} catch (err) {
  console.error(err);
  process.exit(1);
}

// Configure this
const sSector = 'Reft';
const bRefManualData = false;

fetchSectorWorlds(sSector, sDataFolder, bRefManualData);