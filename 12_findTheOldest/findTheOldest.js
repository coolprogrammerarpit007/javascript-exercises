const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
const findTheOldest = function (arr) {
  const oldest = arr
    .sort((a, b) => a.yearOfBirth - b.yearOfBirth)
    .reduce((acc, person) => {
      if (
        person.yearOfDeath - person.yearOfBirth >
        acc.yearOfDeath - acc.yearOfBirth
      ) {
        return person;
      } else {
        return acc;
      }
    }, arr[0]);
    return oldest;
};

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
