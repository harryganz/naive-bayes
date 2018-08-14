/**
 * Returns array of tokens given a string.
 * Strips puctuation and spaces and returns
 * array of lowercased words.
 * Will return an empty string if no words 
 * are present
 * @param doc {string} Document to tokenize
 */
module.exports = (doc) => {
  return doc
    .replace(/[.,?!;:\-]/g,"")
    .replace(/\s{2,}/g,"")
    .split(" ")
    .filter(word => word !== '')
    .map(word => word.toLowerCase());
};
  
