---
nav:
  title: Lint
  order: 4
group:
  title: Lint
  order: 1
toc: content
---

# Getting-started

## next-dev-utils

next-dev-utils is just a javaScript utility collection for widely used by Front-end developers.
most of them are from popular library such as Lodash etc.

## Purpose

as a front-end developers are very difficult to create and use javascript utility for every projects that use the same javascript utility. so here we are going to create this library for collection all common use cases where developers need to use it daily.

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
