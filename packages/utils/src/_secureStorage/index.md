---
nav:
  title: Utils
  order: 1
group:
  title: Utils
  order: 1
toc: content
title: Secure Storage
---

# Store with secure storage

secure storage it based on [react-secure-storage](https://github.com/sushinpv/react-secure-storage#readme)

## Setup

```bash
// Set own Hash in Env
SECURE_LOCAL_STORAGE_HASH_KEY=xxxxxxxxxxxxxxxx
or
REACT_APP_SECURE_LOCAL_STORAGE_HASH_KEY=xxxxxxxxx
```

## Usage

```tsx | pure
import _secureStorage from '@next-dev/utils/_secureStorage';

const lsKey = 'number';
// set value to local storage with encrypted value
_secureStorage.setItem(lsKey, 12);
//in storage: encrypted value format RSA eg. U2FsdGVkX19+/f8HD22CJskBE9cbNbh05+yFUvULWh0=

// get value from local storage as real data
const getLsValue = _secureStorage.getItem(lsKey);
// Output
console.log('output': getLsValue)
// Output: => 12

// clear local storage
_secureStorage.clear();


```

<code src='./demo.tsx'> </code>
:

## Why React Secure Storage ?

React secure storage is created to securely write the data to local storage ( **Basically its a wrapper written on top of default localStorage to write the data securely to the localStorage** ), here secure storage library generate a secure key for every browser and encrypt the data using this key, which means only the browser which encrypted the data can decrypt it,

Additionally react secure storage preserve the data format for every data type, As out of the box it supports the following data types

**String | Object | Number | Boolean**

Which means you don't need to explicitly convert every data to string

## How does it work ?

React secure storage is written in Singleton design pattern, and when the library initialized it reads all the data from local storage and decrypt all the data which is written using react-secure-storage and keeps on the memory, This ensure faster reading of all the data,

The key is generated using browser fingerprint, which is generated using 10+ browser key identifiers and user input secure key,

The user specific Secure key can be configured using .env file as
