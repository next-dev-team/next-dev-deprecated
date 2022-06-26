# Authority

Provides related methods for obtaining tokens, permissions, etc.

## How to use

```tsx |pure
import { tokener } from '@wetrial/core';

const { getToken, setToken, clearToken } = tokener;

const token = getToken();
```

<Alert type="info">
  Use according to your needs, you can also define auxiliary methods in your own system to manage tokens, not mandatory
</Alert>

## Methods

| Name       | Description                                                                                       | Type                              |
| ---------- | ------------------------------------------------------------------------------------------------- | --------------------------------- |
| setToken   | Save the token to the client, token: `token` value to be stored, `exp`: expiration time (seconds) | `(token:string,exp?number)=>void` |
| getToken   | Get the current token value                                                                       | `()=>string`                      |
| clearToken | Delete the currently saved token, used for logout scenarios                                       | `()=>void`                        |
