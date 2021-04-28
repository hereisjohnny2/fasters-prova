"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammaticalRules_1 = require("../utils/grammaticalRules");
const chai_1 = require("chai");
require("mocha");
const numberConversion_1 = require("../utils/numberConversion");
describe('Is a Prep', () => {
    it('should be true', () => {
        const result = grammaticalRules_1.isPrep("clvs");
        chai_1.expect(result).to.equal(true);
    });
    /* it('should be false because has 5 letters', () => {
      const result = isPrep("lctjj");
      expect(result).to.equal(false);
    }); */
    it('should be false because doesnt start with l', () => {
        const result = grammaticalRules_1.isPrep("pctj");
        chai_1.expect(result).to.equal(false);
    });
    it('should be false because doesnt end with foo letter', () => {
        const result = grammaticalRules_1.isPrep("pctp");
        chai_1.expect(result).to.equal(false);
    });
});
describe('Is a Verb', () => {
    it('should be true', () => {
        const result = grammaticalRules_1.isVerb('kgmwqztl');
        chai_1.expect(result).to.equal(true);
    });
    it('should be false because has less than 7 letters', () => {
        const result = grammaticalRules_1.isVerb('kgztl');
        chai_1.expect(result).to.equal(false);
    });
    it('should be false because doesnt end with bar', () => {
        const result = grammaticalRules_1.isVerb('kgmwqzts');
        chai_1.expect(result).to.equal(false);
    });
});
describe('Is a First Person Verb', () => {
    it('should be true', () => {
        const result = grammaticalRules_1.isFirstPersonVerb('sgmwqztl');
        chai_1.expect(result).to.equal(true);
    });
    it('should be false because its not a verd', () => {
        const result = grammaticalRules_1.isFirstPersonVerb('kgztl');
        chai_1.expect(result).to.equal(false);
    });
    it('should be false because doesnt start with foo', () => {
        const result = grammaticalRules_1.isFirstPersonVerb('lgmwqztl');
        chai_1.expect(result).to.equal(false);
    });
});
describe('Is a Beautiful Number', () => {
    it('should be true', () => {
        const result = grammaticalRules_1.isBeautifulNumber(4545665);
        chai_1.expect(result).to.equal(true);
    });
    it('should be false because its lower than 563131', () => {
        const result = grammaticalRules_1.isBeautifulNumber(4545);
        chai_1.expect(result).to.equal(false);
    });
    it('should be false because its not divisible by 5', () => {
        const result = grammaticalRules_1.isBeautifulNumber(4545667);
        chai_1.expect(result).to.equal(false);
    });
});
describe('Base 20 Conversion', () => {
    it('should be equal to 541663264', () => {
        const result = numberConversion_1.convertToBase10('ngvzwxt');
        chai_1.expect(result).to.equal(541663264);
    });
});
