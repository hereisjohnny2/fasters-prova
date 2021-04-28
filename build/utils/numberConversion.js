"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToBase10 = exports.convertNumberFromLetter = void 0;
const wordRules_1 = require("../data/wordRules");
const convertNumberFromLetter = (word) => {
    const numberList = word.split('').map((letter, index) => {
        const number = wordRules_1.alphabet.indexOf(letter);
        return number;
    });
    return numberList;
};
exports.convertNumberFromLetter = convertNumberFromLetter;
const convertToBase10 = (word) => {
    const base10number = exports.convertNumberFromLetter(word).reduce((total, value, index) => {
        return total + value * (Math.pow(20, index));
    }, 0);
    return base10number;
};
exports.convertToBase10 = convertToBase10;
