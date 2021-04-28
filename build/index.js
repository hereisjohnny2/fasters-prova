"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const textData_1 = __importDefault(require("./data/textData"));
const countFuntions_1 = require("./utils/countFuntions");
const sortFunction_1 = require("./utils/sortFunction");
console.log("Interpretador Googlon\n\n");
const prepsInTextB = countFuntions_1.countPreps(textData_1.default.textB);
const verbsInTextB = countFuntions_1.countVerbs(textData_1.default.textB);
const firstPersonVerbsInTextB = countFuntions_1.countFirstPersonVerbs(textData_1.default.textB);
const beautifulNumbersInTextB = countFuntions_1.countBeautifulNumbers(textData_1.default.textB);
const vocabularyListOfTextB = sortFunction_1.sortSentence(textData_1.default.textB);
console.log(`Preposições no texto B: ${prepsInTextB}`);
console.log(`Verbos no texto B: ${verbsInTextB}`);
console.log(`Verbos na Primeira Pessoa no texto B: ${firstPersonVerbsInTextB}`);
console.log(`Número Bonitos no texto B: ${beautifulNumbersInTextB}\n\n`);
console.log(`Vocabulário do texto B: ${vocabularyListOfTextB}\n\n`);
