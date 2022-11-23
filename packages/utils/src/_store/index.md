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

## How to use

```tsx | pure
import { store } from '@next-dev';

store.set('', '');
```

## other

The store repository is mainly born for local storage with expiration time. It is recommended to use sessionStorage, localStorage, etc. according to the situation.
