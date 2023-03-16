function formatCurrency(num) {
  let inputString = String(num);
  let outputString = "";

  for (let i = 0; i < inputString.length; i++) {
    let position = inputString.length - 1 - i;
    let digit = inputString[position];

    //console.log("position:", position, "digit:", digit);
    //console.log(digit, i, i % 3);
    if (i % 3 == 0 && i > 1) {
      outputString = "," + outputString;
    }
    outputString = digit + outputString;
  }
  outputString = "$ " + outputString;

  return outputString;
}

console.log(formatCurrency(123456));
