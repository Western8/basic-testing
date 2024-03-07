// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 5, b: 3, action: Action.Subtract, expected: 2 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 1, b: 3, action: Action.Subtract, expected: -2 },
  { a: 5, b: 3, action: Action.Multiply, expected: 15 },
  { a: 2, b: 3, action: Action.Multiply, expected: 6 },
  { a: 0, b: 3, action: Action.Multiply, expected: 0 },
  { a: 15, b: 3, action: Action.Divide, expected: 5 },
  { a: 3, b: 1, action: Action.Divide, expected: 3 },
  { a: 0, b: 3, action: Action.Divide, expected: 0 },
  { a: 5, b: 3, action: Action.Exponentiate, expected: 125 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 0, b: 3, action: Action.Exponentiate, expected: 0 },
  { a: 2, b: 3, action: 'invalid action', expected: null },
  { a: '2', b: 3, action: Action.Add, expected: null },
  { a: 2, b: '3', action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should $action two numbers',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
  // Consider to use Jest table tests API to test all cases above
});

test('should add two numbers', () => {
  const res = simpleCalculator({
    a: 1,
    b: 2,
    action: Action.Add,
  });
  expect(res).toBe(3);
});

test('should subtract two numbers', () => {
  const res = simpleCalculator({
    a: 5,
    b: 3,
    action: Action.Subtract,
  });
  expect(res).toBe(2);
});

test('should multiply two numbers', () => {
  const res = simpleCalculator({
    a: 5,
    b: 3,
    action: Action.Multiply,
  });
  expect(res).toBe(15);
});

test('should divide two numbers', () => {
  const res = simpleCalculator({
    a: 30,
    b: 10,
    action: Action.Divide,
  });
  expect(res).toBe(3);
});

test('should exponentiate two numbers', () => {
  const res = simpleCalculator({
    a: 5,
    b: 3,
    action: Action.Exponentiate,
  });
  expect(res).toBe(125);
});

test('should return null for invalid action', () => {
  const res = simpleCalculator({
    a: 5,
    b: 3,
    action: 'invalid action',
  });
  expect(res).toBeNull();
});

test('should return null for invalid arguments', () => {
  const res = simpleCalculator({
    a: '5',
    b: 3,
    action: Action.Add,
  });
  expect(res).toBeNull();
});
