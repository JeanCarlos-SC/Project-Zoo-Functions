const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species.some((specie) => specie.name === animal && specie.residents
    .every((resident) => resident.age >= age));
}

console.log(getAnimalsOlderThan('lions', 15));

module.exports = getAnimalsOlderThan;
