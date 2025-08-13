import { add, subtract, divide, multiply } from '../calculator.js'

// addition tests
describe('Addition Functions', () => {
  test('two positive numbers', () => {
    expect(add(2, 2)).toBe(4);
  })

  test('two negative numbers', () => {
    expect(add(-2, -2)).toBe(-4);
  })

  test('mixed numbers', () => {
    expect(add(3, -2)).toBe(1);
  })

  test('two zeros', () => {
    expect(add(0, 0)).toBe(0);
  })

  test('two strings', () => {
    expect(add('hello', 'goodbye')).toBeNaN();
  })
})

// subtraction tests
describe('Subtraction Functions', () => {
  test('two positive numbers', () => {
    expect(subtract(2, 2)).toBe(0);
  })

  test('two negative numbers', () => {
    expect(subtract(-2, -2)).toBe(0);
  })

  test('mixed numbers, second negative', () => {
    expect(subtract(3, -2)).toBe(5);
  })

  test('mixed numbers, first negative', () => {
    expect(subtract(-3, 2)).toBe(-5);
  })

  test('two zeros', () => {
    expect(subtract(0, 0)).toBe(0);
  })

  test('two strings', () => {
    expect(subtract('hello', 'goodbye')).toBeNaN();
  })
})

// multiply tests

describe('Multiply Functions', () => {
  test('two positive numbers', () => {
    expect(multiply(2, 2)).toBe(4);
  })

  test('two negative numbers', () => {
    expect(multiply(-2, -2)).toBe(4);
  })

  test('mixed numbers, second negative', () => {
    expect(multiply(3, -2)).toBe(-6);
  })

  test('mixed numbers, first negative', () => {
    expect(multiply(-3, 2)).toBe(-6);
  })

  test('two zeros', () => {
    expect(multiply(0, 0)).toBe(0);
  })

  test('two strings', () => {
    expect(multiply('hello', 'goodbye')).toBeNaN();
  })
})

// multiply tests

describe('Divide Functions', () => {
  test('two positive numbers', () => {
    expect(divide(2, 2)).toBe(1);
  })

  test('two negative numbers', () => {
    expect(divide(-2, -2)).toBe(1);
  })

  test('mixed numbers, second negative', () => {
    expect(divide(6, -2)).toBe(-3);
  })

  test('mixed numbers, first negative', () => {
    expect(divide(-6, 2)).toBe(-3);
  })

  test('divisor is zero', () => {
    const result = divide(5,0);
    expect(result).toBe(Infinity);
    expect(result).not.toBe(NaN);
  })

  test('divisor is negative zero', () => {
    const result = divide(5,-0);
    expect(result).toBe(-Infinity);
    expect(result).not.toBe(NaN);
  })

  test('two strings', () => {
    expect(divide('hello', 'goodbye')).toBeNaN();
  })
})