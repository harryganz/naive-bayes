const defaultTokenizer = require('./defaultTokenizer');

class NaiveBayes {
  constructor(options) {
   this.options = options || {};
   this.tokenizer = this.options.tokenizer || defaultTokenizer;
  }

  _tokenize(doc) {
    return this.tokenizer(doc);
  }
}


