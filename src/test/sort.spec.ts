import { expect } from 'chai';
import 'mocha';
import TextData from '../data/textData';
import { sortSentence } from '../utils/sortFunction';

describe('Sort Function in Alphabethical Order', () => {
  it('should be true', () => {
    const result = sortSentence(TextData.textA);
    expect(result).to.equal(TextData.textASorted);
  })
});

const a = 0;