const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, { age }) => {
    if (age < 18) {
      acc.child += 1;
    } else if (age >= 18 && age < 50) {
      acc.adult += 1;
    } else {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const obj = countEntrants(entrants);
  const { prices: { child: childP, adult: adultP, senior: seniorP } } = data;
  const { child: childQ, adult: adultQ, senior: seniorQ } = obj;
  const childPrice = childP * childQ;
  const adultPrice = adultP * adultQ;
  const seniorPrice = seniorP * seniorQ;
  return childPrice + adultPrice + seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
