// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  const calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  const lastPosition = array.length - 1;
  const concat = `${array[lastPosition]}, ${array[0]}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victoryPoints = wins * 3;
  let drawPoints = ties;
  let totalPoints = victoryPoints + drawPoints;
  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let count = array[0];
  let reps = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > count) {
      count = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (count === array[i]) {
      reps += 1;
    }
  }
  return reps;
}

highestCount([-2, -2, -1]);

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
