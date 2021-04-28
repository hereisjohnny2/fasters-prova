"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortSentence = void 0;
const wordRules_1 = require("../data/wordRules");
const sortSentence = (sentence) => {
    const sortedSentence = sentence.split(' ').sort((a, b) => {
        let l = Math.min(a.length, b.length);
        for (let index = 0; index < l; index++) {
            if (wordRules_1.alphabet.indexOf(a[index]) < wordRules_1.alphabet.indexOf(b[index]))
                return -1;
            if (wordRules_1.alphabet.indexOf(a[index]) > wordRules_1.alphabet.indexOf(b[index]))
                return 1;
        }
        if (a.length > l)
            return 1;
        return -1;
    });
    return [...new Set(sortedSentence)].join(' ');
};
exports.sortSentence = sortSentence;
