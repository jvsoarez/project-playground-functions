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
// eslint-disable-next-line complexity
function generatePhoneNumber(arr) {
  if (arr.length !== 11) return 'Array com tamanho incorreto.';
  for (let i = 0; i < arr.length; i += 1) {
    let repeatedNums = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) {
        repeatedNums += 1;
      }
      if (arr[i] < 0 || arr[i] > 9 || repeatedNums >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  let phoneNumber = `(${arr[0]}${arr[1]}) `;
  phoneNumber += `${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-`;
  phoneNumber += `${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
  return phoneNumber;
}

console.log(generatePhoneNumber([9, 2, 3, 5, 8, 9, 1, 3, 4, 2, 6]));

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
function hydrate(string) {
  let countGlassesOfWater = 0;
  const regex = /\d+/g;
  const separateNumbersFromString = string.match(regex);
  for (let i = 0; i < separateNumbersFromString.length; i += 1) {
    const amountOfEachDrink = parseInt(separateNumbersFromString[i]);
    countGlassesOfWater += amountOfEachDrink;
  }
  if (countGlassesOfWater === 1) return countGlassesOfWater + ' copo de água'
  return countGlassesOfWater + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
