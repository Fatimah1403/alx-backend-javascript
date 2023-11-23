const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber()', () => {
  const message = 'should return the rounded sum of a and b';
  it(message, () => {
    const output = calculateNumber(2.5, 4.5);
    assert.strictEqual(output, 8);
  });
  it(message, () => {
    const output = calculateNumber(20, -10);
    assert.strictEqual(output, 10);
  });
  it(message, () => {
    const output = calculateNumber(-50, 10);
    assert.strictEqual(output, -40);
  });
  it(message, () => {
    const output = calculateNumber(-1, -3);
    assert.strictEqual(output, -4);
  });
  it(message, () => {
    const output = calculateNumber(0, 0);
    assert.strictEqual(output, 0);
  });
  const msg = 'should handle large numbers and return the sum of rounded numbers';
  it(msg, () => {
    const output = calculateNumber(123456789.789, 987654321.321);
    assert.strictEqual(output, 1111111111);
  });
});
