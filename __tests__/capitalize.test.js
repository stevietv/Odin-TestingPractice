import { capitalize } from '../capitalize.js';

test('capitalize the letter A when its already capital', () => {
  expect(capitalize('A')).toBe('A');
})

test('capitalize the letter B when its already capital', () => {
  expect(capitalize('B')).toBe('B');
})

test('capitalize the letter a when its lower case', () => {
  expect(capitalize('a')).toBe('A');})

test('capitalize a single word', () => {
  expect(capitalize('hello')).toBe('Hello');})

test('capitalize a sentence', () => {
  expect(capitalize('hello, welcome to testing')).toBe('Hello, welcome to testing');})

test('do not capitalize a number', () => {
  expect(capitalize('12345')).toBe('12345');})

test('do not capitalize a symbol', () => {
  expect(capitalize('!Hello!')).toBe('!Hello!');})