"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBeautifulNumbers = exports.countFirstPersonVerbs = exports.countVerbs = exports.countPreps = void 0;
const grammaticalRules_1 = require("./grammaticalRules");
const numberConversion_1 = require("./numberConversion");
// Perguntar ao bruno se tem algo errado com essa função?
const countPreps = (sentence) => {
    if (sentence.length === 0)
        return 0;
    const wordsArray = sentence.split(" ");
    const prepositionsArray = wordsArray.filter(word => grammaticalRules_1.isPrep(word));
    return prepositionsArray.length;
};
exports.countPreps = countPreps;
const countVerbs = (sentence) => {
    if (sentence.length === 0)
        return 0;
    const wordsArray = sentence.split(" ");
    const prepositionsArray = wordsArray.filter(word => grammaticalRules_1.isVerb(word));
    return prepositionsArray.length;
};
exports.countVerbs = countVerbs;
const countFirstPersonVerbs = (sentence) => {
    if (sentence.length === 0)
        return 0;
    const wordsArray = sentence.split(" ");
    const prepositionsArray = wordsArray.filter(word => grammaticalRules_1.isFirstPersonVerb(word));
    return prepositionsArray.length;
};
exports.countFirstPersonVerbs = countFirstPersonVerbs;
const countBeautifulNumbers = (sentence) => {
    if (sentence.length === 0)
        return 0;
    const wordsArray = sentence.split(" ");
    const prepositionsArray = wordsArray.filter(word => {
        const convertedNumber = numberConversion_1.convertToBase10(word);
        return grammaticalRules_1.isBeautifulNumber(convertedNumber);
    });
    return prepositionsArray.length;
};
exports.countBeautifulNumbers = countBeautifulNumbers;
