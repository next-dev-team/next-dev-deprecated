---
nav:
  title: Utils
  order: 1
group:
  title: Object
  order: 1
toc: content
---

## Omit

omit are base on lodash.omit
use for `remove specific property from object`

```tsx | pure
import { _omit } from '@next-dev/utils';

  const obj = { "a":1,"b":2,"c":3 };

  const output = _omit(obj, 'a','b');

  ====> Output: { "c":3 }
```

<code src='./demo.tsx'> </code>
