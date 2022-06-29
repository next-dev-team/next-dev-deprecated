# Regex

Provides related all common regex

```tsx |pure
import { regex } from '@next-dev';

const { urlRegexp, ... } = regex;
```

| Name            | Description           | Antd Form Validation           | Test                               | Result |
| --------------- | --------------------- | ------------------------------ | ---------------------------------- | ------ |
| urlRegexp       | contain `www.anytext` | `{ pattern: urlRegexp }`       | urlRegexp.test('www.next-dev.com') | true   |
| isImg           | gif jpg jpeg png svg  | `{ pattern: isImg }`           | isImg.test('png')                  | true   |
| positiveInteger | 0-9                   | `{ pattern: positiveInteger }` | positiveInteger.test('-1')         | false  |
| number          | Must be a number      | `{ pattern: number }`          | number.test('1')                   | true   |
| email           | Must be a valid email | `{ pattern: email }`           | email.test('1')                    | false  |
| integer         | integer               | `{ pattern: integer }`         | integer.test('1')                  | true   |
