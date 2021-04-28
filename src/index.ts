import TextData from "./data/textData";

import {
  countBeautifulNumbers,
  countFirstPersonVerbs,
  countPreps, countVerbs,
  countPrepsWithFourLettersRestriction
} from "./utils/countFuntions";

import { sortSentence } from "./utils/sortFunction";

console.log("Interpretador Googlon\n\n");

const prepsInTextB = countPreps(TextData.textB);
const prepsWithFourLetterRestrictionInTextB = countPrepsWithFourLettersRestriction(TextData.textB);
const verbsInTextB = countVerbs(TextData.textB);
const firstPersonVerbsInTextB = countFirstPersonVerbs(TextData.textB);
const beautifulNumbersInTextB = countBeautifulNumbers(TextData.textB);
const vocabularyListOfTextB = sortSentence(TextData.textB);

console.log(`Preposições no texto B: ${prepsInTextB}`);
console.log(`Preposições com Restrição de 4 Letras no texto B: ${prepsWithFourLetterRestrictionInTextB}`);
console.log(`Verbos no texto B: ${verbsInTextB}`);
console.log(`Verbos na Primeira Pessoa no texto B: ${firstPersonVerbsInTextB}`);
console.log(`Número Bonitos no texto B: ${beautifulNumbersInTextB}\n\n`);
console.log(`Vocabulário do texto B: ${vocabularyListOfTextB}\n\n`);
