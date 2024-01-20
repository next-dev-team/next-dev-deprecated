# Object

<!-- ```tsx
import React from 'react';
import { _objToUndef } from 'next-dev-utils/src';

export default () => {
  const obj = { a: 1, b: 'hello', c: false };
  const output = _objToUndef(obj, 'a');
  console.log('demo', output)
  return <h1>demo</h1>;

};
``` -->

## omit

omit are base on lodash.omit
use for `remove property from object`

```tsx | pure
import { _omit } from 'next-dev-utils';

  const obj = { a: 1, b: 'hello', c: false };

  const output = _omit(obj, 'a');

  ====> Output: { b: 'hello', c: false  }
```

## objToUndef

pick object with include key otherwise will be undefined

```tsx | pure

import { _objToUndef } from 'next-dev-utils';

  const obj = { a: 1, b: 'hello', c: false };

  const output = _objToUndef(obj, 'a');

  ====> Output: { "a": 1, b: undefined, c: undefined  }

```

## objGetOnlyValue

remove null ,undefined empty string

```tsx | pure
import { _objGetOnlyValue } from 'next-dev-utils';


  const obj = { a: 1, b: undefined, c: null, d: '', e: false };

  const output = _objGetOnlyValue(obj);

  Output: {  "a": 1,"e": false }
```