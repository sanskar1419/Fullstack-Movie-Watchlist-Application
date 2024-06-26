function splitStringToCharacter(inputString) {
  var charcters = [];
  const regex = /[\s\S]/gu;
  let match;

  while ((match = regex.exec(inputString)) !== null) {
    charcters.push(match[0]);
  }

  return charcters;
}

export default splitStringToCharacter;
