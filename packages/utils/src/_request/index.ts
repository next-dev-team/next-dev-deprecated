import { AxiosRequestConfig } from 'axios';
import {
  _axiosInstance,
  _initConfigAxios,
  _setConfigAxios,
} from './axiosInstance';

type IConfig<T> =
  | Partial<
      {
        formData: any;
        isDebug: boolean;
      } & AxiosRequestConfig<T>
    >
  | undefined;

/**
 * custom requestAxios function with built-in try catch and other feature of axios
 * @param url
 * @param config: default is Method = 'GET'
 * @param isDebug: default is false
 * @param formData: for POST request only usage the same as axios post data (formData , graphql query, etc)
 * @returns
 */
async function _requestAxios<T>(url = '', config?: IConfig<T>) {
  const axiosConfig = {
    method: 'GET',
    ...config,
  } as IConfig<T>;

  try {
    /**
     * Method POST
     */
    if (axiosConfig?.method === 'post' || axiosConfig?.method === 'POST') {
      const resPost = await _axiosInstance?.post<T>(
        url,
        axiosConfig?.formData,
        axiosConfig,
      );
      if (axiosConfig?.isDebug) {
        console.log('request success', resPost);
      }
      return resPost;
    }

    /**
     * default is Method GET
     */
    delete axiosConfig?.formData;
    const resGet = await _axiosInstance?.get<T>(url, axiosConfig);
    if (axiosConfig?.isDebug) {
      console.log('request success', resGet?.data);
    }
    return resGet;
  } catch (error: any) {
    console.info('request error', error.response);
    return error as undefined;
  }
}

// ===================== Request Method =====================
/**
 * requestPost: request axios with Method POST
 * @param config
 * @returns
 */
function _requestPost<T>(config?: IConfig<T>) {
  return _requestAxios<T>('', { method: 'POST', ...config });
}

export {
  _axiosInstance,
  _initConfigAxios,
  _setConfigAxios,
  _requestPost,
  _requestAxios,
};
