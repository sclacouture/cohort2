console.log("");

function countBs(string) {
  let output = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == "B") {
      output += 1;
    }
  }
  return output;
}

console.log(countBs("BBBXSFSBC"));

function countChar(string, character) {
  let output = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == character) {
      output += 1;
    }
  }
  return output;
}

console.log(countChar("kakkerlak", "l"));

function formatCurrency(number) {
  console.log(`'$${number}'`);
}

console.log(formatCurrency(2000));

function formatoMoneda(number) {
  let string = String(number);
  if (number.length > 3);
  let output = 0;
  for (let i = 0; i < number.length; i++) {
    output = output + number.charAt(number.length);
  }

  return output;
}
console.log(formatoMoneda(30001));

// console.log(`'$${number}'`);
