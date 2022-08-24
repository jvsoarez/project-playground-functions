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
function triangleCheck() {
  // seu código aqui
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
