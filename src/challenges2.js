// Desafio 10
function techList(techs, name) {
  let newArray = [];
  if (techs.length === 0) return 'Vazio!';
  techs = techs.sort();
  for (let i = 0; i < techs.length; i += 1) {
    newArray.push({ tech: techs[i], name });
  }
  return newArray;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
// eslint-disable-next-line complexity
function triangleCheck(lineA, lineB, lineC) {
  let differenceAtoB = Math.abs(lineA - lineB);
  let differenceAtoC = Math.abs(lineA - lineC);
  let differenceBtoC = Math.abs(lineB - lineC);
  if (lineA < lineB + lineC && lineA > differenceBtoC) return true;
  if (lineB < lineA + lineC && lineC > differenceAtoC) return true;
  if (lineC < lineA + lineB && lineC > differenceAtoB) return true;
  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
