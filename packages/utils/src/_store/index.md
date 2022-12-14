---
nav:
  title: Utils
  order: 1
group:
  title: Utils
  order: 1
toc: content
---

# Store

Provide local storage related methods

```tsx | pure
import storeWithExp from '@next-dev/utils/_store';

const lsKey = 'lsKey';

// get value from local storage
const getLsValue = storeWithExp.get(lsKey);

// set value to local storage
storeWithExp.set(lsKey, 'default value ls');

// clear local storage
storeWithExp.clear();

// Output
console.log('output': getLsValue)
// Output: => 'default value ls'

```

<code src='./demo.tsx'> </code>

## other

The store repository is mainly born for local storage with expiration time. It is recommended to use sessionStorage, localStorage, etc. according to the situation.
