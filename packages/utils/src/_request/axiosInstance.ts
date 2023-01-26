import { CreateAxiosDefaults } from 'axios';
import { _axios } from '../_axios';

type IConfigAxios<T = any> = CreateAxiosDefaults<T> &
  Record<any, any> & {
    skipInterceptors?: boolean;
    onError?: (errors: any) => void;
    onSuccess?: (res: any) => void;
  };

let _initConfigAxios: IConfigAxios = {};

const _setConfigAxios = (newConfigAxios: IConfigAxios) => {
  _initConfigAxios = { ..._initConfigAxios, ...newConfigAxios };
};

const _axiosInstance = _axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

_axiosInstance.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      //todo: add token and other header
      // 'x-api-key': getToken()?.refreshToken as string,
      // Authorization: `Bearer ${getToken()?.token}`,
    } as any;
    // set new config
    Object.keys(_initConfigAxios).forEach((configKey) => {
      if (configKey) {
        //@ts-ignore
        config[configKey] = _initConfigAxios?.[configKey];
      }
    });

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
    console.log('===> response success:', response);

    _initConfigAxios?.onSuccess?.(response);

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
    console.log('===> response error:', error?.response);
    _initConfigAxios?.onError?.(error?.response);

    return Promise.reject(error);
  },
);

export { _axiosInstance, _initConfigAxios, _setConfigAxios };
