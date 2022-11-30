---
nav:
  title: Utils
  order: 1
group:
  title: Object
  order: 1
toc: content
title: _pickBy
---

## pick

omit are base on lodash.pickBy
use for `get object properties base on conditions true`

```tsx | pure
import { _pickBy, _isNumber } from '@next-dev/utils';

const object = { a: 1, b: '2', c: 3 };

_pickBy(object, _isNumber);

// => { 'a': 1, 'c': 3 }
```

<code src='./demo.tsx'> </code>
