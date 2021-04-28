"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const textData_1 = __importDefault(require("../data/textData"));
const sortFunction_1 = require("../utils/sortFunction");
describe('Sort Function in Alphabethical Order', () => {
    it('should be true', () => {
        const result = sortFunction_1.sortSentence(textData_1.default.textA);
        chai_1.expect(result).to.equal(textData_1.default.textASorted);
    });
});
const a = 0;
