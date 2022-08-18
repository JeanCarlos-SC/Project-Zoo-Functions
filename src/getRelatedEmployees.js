const data = require('../data/zoo_data');

const { employees } = data;
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(id) {
  return id === stephanieId || id === burlId || id === olaId;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter((employe) => {
      const { managers } = employe;
      return managers.includes(managerId);
    })
      .map((employe) => {
        const { firstName, lastName } = employe;
        return `${firstName} ${lastName}`;
      });
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees(olaId));

module.exports = { isManager, getRelatedEmployees };
