import { transformText } from '../services/Lib/transformText';

describe('transformText', () => {
  it('converts to lower case', () => {
    expect(transformText('HeLLo There World')).toBe('hello there world');
  });
  it('removes special characters', () => {
    expect(transformText("that's + a lot of $$$")).toBe('that s a lot of');
  });
  it('removes numbers as strings', () => {
    expect(transformText("it's 2026")).toBe('it s');
  });
  it('trims the words', () => {
    expect(transformText(' hey there world ')).toBe('hey there world');
  });
  it('allows - in a string', () => {
    expect(transformText('dev-ops')).toBe('dev-ops');
  });
  it('it allows numbers inside words', () => {
    expect(transformText('B2B model ')).toBe('b2b model');
  });
});
