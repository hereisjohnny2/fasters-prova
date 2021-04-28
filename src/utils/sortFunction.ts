import { alphabet } from "../data/wordRules";

export const sortSentence = (sentence: string): string => {
  const sortedSentence = sentence.split(' ').sort((a: string, b: string): number => {

    let l = Math.min(a.length, b.length);
    for (let index = 0; index < l; index++) {
      if (alphabet.indexOf(a[index]) < alphabet.indexOf(b[index])) return -1;
      if (alphabet.indexOf(a[index]) > alphabet.indexOf(b[index])) return 1;
    }

    if (a.length > l) return 1;
    return -1;

  });

  return [...new Set(sortedSentence)].join(' ');
}