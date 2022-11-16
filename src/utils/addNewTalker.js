const { writeFile } = require('fs').promises;
const readTalker = require('./readTalker');

async function addNewTalker(talker) {
  const talkers = await readTalker();
  const newTalker = { id: talkers[talkers.length - 1].id + 1, ...talker };
  const newTalkers = [...talkers, newTalker];
  await writeFile('./src/talker.json', JSON.stringify(newTalkers));
  return newTalker;
}

module.exports = addNewTalker;