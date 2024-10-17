// YEREMIA REAL POTU

function threeStepAB(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "a") {
      if (text[i + 4] === "b") {
        return true;
      }
    }

    if (text[i] === "b") {
      if (text[i + 4] === "a") {
        return true;
      }
    }
  }

  return false;
}

console.log(threeStepAB("lane borrowed"));
console.log(threeStepAB("i am sick"));
console.log(threeStepAB("you are boring"));
console.log(threeStepAB("barbarian"));
console.log(threeStepAB("bacon and meat"));
