// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {

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
});
