import { transformText } from '../Lib/transformText';
import { removeStopWords } from '../Lib/removeStopWords';
import { wordCounter } from '../Lib/wordCounter';

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
  console.log(wordCounter(source));
  return payload;
};
