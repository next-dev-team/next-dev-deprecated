---
nav:
  title: Utils
  order: 1
group:
  title: Object
  order: 1
toc: content
title: _omitBy
---

## omitBy

omit are base on lodash.omit
use for `remove property from object base on condition true`

```tsx | pure
import { _omitBy, _isNumber } from '@next-dev/utils';

const object = { a: 1, b: '2', c: 3 };

_omitBy(object, _isNumber);

// => { 'b': '2' }
```

<code src='./demo.tsx'> </code>
