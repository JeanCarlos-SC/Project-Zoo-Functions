const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  return species.reduce((acc, specieZ) => {
    const { name, residents } = specieZ;
    if (!animal) {
      acc[name] = residents.length;
    } else if (animal.specie === name && animal.sex) {
      const { sex } = animal;
      return residents.filter((resident) => resident.sex === sex).length;
    } else if (animal.specie === name) {
      return residents.length;
    }
    return acc;
  }, {});
}

module.exports = countAnimals;
