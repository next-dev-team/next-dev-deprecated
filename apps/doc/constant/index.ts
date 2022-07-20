/* eslint-disable import/no-anonymous-default-export */
const envCons = {
  blogCmsApiUrl: 'http://128.199.182.80:8055/items',
  blogCmsAssetsUrl: 'http://128.199.182.80:8055/assets/',
  isNodeProd: process.env.NODE_ENV === 'production',
  isNodeDev: process.env.NODE_ENV === 'development',
};

const mdWidth = 768;
const layout = {
  responsiveOption: [
    {
      label: 'IP 12 pro',
      value: 390,
    },
    {
      label: 'SM',
      value: 576,
    },
    {
      label: 'MD',
      value: mdWidth,
    },
    {
      label: 'LG',
      value: 992,
    },
    {
      label: 'XL',
      value: 1200,
    },
    {
      label: 'FULL',
      value: screen.availWidth,
    },
  ],
  mdWidth
}


export default {
  ...envCons,
  layout
}
