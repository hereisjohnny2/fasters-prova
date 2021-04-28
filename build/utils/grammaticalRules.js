"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBeautifulNumber = exports.isFirstPersonVerb = exports.isVerb = exports.isPrep = void 0;
const wordRules_1 = require("../data/wordRules");
const isPrep = (word) => {
    /* if (word.length !== 4) return false; */
    if (!word.includes('l'))
        return false;
    if (!wordRules_1.foo_letters.includes(word[word.length - 1]))
        return false;
    return true;
};
exports.isPrep = isPrep;
const isVerb = (word) => {
    if (word.length < 7)
        return false;
    if (wordRules_1.foo_letters.includes(word[word.length - 1]))
        return false;
    return true;
};
exports.isVerb = isVerb;
const isFirstPersonVerb = (word) => {
    if (!exports.isVerb(word))
        return false;
    if (!wordRules_1.foo_letters.includes(word[0]))
        return false;
    return true;
};
exports.isFirstPersonVerb = isFirstPersonVerb;
const isBeautifulNumber = (number) => {
    if (number >= 563131 && number % 5 === 0)
        return true;
    return false;
};
exports.isBeautifulNumber = isBeautifulNumber;
