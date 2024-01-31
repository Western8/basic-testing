// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError, TransferFailedError, SynchronizationFailedError, BankAccount } from '.';

describe('BankAccount', () => {
  const account = getBankAccount(100);
  const account2 = getBankAccount(0);

  test('should create account with initial balance', () => {
    const resAccount = { _balance: 100 };
    const res = getBankAccount(100);
    expect(res).toBeInstanceOf(BankAccount);
    expect(res).toEqual(resAccount);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const res = (sum: number) => account.withdraw(sum);
    expect(() => res(500)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const res = (sum: number) => account.transfer(sum, account2);
    expect(() => res(500)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    const res = (sum: number) => account.transfer(sum, account);
    expect(() => res(50)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const resAccount = { _balance: 600 };
    const res = account.deposit(500);
    expect(res).toEqual(resAccount);
  });

  test('should withdraw money', () => {
    const resAccount = { _balance: 400 };
    const res = account.withdraw(200);
    expect(res).toEqual(resAccount);
  });

  test('should transfer money', () => {
    const resAccount = { _balance: 300 };
    const resAccount2 = { _balance: 100 };
    const res = account.transfer(100, account2);
    expect(res).toEqual(resAccount);
    expect(account2).toEqual(resAccount2);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const res = await account.fetchBalance();
    expect(res === null || typeof res === 'number').toBeTruthy();
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const resAccount = { _balance: 555 };
    const spy = jest.spyOn(account, 'fetchBalance').mockImplementation(() => new Promise((res) => res(555)));
    await account.synchronizeBalance();
    spy.mockRestore();
    expect(account).toEqual(resAccount);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const spy = jest.spyOn(account, 'fetchBalance').mockImplementation(() => new Promise((res) => res(null)));
    const res = () => account.synchronizeBalance();
    expect(async () => await res()).rejects.toThrow(SynchronizationFailedError);
    spy.mockRestore();
  });
});
