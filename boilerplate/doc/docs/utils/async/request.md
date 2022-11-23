# Request

We use Request base on axios and ahooks/useRequest

```tsx |pure
// custom util src/utils/cusRequest.tsx
import { _requestAxios, _setConfigAxios } from 'next-dev-utils';
import { useRequest } from 'ahooks';

// set init
_setConfigAxios({
  baseURL: 'https://gorest.co.in/public/v1',
});
export { _requestAxios };

// ===================== usages =====================

import { _requestAxios } from '@/utils/cusRequest';
// using without hook
const getBlog = async () => _requestAxios<{ data: IBlog[] }>('/items/blog');

// using with hook provide loading, error cache etc
const { data, loading, refresh } = useRequest(getBlog);
```

More detail

- More about `useRequest` <https://ahooks.js.org/hooks/use-request/index>
- More about `Axios` <https://axios-http.com/docs/intro>

## Demo

<code src="./demo.tsx"></code>
