const expect = require('expect');
const tokenizer = require('./defaultTokenizer');

describe('defaultTokenizer', () => {
  it('returns an empty array for an empty string', () => {
    expect(tokenizer('')).toEqual([]);
  });
  it('returns an empty array for document containing only spaces and tabs', () => {
    expect(tokenizer("  \t \n")).toEqual([]);
  });
  it('returns an empty array for a document containing only puctuation', () => {
    expect(tokenizer('.,?!;:-')).toEqual([]);
  });
  it('returns tokens lowercased', () => {
    expect(tokenizer('WoRlD')).toEqual(['world']);
  });
  it('returns ["hello", "world"] for input "Hello World!"', () => {
    expect(tokenizer('Hello World!')).toEqual(['hello', 'world']);
  });
  it('throws an error if no document passed in', () => {
    expect(() => {tokenizer()}).toThrow(/undefined/);
  });
  it('throws an error if non-string type passed in', () => {
    expect(() => {tokenizer(2)}).toThrow(/number/i);
  });
});
