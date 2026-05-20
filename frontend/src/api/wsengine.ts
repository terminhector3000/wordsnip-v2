import type { Snip, SnipEngine } from "../types/wordsnipType";
import { api } from "./client";
import { handleErrors } from "./handleErrors";

type Result<T> = { success: true; data: T } | { success: false; error: string };

export const createSnip = async (
  input: Snip,
): Promise<Result<SnipEngine[] | string>> => {
  try {
    const res = await api.post<SnipEngine[] | string>("/postws", input);
    return { success: true, data: res.data };
  } catch (err: unknown) {
    return { success: false, error: handleErrors(err).message };
  }
};
