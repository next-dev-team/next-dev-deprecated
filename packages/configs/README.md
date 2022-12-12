---
nav:
  title: Configuration
  order: 3
group:
  title: Configuration
  order: 1
toc: content
---

## Tsconfig

These are base shared `tsconfig.json`s from which all other `tsconfig.json`'s inherit from.

### Usage

extends in your tsconfig.json

```json
 "extends": "@next-dev/configs/react-library.json",
```

base preview @next-dev/configs/react-library.json

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Default",
  "compilerOptions": {
    "composite": false,
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "inlineSources": false,
    "isolatedModules": true,
    "moduleResolution": "node",
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "preserveWatchOutput": true,
    "skipLibCheck": true,
    "strict": true
  },
  "exclude": ["node_modules"]
}
```

## React Library

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "React Library",
  "extends": "./base.json",
  "compilerOptions": {
    "lib": ["ES2015", "DOM"],
    "module": "ESNext",
    "target": "ES6",
    "jsx": "react-jsx"
  }
}
```

## NextJs

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Next.js",
  "extends": "./base.json",
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "incremental": true,
    "esModuleInterop": true,
    "module": "esnext",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": ["src", "next-env.d.ts"],
  "exclude": ["node_modules"]
}
```
