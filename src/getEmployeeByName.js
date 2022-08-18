const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  return employees.reduce((acc, employe) => {
    const { firstName, lastName } = employe;
    if (firstName === employeeName || lastName === employeeName) {
      return employe;
    }
    return acc;
  }, {});
}

console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
