const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((employe) => employe.id === id)
    .responsibleFor.find((specieId) => specieId);
  const olderAnimal = species.find((specie) => specie.id === employee).residents
    .reduce((acc, animal) => (acc.age > animal.age ? acc : animal));
  const { name, sex, age } = olderAnimal;
  const result = [name, sex, age];
  return result;
}

module.exports = getOldestFromFirstSpecies;
