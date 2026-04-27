export const transformText = (txt: string): string => {
  /**
   * replaces special characters with a " ", except for "-", removes numbers as strings e.g., "2026" then trims the returned words.
   * @param {string} txt - validated text received from the post request
   * @returns {string} parsed lower case string without special characters or spaces
   */
  const corpus: string = txt
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, ' ')
    .replace(/\b\d+\b/g, '')
    .trim();
  return corpus;
};
