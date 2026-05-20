type WordCounts = {
  source: number;
  target: number;
};

export type SnipEngine = {
  word: string;
  counts: WordCounts;
  match: boolean;
};

export type Snip = {
  source: string;
  target: string;
  honeypot: string;
};

export type OnSubmitSuccess = {
  onSuccessfulSubmit: (data: SnipEngine[] | string) => void;
};
