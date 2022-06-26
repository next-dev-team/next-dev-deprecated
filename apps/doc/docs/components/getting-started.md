# Getting Started

ProComponents is a template component developed based on Ant Design, which provides higher-level abstraction support out of the box. It can significantly improve the efficiency of making CRUD pages and focus more on pages.

Check out a typical demo to see if the component is right for your business before using it. ProComponents focuses on CRUD in the middle and back end, with quite a few preset styles and behaviors. These behaviors and styles will be more difficult to change. If your business requires rich customization, it is recommended to use Ant Design directly.

## Install

Currently, each component of ProComponents is an independent package, you need to install the corresponding npm package in your project and use it.

```shell
$ npm i @ant-design/pro-components --save
```

Currently ProComponents provides the following components for direct use:

- `npm i @ant-design/pro-components --save`

## use in the project

Each package is an independent component package. The usage examples are as follows:

All our packages use less for style management and easy theme customization. If you don't have less-loader try importing css from `dist`.

```tsx | pure
import '@ant-design/pro-components/dist/components.css';
```

It is recommended to use less, which can facilitate theme customization, and can also be loaded on demand.
