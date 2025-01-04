function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  console.log(add(5,3));
  console.log(subtract(5,3));
  console.log(multiply(5,3));
  console.log(divide(5,0));
} catch (error) {
  console.error("An error occurred:", error.message);
}
