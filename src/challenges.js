/* eslint-disable max-lines-per-function */
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

// Desafio 9
// eslint-disable-next-line complexity, max-lines-per-function
function encode(string) {
  string = string.split('');
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      string[i] = '1';
    }
    if (string[i] === 'e') {
      string[i] = '2';
    }
    if (string[i] === 'i') {
      string[i] = '3';
    }
    if (string[i] === 'o') {
      string[i] = '4';
    }
    if (string[i] === 'u') {
      string[i] = '5';
    }
  }
  string = string.join('');
  return string;
}

// eslint-disable-next-line complexity
function decode(string) {
  string = string.split('');
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      string[i] = 'a';
    }
    if (string[i] === '2') {
      string[i] = 'e';
    }
    if (string[i] === '3') {
      string[i] = 'i';
    }
    if (string[i] === '4') {
      string[i] = 'o';
    }
    if (string[i] === '5') {
      string[i] = 'u';
    }
  }
  string = string.join('');
  return string;
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
