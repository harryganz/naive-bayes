const expect = require('expect');
const tokenizer = require('./defaultTokenizer');

describe('defaultTokenizer', () => {
  it('returns an empty array for an empty string', () => {
    expect(tokenizer('')).toEqual([]);
  });
  it('returns an empty array for document containing only spaces', () => {
    expect(tokenizer(' ')).toEqual([]);
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
});
