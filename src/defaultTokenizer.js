/**
 * Returns array of tokens given a string.
 * Strips puctuation and spaces and returns
 * array of lowercased words.
 * Will return an empty string if no words 
 * are present
 * @param doc {string} Document to tokenize
 */
module.exports = (doc) => {
  if (typeof doc !== "string") {
    throw new Error(`Expected doc to be string. Got ${typeof doc}`);
  }
  return doc
    .replace(/[.,?!;:\-\n\t\r\f\b\v]/g,"")
    .split(" ")
    .filter(word => word !== '')
    .map(word => word.toLowerCase());
};
  
