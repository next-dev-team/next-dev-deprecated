const envCons = {
  blogCmsApiUrl: 'http://128.199.182.80:8055/items',
  blogCmsAssetsUrl: 'http://128.199.182.80:8055/assets/',
  isNodeProd: process.env.NODE_ENV === 'production',
  isNodeDev: process.env.NODE_ENV === 'development',
};


export const _cons = {
  ...envCons
}
