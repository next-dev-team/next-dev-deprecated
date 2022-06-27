---
title: Crypto
---

# crypto - encryption method

Provides a set of front-end encryption and decryption methods, which are used when some sensitive information on the page needs to be encrypted and decrypted for transmission.

<Alert type="info">
The encryption during the ajax transmission process can be controlled by adding a configuration parameter crypto to the ajax related methods, and the ajax method will automatically encrypt and decrypt the data transmission (requires adding a predefined interceptor and the cooperation of the back-end api)
</Alert>

## How to use

```tsx | pure
import { crypto } from '@wetrial/core';

const { base64 } = crypto;

const isPromiseFunction = base64({ userName: 'admin', password: 'AAAAAA' });
```

## Methods

| Name       | Description                            | Type                                              | Result Case |
| ---------- | -------------------------------------- | ------------------------------------------------- | ----------- |
| base64     | base64 the content                     | `(content: string\| object): string`              |             |
| debase64   | Reverse content base64                 | `(content: string): string`                       |             |
| encrypt    | Encrypt data content - 3des encryption | `(content: string\| object, key: string): string` |             |
| decrypt    | Decrypt data - 3des decrypt            | `(cryptoBody: string, key: string): string`       |             |
| encryptKey | RAS encrypt the key                    | `(key: string): string`                           |             |

<Alert type="warning">
The encrypt, decrypt and encryptKey methods need to initialize the initWetrialCore method and pass the corresponding ciphertext before they can be used normally. For how to initialize the initWetrialCore, please <a href="config" target="_blank">view the documentation</a>
</Alert>
