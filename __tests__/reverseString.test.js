import { reverseString } from '../reverseString.js'

test("Reverse Hello", () => {
  expect(reverseString('Hello')).toBe('olleH');
})

test("Reverse Goodbye", () => {
  expect(reverseString('Goodbye')).toBe('eybdooG');
})

test("Reverse two words", () => {
  expect(reverseString('Hello Sir')).toBe('riS olleH');
})

test("Reverse numbers", () => {
  expect(reverseString('12345')).toBe('54321');
})

test("Reverse string with multiple spaces", () => {
  expect(reverseString('hello   hello')).toBe('olleh   olleh');
})
