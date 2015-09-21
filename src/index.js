var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starWarsNames');

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
};
