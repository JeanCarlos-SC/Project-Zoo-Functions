const data = require('../data/zoo_data');

const { species } = data;
// Variáveis que recebem os arrays de species por localização
const locationNE = species.filter((specie) => specie.location === 'NE');
const locationNW = species.filter((specie) => specie.location === 'NW');
const locationSE = species.filter((specie) => specie.location === 'SE');
const locationSW = species.filter((specie) => specie.location === 'SW');

// Variáveis que recebem os nomes de animais, separados por species e por localização
const locationNameNE = locationNE.map((animal) => animal.residents
  .map((resident) => resident.name));
const locationNameNW = locationNW.map((animal) => animal.residents
  .map((resident) => resident.name));
const locationNameSE = locationSE.map((animal) => animal.residents
  .map((resident) => resident.name));
const locationNameSW = locationSW.map((animal) => animal.residents
  .map((resident) => resident.name));

// Variávesi que recebem os nomes dos animais do sexo feminino separdos por localização
const femaleNE = locationNE.map((animal) => animal.residents
  .filter((resident) => resident.sex === 'female').map((male) => male.name));
const femaleNW = locationNW.map((animal) => animal.residents
  .filter((resident) => resident.sex === 'female').map((male) => male.name));
const femaleSE = locationSE.map((animal) => animal.residents
  .filter((resident) => resident.sex === 'female').map((male) => male.name));
const femaleSW = locationSW.map((animal) => animal.residents
  .filter((resident) => resident.sex === 'female').map((male) => male.name));

// Variávesi que recebem os nomes dos animais do sexo masculino separdos por localização
const maleNE = locationNE.map((animal) => animal.residents
  .filter((resident) => resident.sex === 'male').map((male) => male.name));
const maleNW = locationNW.map((animal) => animal.residents
  .filter((resident) => resident.sex === 'male').map((male) => male.name));
const maleSE = locationSE.map((animal) => animal.residents
  .filter((resident) => resident.sex === 'male').map((male) => male.name));
const maleSW = locationSW.map((animal) => animal.residents
  .filter((resident) => resident.sex === 'male').map((male) => male.name));

function getAnimalPerLocations() {
  const locationSpcieNE = locationNE.map((animal) => animal.name);
  const locationSpcieNW = locationNW.map((animal) => animal.name);
  const locationSpcieSE = locationSE.map((animal) => animal.name);
  const locationSpcieSW = locationSW.map((animal) => animal.name);
  return {
    NE: locationSpcieNE,
    NW: locationSpcieNW,
    SE: locationSpcieSE,
    SW: locationSpcieSW,
  };
}

function getAnimalsIncludName() {
  return {
    NE: [{ lions: locationNameNE[0] }, { giraffes: locationNameNE[1] }],
    NW: [{ tigers: locationNameNW[0] }, { bears: locationNameNW[1] },
      { elephants: locationNameNW[2] }],
    SE: [{ penguins: locationNameSE[0] }, { otters: locationNameSE[1] }],
    SW: [{ frogs: locationNameSW[0] }, { snakes: locationNameSW[1] }],
  };
}

function getMalesAnimals() {
  return {
    NE: [{ lions: maleNE[0] }, { giraffes: maleNE[1] }],
    NW: [{ tigers: maleNW[0] }, { bears: maleNW[1] },
      { elephants: maleNW[2] }],
    SE: [{ penguins: maleSE[0] }, { otters: maleSE[1] }],
    SW: [{ frogs: maleSW[0] }, { snakes: maleSW[1] }],
  };
}

function getFemalesAnimals() {
  return {
    NE: [{ lions: femaleNE[0] }, { giraffes: femaleNE[1] }],
    NW: [{ tigers: femaleNW[0] }, { bears: femaleNW[1] },
      { elephants: femaleNW[2] }],
    SE: [{ penguins: femaleSE[0] }, { otters: femaleSE[1] }],
    SW: [{ frogs: femaleSW[0] }, { snakes: femaleSW[1] }],
  };
}

function sortNames() {
  locationNameNE[0].sort();
  locationNameNE[1].sort();

  locationNameNW[0].sort();
  locationNameNW[1].sort();
  locationNameNW[2].sort();

  locationNameSE[0].sort();
  locationNameSE[1].sort();

  locationNameSW[0].sort();
  locationNameSW[1].sort();
}

function sortMales() {
  maleNE[0].sort();
  maleNE[1].sort();

  maleNW[0].sort();
  maleNW[1].sort();
  maleNW[2].sort();

  maleSE[0].sort();
  maleSE[1].sort();

  maleSW[0].sort();
  maleSW[1].sort();
}

function sortFemales() {
  femaleNE[0].sort();
  femaleNE[1].sort();

  femaleNW[0].sort();
  femaleNW[1].sort();
  femaleNW[2].sort();

  femaleSE[0].sort();
  femaleSE[1].sort();

  femaleSW[0].sort();
  femaleSW[1].sort();
}

function isMaleorFamela(sex, sort) {
  if (sort) {
    sortFemales();
    sortMales();
  }
  if (sex === 'female') {
    return getFemalesAnimals();
  }
  return getMalesAnimals();
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return getAnimalPerLocations();
  }
  if (options.sex) return isMaleorFamela(options.sex, options.sorted);
  if (options.sorted) {
    sortNames();
  }
  return getAnimalsIncludName();
}

module.exports = getAnimalMap;
