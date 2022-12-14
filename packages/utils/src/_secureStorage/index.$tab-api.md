---
title: API
---

## Methods

| Function              | Usecase                                              | Datatype                                                 |
| --------------------- | ---------------------------------------------------- | -------------------------------------------------------- |
| `setItem(key, value)` | To set values to secure storage                      | Supports `'String - Object - Number - Boolean'` as value |
| `getItem(key)`        | To get values which is saved on secure local storage | Return null if the key does not exits                    |
| `removeItem(key)`     | To remove specified key from secure local storage    |                                                          |
| `clear()`             | Removed all data from secure local storage           |                                                          |
