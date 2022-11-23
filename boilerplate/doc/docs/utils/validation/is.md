# Boolean

Most of function base on <https://lodash.com/>

## isNull

```tsx | pure
_isNull(null);
// => true

_.isNull(void 0);
// => false
```

## isSsr

detect is mobile device

```tsx
import { _isSsr } from 'next-dev-utils/src';
import React from 'react';

export default () => {
  return <>{String(_isSsr)}</>;
};
```

## isMobile

detect is mobile device

```tsx
import React from 'react';
import { _isMobile } from 'next-dev-utils/src';

export default () => {
  return <>{String(_isMobile())}</>;
};
```

## isRegExp

```tsx |pure
_isRegExp(/abc/);
// => true

_isRegExp('/abc/');
// => false
```

## isArray

```tsx |pure
_isArray([1, 2, 3]);
// => true

_isArray(document.body.children);
// => false

_isArray('abc');
// => false

_isArray(_noop);
// => false
```

## isEqual

```tsx |pure
const object = { a: 1 };
const other = { a: 1 };

_isEqual(object, other);
// => true
```

## isFunction

```tsx |pure
_isFunction(_);
// => true

_isFunction(/abc/);
// => false
```

## isUndefined

```tsx |pure
_isUndefined(void 0);
// => true

_isUndefined(null);
// => false
```

## isString

```tsx |pure
_isString('abc');
// => true

_isString(1);
// => false
```

## isNumber

```tsx |pure
_isNumber(3);
// => true

_isNumber(Number.MIN_VALUE);
// => true

_isNumber(Infinity);
// => true

_isNumber('3');
// => false
```

## isNil

```tsx |pure
_isNil(null);
// => true

_isNil(void 0);
// => true

_isNil(NaN);
// => false
```

## isNaN

```tsx |pure
_isNaN(NaN);
// => true

_isNaN(new Number(NaN));
// => true

_isNaN(undefined);
// => false
```

## isObject

```tsx |pure
_isEmpty(null);
// => true

_isEmpty(true);
// => true

_isEmpty(1);
// => true

_isEmpty([1, 2, 3]);
// => false

_isEmpty({ a: 1 });
// => false
```

<!-- ----------------------- -->

## isObject

```tsx |pure
_isObject({});
// => true

_isObject([1, 2, 3]);
// => true

_isObject(_noop);
// => true

_isObject(null);
// => false
```

<!-- ----------------------- -->

## isBoolean

```tsx |pure
_isBoolean(false);
// => true

_isBoolean(null);
// => false
```

<!--------------------------->
