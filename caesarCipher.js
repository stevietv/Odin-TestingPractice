export function caesarCipher(input, rotation) {
  let rotatedString = '';
  for (const inputCharacter of input) {
    if (inputCharacter.match(/[a-z]/))
      rotatedString += rotateLowerCase(inputCharacter, rotation);
    else if (inputCharacter.match(/[A-Z]/))
      rotatedString += rotateUpperCase(inputCharacter, rotation);
    else
      rotatedString += inputCharacter;
  }

  return rotatedString;
}

function rotateLowerCase(input, rotation) {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const index = lowerCase.indexOf(input);
  const newIndex = mod(index + rotation, lowerCase.length);
  return lowerCase[newIndex];
}

function rotateUpperCase(input, rotation) {
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const index = upperCase.indexOf(input);
  const newIndex = mod(index + rotation, upperCase.length);
  return upperCase[newIndex];
}

function mod(x,y){
  return ((x % y) + y) % y;
}