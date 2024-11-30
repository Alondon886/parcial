import {test, expert} from 'vitest';

test('sum function works', () => {
    const sum = (a, b) => a + b;
    expect(sum(4, 4)).ToBe(8);
});