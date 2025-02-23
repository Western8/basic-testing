// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const res = generateLinkedList([1]);
    expect(res).toStrictEqual({
      next: {
        next: null,
        value: null,
      },
      value: 1,
    });
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const res = generateLinkedList([2, 'string', true]);
    expect(res).toMatchSnapshot();
  });
});
