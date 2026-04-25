import stopwords_list from './data/stopwords';

export const removeStopWords = (corpus: string): string[] => {
  /**
   * Converts block of text into string array and then filters based on length being greter than 2 characters, and checks that each word is not in the Set of stopwords
   * @param {string} corpus - block of parsed/clean text returned by the transformText function
   * @returns {string[]} list of words that are of length > 2 and that are not present in the stopwords Set
   */
  return corpus.split(' ').filter((word) => word.length > 2 && !stopwords_list.has(word));
};
