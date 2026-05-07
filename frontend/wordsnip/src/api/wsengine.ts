import { api } from "./client";
import { handleErrors } from "./handleErrors";

type Snip = {
  source: string;
  target: string;
  honeypot: string;
};
// type WordCounts = {
//   source: number;
//   target: number;
// };
// type SnipEngine = {
//   word: string;
//   counts: WordCounts;
//   match: boolean;
// };
// type ApiError = {
//   message: string;
//   status?: string;
// };
// // type Result<T> = { data: T; error: null } | { data: null; error: ApiError };

export const createSnip = async (input: Snip) => {
  try {
    const res = await api.post<Snip>("/postws", input);
    return { data: res.data, error: null };
  } catch (err: unknown) {
    return { data: null, error: handleErrors(err) };
  }
};
