import { transformText } from '../Lib/transformText';
import { removeStopWords } from '../Lib/removeStopWords';
import { wordCounter, wordcounterType } from '../Lib/wordCounter';
import { matchComparison } from '../Lib/matchComparison';

type InputSnip = {
  source: string;
  target: string;
  honeypot?: string;
};

export const wordSnipEngine = (data: InputSnip) => {
  /**
   * wordsnip engine receives the validated text block from the post request and processes it using the following algorithms:
   * @param {inputSnip} "type" data - Validated block of text received by the post request
   */
  const source: string[] = removeStopWords(transformText(data.source));
  const target: string[] = removeStopWords(transformText(data.target));

  const payload = {
    source,
    target,
  };
  const sourceWordCount: wordcounterType = wordCounter(source);

  //sort the target by count: only the target array because this is what we will loop through and used as a reference for comparison.
  const targetWordCount: wordcounterType = Object.fromEntries(
    Object.entries(wordCounter(target)).sort(([, a], [, b]) => b - a)
  );

  return matchComparison(sourceWordCount, targetWordCount);
};
