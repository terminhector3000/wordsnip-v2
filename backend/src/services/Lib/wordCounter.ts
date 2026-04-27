export type wordcounterType = Record<string, number>;

export const wordCounter = (obj: string[]): wordcounterType => {
  /**
   * @typed {{a:number, b:number}} wordcounterType
   */
  /**
   *loops through an array of strings and creates an object literal where the key is the property and the value is number of ocurrences of a the specified word in the array: example: {javsacript:10}, it means that javascript was found 10 times in the array of strings
   * @param {Object} obj -
   * @returns {wordcounterType} object literal with word as key and occurrences as the value.
   */
  const wordCounter: wordcounterType = {};

  for (let k = 0; k <= obj.length - 1; k++) {
    const word: string = String(obj[k]);
    if (!Object.hasOwn(wordCounter, word)) {
      wordCounter[word] = 1;
    } else {
      wordCounter[word] += 1;
    }
  }
  return wordCounter;
};
