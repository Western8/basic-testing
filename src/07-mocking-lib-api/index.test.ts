// Uncomment the code below and write your tests
import axios, { Axios } from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('lodash', () => {
  const originalModule = jest.requireActual('lodash');

  return {
    __esModule: true,
    ...originalModule,
    throttle: jest.fn((fn) => fn),
  };
});

const relativePath = 'users';

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    const spy = jest.spyOn(axios, 'create');
    await throttledGetDataFromApi(relativePath);
    expect(spy).toBeCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const spy = jest.spyOn(Axios.prototype, 'get');
    await throttledGetDataFromApi(relativePath);
    expect(spy).toBeCalledWith(relativePath);
  });

  test('should return response data', async () => {
    const mockResponse = { data: 'response data' };
    jest
      .spyOn(Axios.prototype, 'get')
      .mockImplementation(() => Promise.resolve(mockResponse));
    const res = await throttledGetDataFromApi(relativePath);
    expect(res).toEqual('response data');
  });
});
