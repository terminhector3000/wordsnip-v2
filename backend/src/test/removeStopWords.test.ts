import stopwords_list from '../services/Lib/data/stopwords';
import { removeStopWords } from '../services/Lib/removeStopWords';

describe('removeStopWords', () => {
  it('filters out stopwords and words with length < 3', () => {
    expect(
      removeStopWords(
        'Titan is building the AI platform for banking – creating the models and agents that will define the industry.'
      )
    ).toStrictEqual([
      'Titan',
      'building',
      'platform',
      'banking',
      'creating',
      'models',
      'agents',
      'define',
      'industry.',
    ]);
  });
});
