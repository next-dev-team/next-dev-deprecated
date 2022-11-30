---
nav:
  title: Utils
  order: 1
group:
  title: Object
  order: 1
toc: content
title: _objToUndef
---

## objToUndef

pick object with include key otherwise will be undefined

```tsx | pure

import { _objToUndef } from 'next-dev-utils';

  const obj = { a: 1, b: 'hello', c: false };

  const output = _objToUndef(obj, 'a');

  ====> Output: { "a": 1, b: undefined, c: undefined  }

```

<code src='./demo.tsx'> </code>
