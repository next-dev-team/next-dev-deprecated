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

  if (axiosConfig?.isDebug) {
    console.log('axiosConfig', axiosConfig);
  }

  try {
    const res = await _axiosInstance?.request<T>({ url, ...axiosConfig });
    if (axiosConfig?.isDebug) {
      console.log('_requestAxios success', res);
    }
    return res;
  } catch (error: any) {
    console.info('_requestAxios error', error.response);

    return error as undefined;
  }
}

// ===================== Request Method =====================

function _requestGet<T>(url: string, config?: IConfig<T>) {
  return _requestAxios<T>(url, { method: 'POST', ...config });
}
function _requestPost<T>(url: string, config?: IConfig<T>) {
  return _requestAxios<T>(url, { method: 'POST', ...config });
}
function _requestDelete<T>(url: string, config?: IConfig<T>) {
  return _requestAxios<T>(url, { method: 'delete', ...config });
}
function _requestPut<T>(url: string, config?: IConfig<T>) {
  return _requestAxios<T>(url, { method: 'put', ...config });
}
function _requestPatch<T>(url: string, config?: IConfig<T>) {
  return _requestAxios<T>(url, { method: 'patch', ...config });
}

export {
  _requestGet,
  _requestPatch,
  _requestPut,
  _requestDelete,
  _axiosInstance,
  _initConfigAxios,
  _setConfigAxios,
  _requestPost,
  _requestAxios,
};
