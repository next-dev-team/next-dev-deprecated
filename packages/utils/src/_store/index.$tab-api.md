---
title: API
---

<!-- <API id="_store"></API> -->

## Methods

| Name   | Description                                          | Type                                     |
| ------ | ---------------------------------------------------- | ---------------------------------------- |
| set    | key-value pair, stored locally, with expiration time | `(key:string,val:any,exp?:number)=>void` |
| get    | Get the cache object                                 | `(key:string)=>any`                      |
| remove | Remove the specified cache                           | `(key:string)=>void`                     |
| clear  | Clear all caches                                     | `()=>void`                               |
