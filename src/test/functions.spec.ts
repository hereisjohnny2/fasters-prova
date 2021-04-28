import { expect } from "chai";
import TextData from "../data/textData";
import { countPreps, countBeautifulNumbers, countVerbs, countFirstPersonVerbs } from "../utils/countFuntions";

describe('Function to Count Prepositions', () => {
  it('should be 21', () => {
    const result = countPreps(TextData.textA);
    expect(result).to.equal(21);
  });
});

describe('Function to Count Verbs', () => {
  it('should be 160', () => {
    const result = countVerbs(TextData.textA);
    expect(result).to.equal(160);
  });
});

describe('Function to Count First Person Verbs', () => {
  it('should be 37', () => {
    const result = countFirstPersonVerbs(TextData.textA);
    expect(result).to.equal(37);
  });
});

describe('Function to Count Beautiful Numbers', () => {
  it('should be 77', () => {
    const result = countBeautifulNumbers(TextData.textA);
    expect(result).to.equal(77);
  });
});