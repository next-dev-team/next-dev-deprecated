---
nav:
  title: Utils
  order: 1
group:
  title: Object
  order: 1
toc: content
---

## getOnlyValue

remove null ,undefined empty string

```tsx | pure
import { _objGetOnlyValue } from '@next-dev/utils';


  const obj = { a: 1, b: undefined, c: null, d: '', e: false };

  const output = _objGetOnlyValue(obj);

  Output: {  "a": 1,"e": false }
```

<code src='./demo.tsx'> </code>
