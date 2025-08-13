import { caesarCipher } from '../caesarCipher.js';

describe('lower case tests', () => {
  test('one word', () => {
    expect(caesarCipher('xyz',3)).toBe('abc');
  });

  test('two words', () => {
    expect(caesarCipher('xyz abc',3)).toBe('abc def');
  });

  test('two words with punctuation', () => {
    expect(caesarCipher('xyz abc!',3)).toBe('abc def!');
  });
})

describe('upper case tests', () => {
  test('one word', () => {
    expect(caesarCipher('XYZ',3)).toBe('ABC');
  });

  test('two words', () => {
    expect(caesarCipher('XYZ ABC',3)).toBe('ABC DEF');
  });

  test('two words with punctuation', () => {
    expect(caesarCipher('XYZ ABC!',3)).toBe('ABC DEF!');
  });
})

describe('mixed case tests', () => {
  test('one word', () => {
    expect(caesarCipher('xYz',3)).toBe('aBc');
  });

  test('two words', () => {
    expect(caesarCipher('xYz aBc',3)).toBe('aBc dEf');
  });

  test('two words with punctuation', () => {
    expect(caesarCipher('xYz aBc!',3)).toBe('aBc dEf!');
  });

  test('hello world with punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
})

describe('Rotations outside of 1 to 26', () => {
  test('full rotation returns original', () => {
    const input = 'CaesarCipher123!';
    expect(caesarCipher(input, 26)).toBe(input);
  });

  test('rotation longer than 26', () => {
    expect(caesarCipher('hello',35)).toBe('qnuux');
  })

  test('large positive rotations wrap correctly', () => {
    expect(caesarCipher('abc', 52)).toBe('abc'); // 52 ≡ 0 mod 26
  });

  test('rotate 0 should return the same', () => {
    const hello = 'hello';
    expect(caesarCipher(hello,0)).toEqual(hello);
  })

  test('negative rotation should decrypt', () => {
    expect(caesarCipher('abc',-3)).toEqual('xyz');
  })

  test('large negative rotations wrap correctly', () => {
    expect(caesarCipher('abc', -29)).toBe('xyz');
  });


  test('encrypt and decrypt should return the original', () => {
    const hello = 'hello';
    const rotation = 5;
    const encrypted = caesarCipher(hello,rotation);
    const decrypted = caesarCipher(encrypted,-rotation);
    expect(decrypted).toEqual(hello);
  })
})

describe('Extra Cases', () => {
  test('empty string', () => {
    expect(caesarCipher('',5)).toBe('');
  })

  test('numbers and symbols remain unchanged', () => {
    expect(caesarCipher('1234!@#$', 4)).toBe('1234!@#$');
  });

  test('unicode letters remain unchanged', () => {
    expect(caesarCipher('éüß', 5)).toBe('éüß');
  });

  test('long text preserves spacing and punctuation', () => {
    const input = 'The quick brown fox jumps over the lazy dog.';
    const expected = 'Wkh txlfn eurzq ira mxpsv ryhu wkh odcb grj.';
    expect(caesarCipher(input, 3)).toBe(expected);
  });
})