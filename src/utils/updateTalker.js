const { writeFile } = require('fs').promises;
const readTalker = require('./readTalker');

async function updateTalker(id, newTalker) {
  const talkers = await readTalker();

  const newTalkerWithId = { id, ...newTalker };

  const foundIndexToUpdate = talkers.findIndex((talker) => (
    talker.id === id
  ));

  talkers.splice(foundIndexToUpdate, 1, newTalkerWithId);

  await writeFile('./src/talker.json', JSON.stringify(talkers));

  return newTalkerWithId;
}

module.exports = updateTalker;