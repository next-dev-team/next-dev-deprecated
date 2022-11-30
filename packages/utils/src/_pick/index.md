---
nav:
  title: Utils
  order: 1
group:
  title: Object
  order: 1
toc: content
title: _pick
---

## pick

omit are base on lodash.pick
use for `picked (select) object properties.`

```tsx | pure
import { _pick } from '@next-dev/utils';

const object = { a: 1, b: '2', c: 3 };

_pick(object, ['a', 'c']);

// => { 'a': 1, 'c': 3 }
```

<code src='./demo.tsx'> </code>
