import { wordCounter } from '../../services/Lib/wordCounter';

describe('wordCounter', () => {
  it('counts the number of times each word appears on the list', () => {
    expect(
      wordCounter([
        'shift',
        'work',
        'gets',
        'data',
        'questions',
        'work',
        'place',
        'used',
        'data',
        'used',
        'data',
        'work',
      ])
    ).toStrictEqual({
      shift: 1,
      work: 3,
      gets: 1,
      data: 3,
      questions: 1,
      used: 2,
      place: 1,
    });
  });
});
