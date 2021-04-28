import { isBeautifulNumber, isFirstPersonVerb, isPrep, isVerb } from "../utils/grammaticalRules";
import { expect } from 'chai';
import 'mocha';
import { convertToBase10 } from "../utils/numberConversion";

describe('Is a Prep', () => {
  it('should be true', () => {
    const result = isPrep("clvs");
    expect(result).to.equal(true);
  });

  /* it('should be false because has 5 letters', () => {
    const result = isPrep("lctjj");
    expect(result).to.equal(false);
  }); */

  it('should be false because doesnt start with l', () => {
    const result = isPrep("pctj");
    expect(result).to.equal(false);
  });

  it('should be false because doesnt end with foo letter', () => {
    const result = isPrep("pctp");
    expect(result).to.equal(false);
  });
})

describe('Is a Verb', () => {
  it('should be true', () => {
    const result = isVerb('kgmwqztl');
    expect(result).to.equal(true);
  });

  it('should be false because has less than 7 letters', () => {
    const result = isVerb('kgztl');
    expect(result).to.equal(false);
  });

  it('should be false because doesnt end with bar', () => {
    const result = isVerb('kgmwqzts');
    expect(result).to.equal(false);
  });
})

describe('Is a First Person Verb', () => {
  it('should be true', () => {
    const result = isFirstPersonVerb('sgmwqztl');
    expect(result).to.equal(true);
  });

  it('should be false because its not a verd', () => {
    const result = isFirstPersonVerb('kgztl');
    expect(result).to.equal(false);
  });

  it('should be false because doesnt start with foo', () => {
    const result = isFirstPersonVerb('lgmwqztl');
    expect(result).to.equal(false);
  });
});

describe('Is a Beautiful Number', () => {
  it('should be true', () => {
    const result = isBeautifulNumber(4545665);
    expect(result).to.equal(true);
  });
  it('should be false because its lower than 563131', () => {
    const result = isBeautifulNumber(4545);
    expect(result).to.equal(false);
  });
  it('should be false because its not divisible by 5', () => {
    const result = isBeautifulNumber(4545667);
    expect(result).to.equal(false);
  });
});

describe('Base 20 Conversion', () => {
  it('should be equal to 541663264', () => {
    const result = convertToBase10('ngvzwxt');
    expect(result).to.equal(541663264);
  })
})

