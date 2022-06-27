---
title: Store
---

# store - local storage

Provide local storage related methods

## How to use

```tsx |pure
import { store } from '@next-dev';

store.set('', '');
```

## Methods

| Name   | Description                                          | Type                                     |
| ------ | ---------------------------------------------------- | ---------------------------------------- |
| set    | key-value pair, stored locally, with expiration time | `(key:string,val:any,exp?:number)=>void` |
| get    | Get the cache object                                 | `(key:string)=>any`                      |
| remove | Remove the specified cache                           | `(key:string)=>void`                     |
| clear  | Clear all caches                                     | `()=>void`                               |

## other

The store repository is mainly born for local storage with expiration time. It is recommended to use sessionStorage, localStorage, etc. according to the situation.
