/* eslint-disable import/no-anonymous-default-export */
const envCons = {
  blogCmsApiUrl: 'http://128.199.182.80:8055/items',
  blogCmsAssetsUrl: 'http://128.199.182.80:8055/assets/',
  isNodeProd: process.env.NODE_ENV === 'production',
  isNodeDev: process.env.NODE_ENV === 'development',
};

const mdWidth = 768;
const lgWidth = 1024;
const xlWidth = 1280;

const layout = {
  responsiveOption: [
    {
      label: 'IP 12 pro',
      value: 390,
    },
    {
      label: 'SM',
      value: 640,
    },
    {
      label: 'MD',
      value: mdWidth,
    },
    {
      label: 'LG',
      value: lgWidth,
    },
    {
      label: 'XL',
      value: xlWidth,
    },
    {
      label: '2XL',
      value: 1536,
    },
    {
      label: 'FULL',
      value: '100%',
    },
  ],
  mdWidth,
  lgWidth,
  xlWidth,
};

export default {
  ...envCons,
  layout,
};
