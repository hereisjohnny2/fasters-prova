import { alphabet } from "../data/wordRules";

export const convertNumberFromLetter = (word: string): number[] => {
  const numberList = word.split('').map((letter, index) => {
    const number = alphabet.indexOf(letter);
    return number;
  });

  return numberList;
}

export const convertToBase10 = (word: string): number => {
  const base10number = convertNumberFromLetter(word).reduce((total, value, index) => {
    return total + value * (20 ** index);
  }, 0);


  return base10number;
}