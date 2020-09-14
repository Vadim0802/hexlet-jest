import { isPalindrom } from '../index.js';

test('isPalindrom', () => {
  expect(isPalindrom('hello')).toEqual(false);
  expect(isPalindrom('tenet')).toEqual(true);
  expect(isPalindrom('')).toEqual(null);
  expect(isPalindrom('123')).toEqual(false);
  expect(isPalindrom('121')).toEqual(true);
});
