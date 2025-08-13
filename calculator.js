function add(x, y) {
  if (typeof x === 'number' && typeof y === 'number')
    return x + y;
  return NaN;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

export { add, subtract, multiply, divide };