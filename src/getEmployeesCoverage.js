const data = require('../data/zoo_data');

const { employees, species } = data;

function getLocations(person) {
  const { responsibleFor } = person;
  const locations = species.filter((specie) => responsibleFor.includes(specie.id))
    .map((animal) => animal.location);
  return locations;
}

function getSpeciesNames(speciesIds) {
  const { responsibleFor } = speciesIds;
  const names = species.filter((specie) => responsibleFor.includes(specie.id))
    .map((animal) => animal.name);
  return names;
}

function verifyNoParameter() {
  return employees.reduce((acc, employee) => {
    const { id: id2, firstName, lastName } = employee;
    const person = {
      id: id2,
      fullName: `${firstName} ${lastName}`,
      species: getSpeciesNames(employee),
      locations: getLocations(employee),
    };
    acc.push(person);
    return acc;
  }, []);
}

function getEmployeesCoverage(obj) {
  if (!obj) {
    return verifyNoParameter();
  }
  const { name, id } = obj;
  const person = employees.find((employee) => {
    const { id: id2, firstName, lastName } = employee;
    return id === id2 || firstName === name || lastName === name;
  });
  if (!person) {
    throw new Error('Informações inválidas');
  }
  const { id: id3, firstName, lastName } = person;
  return {
    id: id3,
    fullName: `${firstName} ${lastName}`,
    species: getSpeciesNames(person),
    locations: getLocations(person),
  };
}

module.exports = getEmployeesCoverage;
