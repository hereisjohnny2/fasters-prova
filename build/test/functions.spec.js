"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const textData_1 = __importDefault(require("../data/textData"));
const countFuntions_1 = require("../utils/countFuntions");
describe('Function to Count Prepositions', () => {
    it('should be 21', () => {
        const result = countFuntions_1.countPreps(textData_1.default.textA);
        chai_1.expect(result).to.equal(21);
    });
});
describe('Function to Count Verbs', () => {
    it('should be 160', () => {
        const result = countFuntions_1.countVerbs(textData_1.default.textA);
        chai_1.expect(result).to.equal(160);
    });
});
describe('Function to Count First Person Verbs', () => {
    it('should be 37', () => {
        const result = countFuntions_1.countFirstPersonVerbs(textData_1.default.textA);
        chai_1.expect(result).to.equal(37);
    });
});
describe('Function to Count Beautiful Numbers', () => {
    it('should be 77', () => {
        const result = countFuntions_1.countBeautifulNumbers(textData_1.default.textA);
        chai_1.expect(result).to.equal(77);
    });
});
