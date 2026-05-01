import { matchComparison } from '../../services/Lib/matchComparison';

describe('matchComparison', () => {
  it('analyzes wether words from 2 inputs have the same or different counts', () => {
    expect(
      matchComparison({ analytics: 1, backend: 2 }, { analytics: 1, backend: 2 })
    ).toStrictEqual([
      { word: 'analytics', counts: { source: 1, target: 1 }, match: true },
      { word: 'backend', counts: { source: 2, target: 2 }, match: true },
    ]);
  });
});
