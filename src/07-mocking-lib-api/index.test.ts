// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('lodash', () => {
  const originalModule = jest.requireActual('lodash');

  return {
    __esModule: true,
    ...originalModule,
    throttle: jest.fn(fn => fn),
  };
});

const relativePath = 'users';

/*
jest.mock("lodash/throttle", () => {
  return fn => fn;
});

jest.mock('axios', () => {
  return {
    ...(jest.requireActual('axios') as object),
    create: jest.fn().mockReturnValue(jest.requireActual('axios')),
  };
});
*/
describe('throttledGetDataFromApi', () => {
/*
  afterEach(() => {
    jest.clearAllMocks();
  });
  */

  test('should create instance with provided base url', async () => {
    const spy = jest.spyOn(axios, 'create');
    await throttledGetDataFromApi(relativePath);
    expect(spy).toBeCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });

/*
   const baseURL =  'abcde';

    jest.mock('axios', () => {
      return {
        //create: jest.fn().mockReturnValue(jest.requireActual('axios')),
        create: jest.fn().mockImplementation(() => {
          axios.create({
            baseURL: baseURL,
          });
        }),
      }
    });
    

    jest.mock('axios');
    const params = {
      baseURL: 'provided.url'
    };
    axios.create = jest.fn(() => axios.create(params));
/*
    const mockAxios = jest.genMockFromModule('axios');
    mockAxios.create = jest.fn(() => mockAxios);
    
    
    const res = getClient();
    console.log('res ', res);
    expect(res).toBeNull();
    */
  });

  test('should perform request to correct provided url', async () => {
/*
    
    //const spy0 = jest.spyOn(axios, 'create');
    //const spy = jest.spyOn(axios.create(), 'get');
    const spy = jest.spyOn(axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    }), 'get');
    await throttledGetDataFromApi(relativePath);
    //expect(spy).toBeCalled();
    expect(spy).toHaveBeenCalled();
    //expect(spy).toBeCalledWith(relativePath);
  */  
  });

  test('should return response data', async () => {
    /*
    jest.mock('axios');
    const mockResponse = { data: 'response data'};
    (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(mockResponse));
    //const spy = jest.spyOn(axios.create(), 'get');
    //spy.mockReturnValue(new Promise((resolve) => resolve({ data: 'response data'})));
    const res = await throttledGetDataFromApi(relativePath);
    expect(res).toBe(mockResponse);
    //expect(res).toEqual({ data: 'response data'});
*/
  });
});
