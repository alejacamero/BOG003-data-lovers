import {sortZA, anotherExample } from '../src/data.js';


describe('sortZA', () => {
  it('is a function', () => {
    expect(typeof sortZA).toBe('function');
  });

  /*it('returns `example`', () => {
    expect(example()).toBe('example');
  });*/
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
