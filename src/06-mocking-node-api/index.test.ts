// Uncomment the code below and write your tests
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';
import path from 'path';
import fs from 'fs';
import fsPromises from 'fs/promises';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    const timeout = 5000;
    const cb = () => {
      null;
    };
    const spyTimeout = jest.spyOn(global, 'setTimeout');
    doStuffByTimeout(cb, timeout);
    jest.runAllTimers();
    expect(spyTimeout).toHaveBeenCalledWith(cb, 5000);
    spyTimeout.mockRestore();
  });

  test('should call callback only after timeout', () => {
    const timeout = 5000;
    const mockCallback = jest.fn();
    doStuffByTimeout(mockCallback, timeout);
    expect(mockCallback).not.toHaveBeenCalled();
    jest.runAllTimers();
    expect(mockCallback).toHaveBeenCalled();
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    const timeout = 5000;
    const cb = () => {
      null;
    };
    const spyInterval = jest.spyOn(global, 'setInterval');
    doStuffByInterval(cb, timeout);
    jest.advanceTimersByTime(15000);
    expect(spyInterval).toHaveBeenCalledWith(cb, 5000);
    spyInterval.mockRestore();
  });

  test('should call callback multiple times after multiple intervals', () => {
    const timeout = 5000;
    const mockCallback = jest.fn();
    doStuffByInterval(mockCallback, timeout);
    expect(mockCallback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(15000);
    expect(mockCallback).toHaveBeenCalledTimes(3);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    const spy = jest.spyOn(path, 'join');
    await readFileAsynchronously('abcde');
    expect(spy).toHaveBeenCalledWith(__dirname, 'abcde');
  });

  test('should return null if file does not exist', async () => {
    const mock = jest.spyOn(fs, 'existsSync').mockImplementation(() => false);
    const res = await readFileAsynchronously('abcde');
    expect(res).toBeNull();
    mock.mockRestore();
  });

  test('should return file content if file exists', async () => {
    const mockExistSync = jest
      .spyOn(fs, 'existsSync')
      .mockImplementation(() => true);
    const mockReadFile = jest
      .spyOn(fsPromises, 'readFile')
      .mockImplementation(
        () => new Promise((resolve) => resolve(Buffer.from('file content'))),
      );
    const res = await readFileAsynchronously('abcde');
    expect(res).toBe('file content');
    mockExistSync.mockRestore();
    mockReadFile.mockRestore();
  });
});
