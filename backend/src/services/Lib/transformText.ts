export const transformText = (txt: string): string => {
  /**
   * replaces special characters except for "-", and converts them into " " then trims the returned words.
   * @param {string} txt - validated text received from the post request
   * @returns {string} parsed lower case string without special characters or spaces
   */
  const corpus: string = txt
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, ' ')
    .trim()
    .replace(/-/g, '_');
  return corpus;
};
