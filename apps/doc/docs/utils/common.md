---
title: Common utils
---

# utils - helper methods

Provides a set of predefined commonly used helper methods

## How to use

```tsx | pure
import { utils } from '@wetrial/core';

const {isPromise}=utils;

const isPromiseFunction = isPromise(()=>{
    return new Promise(resolve=>{
        resolve(1)
    });
}));
```

## Methods

| Name              | Description                                                                                                                                   | Type                                                                   | Result Case                                                                                                                        |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| urlToList         | Convert route to list format                                                                                                                  | `(url?:string)=>string[]`                                              |                                                                                                                                    |
| isPromise         | Determine whether it is a Promise object                                                                                                      | `(obj)=>boolean`                                                       |                                                                                                                                    |
| isUrl             | Determine whether it is a valid url                                                                                                           | `(path:string)=>boolean`                                               |                                                                                                                                    |
| listToFlat        | Convert array object to object object                                                                                                         | `(items: T[], key: string\|number = 'value', text: string = 'label'):` | `listToFlat([{label:'label1 ',value:'001'},{label:'label2',value:'002'}],'value','label')==>{'001':'label1','002':'label2 '}])`    |
| isBrowser         | Determine whether it is a browser environment                                                                                                 | `()=>boolean`                                                          |                                                                                                                                    |
| getPageQuery      | Get the query object based on the current url                                                                                                 | `()=>Object`                                                           |                                                                                                                                    |
| getDateString     | Date format, in moment format                                                                                                                 | `({date,format})=>string`                                              |                                                                                                                                    |
| fixedZero         | less than two digits complement 0                                                                                                             | `(val:number)=>string`                                                 |                                                                                                                                    |
| newGuid           | Generate a guid                                                                                                                               | `(withSplit?:boolean)=>string`                                         |                                                                                                                                    |
| formatSecuredInfo | Coded display                                                                                                                                 | `(text,type,filterNA?)=>string`                                        |                                                                                                                                    |
| mergeCells        | Merge adjacent rows of the data source by key, and return the generated cross-row object. It is recommended to use memoizeOne for cache calls | `(list:T[],key:string\|((item:T)=>string) )=>TKeyValue<number,number>` | `mergeCells([{name:'xxg',title:'code'},{name:'Andy Lau',title:'code'},{name:'Gu Tianle', title:'other'}],'title')==>{0:2,1:0,2:1}` |
