import { analyzeArray } from '../analyzeArray.js';

test('single length array, all items should be 1', () => {
  let expected = { average: 1, min: 1, max: 1, length: 1 };
  let result = analyzeArray([1]);
  expect(result).toEqual(expected);
})

test('array of items 1 to 3', () => {
  let expected = { average: 2, min: 1, max: 3, length: 3 };
  let result = analyzeArray([1,2,3]);
  expect(result).toEqual(expected);
})

test('array of three 1s and one 5', () => {
  let expected = { average: 2, min: 1, max: 5, length: 4 };
  let result = analyzeArray([1,1,1,5]);
  expect(result).toEqual(expected);
})

test('array contains a string - should error', () => {
    expect(() => analyzeArray(['hello'])).toThrow('Expected an array of numbers')
})