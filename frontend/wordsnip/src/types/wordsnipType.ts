type WordCounts = {
  source: number;
  target: number;
};

export type SnipEngine = {
  word: string;
  counts: WordCounts;
  match: boolean;
};
