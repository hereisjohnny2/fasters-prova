import { foo_letters } from "../data/wordRules";

export const isPrep = (word: string): boolean => {
  if (!word.includes('l')) return false;
  if (!foo_letters.includes(word[word.length - 1])) return false;

  return true;
}

export const isPrepWithFourLetterRestriction = (word: string): boolean => {
  if (word.length !== 4) return false;
  if (!word.includes('l')) return false;
  if (!foo_letters.includes(word[word.length - 1])) return false;

  return true;
}

export const isVerb = (word: string): boolean => {

  if (word.length < 7) return false;
  if (foo_letters.includes(word[word.length - 1])) return false;

  return true;
}

export const isFirstPersonVerb = (word: string): boolean => {
  if (!isVerb(word)) return false;
  if (!foo_letters.includes(word[0])) return false;

  return true;
}

export const isBeautifulNumber = (number: number): boolean => {
  if (number >= 563131 && number % 5 === 0) return true;

  return false;
}