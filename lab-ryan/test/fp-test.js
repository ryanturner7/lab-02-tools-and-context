'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

describe('testing fp', () => {

  describe('testing fp.map', () => {
    it('should return [2, 4, 6]', () => {
      let result = fp.map([1,2,3], n => n * 2);
      expect(result).toEqual([2,4,6]);
    });
    it('should return [4, 8, 12]', () => {
      let result = fp.map([2,4,6], n => n * 2);
      expect(result).toEqual([4,8,12]);
  });
});

  describe('testing fp.filter', () => {

    it('should return 7', () => {
      let result = fp.filter([7,8,9], n => n < 8);
      expect(result).toEqual(7);
    });
    it('should return 8', () => {
      let result = fp.filter([6,7,8], n => n > 7);
      expect(result).toEqual(8);
    });
  });

  describe('testing fp.reduce', () => {

    it('should return 6', () => {
      let result = fp.reduce([1,2,3], (acc, curr) => acc + curr);
      expect(result).toEqual(6);
    });
    it('should return 9', () => {
      let result = fp.reduce([2,3,4], (acc, curr) => acc + curr);
      expect(result).toEqual(9);
  });
});

  describe('testing fp.concat', () => {
    it('should return [0,1,2,3,4,5]', () => {
      let result = fp.concat([0,1,2],[3,4,5]);
      expect(result).toEqual([0,1,2,3,4,5]);
    });
    it('should return [5,6,7,8,9,10]', () => {
      let result = fp.concat([5,6,7],[8,9,10]);
      expect(result).toEqual([5,6,7,8,9,10]);
  });
});
  describe('testing fp.splice', () => {
    it('should return 2', () => {
      let result = fp.splice([1,2,3], [1,1]);
      expect(result).toEqual(2);
    });
    it('should return [2,3]', () => {
      let result = fp.splice([1,2,3], [1,2]);
      expect(result).toEqual([2,3])
    });
  });
});
