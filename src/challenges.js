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

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let diferenceMouseCat1 = Math.abs(mouse - cat1);
  let diferenceMouseCat2 = Math.abs(mouse - cat2);
  if (diferenceMouseCat1 < diferenceMouseCat2) {
    return 'cat1';
  }
  if (diferenceMouseCat2 < diferenceMouseCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = 'fizzBuzz';
    } else if (array[i] % 3 === 0) {
      array[i] = 'fizz';
    } else if (array[i] % 5 === 0) {
      array[i] = 'buzz';
    } else {
      array[i] = 'bug!';
    }
  }
  return array;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
