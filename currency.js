// currency.js;

function formatCurrency(num) {
  let inputString = String(num);
  let outputString = "";

  for (let i = 0; i < inputString.length; i++) {
    let position = inputString.length - 1 - i;
    let digit = inputString[position];
    // console.log("position:", position, "digit," digit);

    if (i % 3 == 0 && i > 2) {
      outputString = "," + outputString;
    }
    outputString = digit + outputString;
    console.log(outputString);
  }
  outputString = "$" + outputString;
  return outputString;
}

console.log(formatCurrency(3005));
