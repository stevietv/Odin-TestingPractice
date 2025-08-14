export function analyzeArray(arr) {
  if (!arr.every( function(element) { return typeof element === 'number'; })) {
    throw new Error('Expected an array of numbers');
  }
  let length = arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let average = +(arr.reduce((a, b) => a + b, 0)/ length).toFixed(2)  //use the + to convert back to number

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  }
}