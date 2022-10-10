# Request

Request is using axios and ahooks/useRequest

```tsx |pure
// custom util src/utils/cusRequest.tsx
import { _requestAxios, _setConfigAxios } from 'next-dev-utils';

// set init
_setConfigAxios({
  baseURL: 'https://gorest.co.in/public/v1',
});
export { _requestAxios };

// ===================== usages =====================

import { _requestAxios } from '@/utils/cusRequest';
// using without hook
const getBloc = async () => _requestAxios<{ data: IBlog[] }>('/items/blog');

// using with hook provide loading, error cache etc
const { data, loading, refresh } = useRequest(getBloc);
```

<code src="./demo.tsx"></code>
