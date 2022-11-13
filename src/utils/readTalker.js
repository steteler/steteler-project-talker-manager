const { readFile } = require('fs').promises;

async function readTalker() {
  const talkerJson = await readFile('./src/talker.json', 'utf-8');
  return JSON.parse(talkerJson);
}

module.exports = readTalker;