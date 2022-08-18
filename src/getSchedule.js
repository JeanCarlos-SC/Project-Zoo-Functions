const data = require('../data/zoo_data');

const { species, hours } = data;
const days = Object.keys(hours);
const animals = species.map((specie) => specie.name);

function getAnimals(day) {
  if (typeof day !== 'string') {
    throw new Error('O parâmetro precisa ser uma string');
  }
  return species.filter((specie) => specie.availability.includes(day))
    .map((obj) => obj.name);
}

function getHours(day) {
  const selectedDay = hours[day];
  if (day === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${selectedDay.open}am until ${selectedDay.close}pm`;
}

function showAllDaysExhibition() {
  return days.reduce((acc, day) => {
    acc[day] = { officeHour: getHours(day),
      exhibition: day === 'Monday' ? 'The zoo will be closed!' : getAnimals(day) };
    return acc;
  }, {});
}

function getSchedule(scheduleTarget) {
  if (animals.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  if (days.includes(scheduleTarget)) {
    const schedule = {};
    if (scheduleTarget === 'Monday') {
      schedule[scheduleTarget] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      return schedule;
    }
    schedule[scheduleTarget] = { officeHour: getHours(scheduleTarget),
      exhibition: getAnimals(scheduleTarget) };
    return schedule;
  }
  return showAllDaysExhibition();
}

console.log(getSchedule());

module.exports = getSchedule;
