const { writeFile } = require('fs').promises;
const readTalker = require('./readTalker');

async function removeTalker(id) {
  const talkers = await readTalker();

  const foundIndexToUpdate = talkers.findIndex((talker) => (
    talker.id === id
  ));

  talkers.splice(foundIndexToUpdate, 1);

  await writeFile('./src/talker.json', JSON.stringify(talkers));
}

module.exports = removeTalker;