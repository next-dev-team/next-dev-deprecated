import storeWithExp from './_store';

let token_name = `authToken`;

export interface ITokenProps {
  /**
   * token value
   */
  token: string;
  /**
   * Refresh the value of the token
   */
  refreshToken?: string;
}

export const configTokenName = (tokenName: string) => {
  token_name = tokenName;
};

/**
 * store token
 * @param {string} token The token value to store
 * @param {number} exp expiration time in seconds
 */
export const setToken = (token: ITokenProps, exp?: number): void => {
  storeWithExp.set(token_name, token, exp);
};

/**
 * Get the token of the current user
 */
export const getToken = (): ITokenProps => {
  return storeWithExp.get(token_name) as ITokenProps;
};

/**
 * Clear the token and permissions of the current user
 */
export const clearToken = (): void => {
  storeWithExp.remove(token_name);
};
