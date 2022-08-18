const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'));

module.exports = getSpeciesByIds;
