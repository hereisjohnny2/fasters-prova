import { isBeautifulNumber, isFirstPersonVerb, isPrep, isPrepWithFourLetterRestriction, isVerb } from "./grammaticalRules";
import { convertToBase10 } from "./numberConversion";

// Perguntar ao bruno se tem algo errado com essa função?
export const countPreps = (sentence: string): number => {
  if (sentence.length === 0) return 0;

  const wordsArray = sentence.split(" ");
  const prepositionsArray = wordsArray.filter(word => isPrep(word));

  return prepositionsArray.length;
}

export const countPrepsWithFourLettersRestriction = (sentence: string): number => {
  if (sentence.length === 0) return 0;

  const wordsArray = sentence.split(" ");
  const prepositionsArray = wordsArray.filter(word => isPrepWithFourLetterRestriction(word));

  return prepositionsArray.length;
}

export const countVerbs = (sentence: string): number => {
  if (sentence.length === 0) return 0;

  const wordsArray = sentence.split(" ");
  const prepositionsArray = wordsArray.filter(word => isVerb(word));

  return prepositionsArray.length;
}

export const countFirstPersonVerbs = (sentence: string): number => {
  if (sentence.length === 0) return 0;

  const wordsArray = sentence.split(" ");
  const prepositionsArray = wordsArray.filter(word => isFirstPersonVerb(word));

  return prepositionsArray.length;
}

export const countBeautifulNumbers = (sentence: string): number => {
  if (sentence.length === 0) return 0;

  const wordsArray = sentence.split(" ");
  const prepositionsArray = wordsArray.filter(word => {
    const convertedNumber = convertToBase10(word);
    return isBeautifulNumber(convertedNumber);
  });

  return prepositionsArray.length;
}