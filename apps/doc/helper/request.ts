import axios, { AxiosRequestConfig } from 'axios';

export const _axiosInstance = axios.create({
  baseURL: $cons.blogCmsApiUrl,
});

_axiosInstance.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      //todo: add token and other header
      // 'x-api-key': getToken()?.refreshToken as string,
      // Authorization: `Bearer ${getToken()?.token}`,
    };

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
_axiosInstance.interceptors.response.use(
  function (response) {
    // console.log('response', response);

    //todo: refresh token
    // if (
    //   response?.status === 200 &&
    //   response?.data?.errors?.[0]?.extensions?.response?.statusCode === 401
    // ) {
    //   return getAuthTokenApi().then((token) => {
    //     if (response?.config?.headers && token?.data?.authToken) {
    //       response.config.headers['x-api-key'] = token?.data?.authToken;
    //     }
    //     return axios.request(response.config);
    //   });
    // }

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  },
);

// export const _axiosGet = <Data>(url: string) =>
// 	_axiosInstance.get<Data, AxiosResponse<Data>>(url);

// export const _axiosPost = <Data>(url: string) =>
// 	_axiosInstance.post<Data, AxiosResponse<Data>>(url);

// export const _axiosDel = <Data>(url: string) =>
// 	_axiosInstance.delete<Data, AxiosResponse<Data>>(url);

// export const _axiosPut = <Data>(url: string) =>
// 	_axiosInstance.put<Data, AxiosResponse<Data>>(url);

type IConfig<T> =
  | Partial<
      {
        formData: any;
        isDebug: boolean;
        /**
         * get from graphql document
         */
        // gqlDocument: ASTNode;
        /**
         * variables for graphql query
         */
        variables: Record<string, any>;
      } & AxiosRequestConfig<T>
    >
  | undefined;

/**
 * custom requestAxios function with built-in try catch and other feature of axios
 * @param url
 * @param config : default is Method = 'GET'
 * @returns
 */
export async function _axios<T>(url = '', config?: IConfig<T>) {
  const urlConfig = config?.url || url;
  const axiosConfig = {
    method: 'GET',
    ...config,
  };

  const logger = (res: any) => {
    if (axiosConfig?.isDebug && $cons.isNodeDev) {
      console.log(`request ${urlConfig} success`, res);
    }
  };

  try {
    /**
     * Method POST
     */
    if (axiosConfig?.method.includes('POST')) {
      const resPost = await _axiosInstance?.post<T>(
        url,
        axiosConfig?.formData,
        axiosConfig,
      );

      logger(resPost);

      return resPost;
    }

    /**
     * default is Method GET
     */
    delete axiosConfig?.formData;
    const resGet = await _axiosInstance?.get<T>(url, axiosConfig);
    logger(resGet?.data);

    return resGet;
  } catch (error: any) {
    console.info('request error', error?.response);
    return error as undefined;
  }
}
