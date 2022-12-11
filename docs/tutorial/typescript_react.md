---
nav:
  title: Tutorial
  order: -1
group:
  title: Typescript
  order: 1
toc: content
title: Typescript React
---

# Typescript React

Ref source: [Typescript-cheatsheets](https://github.com/typescript-cheatsheets/react)

## Prerequisites[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#prerequisites 'Direct link to heading')

1.  Good understanding of [React](https://reactjs.org/)
2.  Familiarity with [TypeScript Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) ([2ality's guide](http://2ality.com/2018/04/type-notation-typescript.html) is helpful. If you’re an absolute beginner in TypeScript, check out [chibicode’s tutorial](https://ts.chibicode.com/todo/).)
3.  Having read [the TypeScript section in the official React docs](https://reactjs.org/docs/static-type-checking.html#typescript).
4.  Having read [the React section of the new TypeScript playground](http://www.typescriptlang.org/play/index.html?jsx=2&esModuleInterop=true&e=181#example/typescript-with-react) (optional: also step through the 40+ examples under [the playground's](http://www.typescriptlang.org/play/index.html) Examples section)

This guide will always assume you are starting with the latest TypeScript and React versions. Notes for older versions will be in expandable `<details>` tags.

## VS Code Extensions[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#vs-code-extensions 'Direct link to heading')

- Refactoring help [https://marketplace.visualstudio.com/items?itemName=paulshen.paul-typescript-toolkit](https://marketplace.visualstudio.com/items?itemName=paulshen.paul-typescript-toolkit)
- R+TS Code Snippets (there are a few...)
  - [https://marketplace.visualstudio.com/items?itemName=infeng.vscode-react-typescript](https://marketplace.visualstudio.com/items?itemName=infeng.vscode-react-typescript)
  - [https://www.digitalocean.com/community/tutorials/the-best-react-extension-for-vs-code](https://www.digitalocean.com/community/tutorials/the-best-react-extension-for-vs-code)
- TypeScript official extension [https://code.visualstudio.com/docs/languages/typescript](https://code.visualstudio.com/docs/languages/typescript)
- JavaScript and TypeScript Nightly [https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)

## React + TypeScript Starter Kits[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#react--typescript-starter-kits 'Direct link to heading')

Cloud setups:

- [TypeScript Playground with React](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAKjgQwM5wEoFNkGN4BmUEIcA5FDvmQNwCwAUKJLHAN5wCuqWAyjMhhYANFx4BRAgSz44AXzhES5Snhi1GjLAA8W8XBAB2qeAGEInQ0KjjtycABsscALxwAFAEpXAPnaM4OANjeABtA0sYUR4Yc0iAXVcxPgEhdwAGT3oGAOTJaXx3L19-BkDAgBMIXE4QLCsAOhhgGCckgAMATQsgh2BcAGssCrgAEjYIqwVmutR27MC5LM0yuEoYTihDD1zAgB4K4AA3H13yvbAfbs5e-qGRiYspuBmsVD2Aekuz-YAjThgMCMcCMpj6gxcbGKLj8MTiVnck3gAGo4ABGTxyU6rcrlMF3OB1H5wT7-QFGbG4z6HE65ZYMOSMIA) just if you are debugging types (and reporting issues), not for running code
- [CodeSandbox](http://ts.react.new/) - cloud IDE, boots up super fast
- [Stackblitz](https://stackblitz.com/edit/react-typescript-base) - cloud IDE, boots up super fast

Local dev setups:

- [Next.js](https://nextjs.org/docs/basic-features/typescript): `npx create-next-app@latest --ts` will create in your current folder
- [Create React App](https://facebook.github.io/create-react-app/docs/adding-typescript): `npx create-react-app name-of-app --template typescript` will create in new folder
- [Vite](https://vitejs.dev/): `npm create vite@latest my-react-ts-app -- --template react-ts`
- [Meteor](https://guide.meteor.com/build-tool.html#typescript): `meteor create --typescript name-of-my-new-typescript-app`
- [Ignite](https://github.com/infinitered/ignite#use-ignite-andross-infinite-red-andross-boilerplate) for React Native: `ignite new myapp`
- [TSDX](https://tsdx.io/): `npx tsdx create mylib` for Creating React+TS _libraries_. (in future: [TurboRepo](https://twitter.com/jaredpalmer/status/1346217789942591488))

**Other tools**

## Video Tutorial[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#video-tutorial 'Direct link to heading')

Have a look at the 7-part "React Typescript Course" video series below for an introduction to TypeScript with React.

[![react typescript course video series](https://i.imgur.com/IIG0Xu9.jpeg)](https://www.youtube.com/watch?v=PL1NUl7fQ2I&list=PLG-Mk4wQm9_LyKE5EwoZz2_GGXR-zJ5Ml)

<!-- end -->

## Typing Component Props

This is intended as a basic orientation and reference for React developers familiarizing with TypeScript.

## Basic Prop Types Examples[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#basic-prop-types-examples 'Direct link to heading')

A list of TypeScript types you will likely use in a React+TypeScript app:

```
type AppProps = {  message: string;  count: number;  disabled: boolean;  /** array of a type! */  names: string[];  /** string literals to specify exact string values, with a union type to join them together */  status: "waiting" | "success";  /** an object with known properties (but could have more at runtime) */  obj: {    id: string;    title: string;  };  /** array of objects! (common) */  objArr: {    id: string;    title: string;  }[];  /** any non-primitive value - can't access any properties (NOT COMMON but useful as placeholder) */  obj2: object;  /** an interface with no required properties - (NOT COMMON, except for things like `React.Component<{}, State>`) */  obj3: {};  /** a dict object with any number of properties of the same type */  dict1: {    [key: string]: MyTypeHere;  };  dict2: Record<string, MyTypeHere>; // equivalent to dict1  /** function that doesn't take or return anything (VERY COMMON) */  onClick: () => void;  /** function with named prop (VERY COMMON) */  onChange: (id: number) => void;  /** function type syntax that takes an event (VERY COMMON) */  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;  /** alternative function type syntax that takes an event (VERY COMMON) */  onClick(event: React.MouseEvent<HTMLButtonElement>): void;  /** any function as long as you don't invoke it (not recommended) */  onSomething: Function;  /** an optional prop (VERY COMMON!) */  optional?: OptionalType;  /** when passing down the state setter function returned by `useState` to a child component. `number` is an example, swap out with whatever the type of your state */  setState: React.Dispatch<React.SetStateAction<number>>;};
```

Notice we have used the TSDoc `/** comment */` style here on each prop. You can and are encouraged to leave descriptive comments on reusable components. For a fuller example and discussion, see our [Commenting Components](https://react-typescript-cheatsheet.netlify.app/docs/advanced/misc_concerns/#commenting-components) section in the Advanced Cheatsheet.

More on object types: `object`, `{}`, etc

## Useful React Prop Type Examples[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#useful-react-prop-type-examples 'Direct link to heading')

Relevant for components that accept other React components as props.

```
export declare interface AppProps {  children?: React.ReactNode; // best, accepts everything React can render  childrenElement: JSX.Element; // A single React element  style?: React.CSSProperties; // to pass through style props  onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target  //  more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring  props: Props & React.ComponentPropsWithoutRef<"button">; // to impersonate all the props of a button element and explicitly not forwarding its ref  props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref}
```

**Small `React.ReactNode` edge case before React 18\*\***JSX.Element vs React.ReactNode?\*\*

[More discussion: Where ReactNode does not overlap with JSX.Element](https://github.com/typescript-cheatsheets/react/issues/129)

[Something to add? File an issue](https://github.com/typescript-cheatsheets/react/issues/new).

## Types or Interfaces?[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#types-or-interfaces 'Direct link to heading')

You can use either Types or Interfaces to type Props and State, so naturally the question arises - which do you use?

### TL;DR[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#tldr 'Direct link to heading')

Use Interface until You Need Type - [orta](https://twitter.com/orta/status/1356129195835973632?s=20).

### More Advice[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#more-advice 'Direct link to heading')

Here's a helpful rule of thumb:

- always use `interface` for public API's definition when authoring a library or 3rd party ambient type definitions, as this allows a consumer to extend them via _declaration merging_ if some definitions are missing.
- consider using `type` for your React Component Props and State, for consistency and because it is more constrained.

You can read more about the reasoning behind this rule of thumb in [Interface vs Type alias in TypeScript 2.7](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c).

The TypeScript Handbook now also includes guidance on [Differences Between Type Aliases and Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces).

> Note: At scale, there are performance reasons to prefer interfaces ([see official Microsoft notes on this](https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections)) but [take this with a grain of salt](https://news.ycombinator.com/item?id=25201887)

Types are useful for union types (e.g. `type MyType = TypeA | TypeB`) whereas Interfaces are better for declaring dictionary shapes and then `implementing` or `extending` them.

### Useful table for Types vs Interfaces[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#useful-table-for-types-vs-interfaces 'Direct link to heading')

It's a nuanced topic, don't get too hung up on it. Here's a handy table:

| Aspect                                          | Type | Interface |
| ----------------------------------------------- | ---- | --------- |
| Can describe functions                          | ✅   | ✅        |
| Can describe constructors                       | ✅   | ✅        |
| Can describe tuples                             | ✅   | ✅        |
| Interfaces can extend it                        | ⚠️   | ✅        |
| Classes can extend it                           | 🚫   | ✅        |
| Classes can implement it (`implements`)         | ⚠️   | ✅        |
| Can intersect another one of its kind           | ✅   | ⚠️        |
| Can create a union with another one of its kind | ✅   | 🚫        |
| Can be used to create mapped types              | ✅   | 🚫        |
| Can be mapped over with mapped types            | ✅   | ✅        |
| Expands in error messages and logs              | ✅   | 🚫        |
| Can be augmented                                | 🚫   | ✅        |
| Can be recursive                                | ⚠️   | ✅        |

⚠️ In some cases

(source: [Karol Majewski](https://twitter.com/karoljmajewski/status/1082413696075382785))

[Something to add? File an issue](https://github.com/typescript-cheatsheets/react/issues/new).

<!-- end -->

# Function Components

These can be written as normal functions that take a `props` argument and return a JSX element.

```
// Declaring type of props - see "Typing Component Props" for more examplestype AppProps = {  message: string;}; /* use `interface` if exporting so that consumers can extend */// Easiest way to declare a Function Component; return type is inferred.const App = ({ message }: AppProps) => <div>{message}</div>;// you can choose annotate the return type so an error is raised if you accidentally return some other typeconst App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;// you can also inline the type declaration; eliminates naming the prop types, but looks repetitiveconst App = ({ message }: { message: string }) => <div>{message}</div>;
```

> Tip: You might use [Paul Shen's VS Code Extension](https://marketplace.visualstudio.com/items?itemName=paulshen.paul-typescript-toolkit) to automate the type destructure declaration (incl a [keyboard shortcut](https://twitter.com/_paulshen/status/1392915279466745857?s=20)).

**Why is `React.FC` discouraged? What about `React.FunctionComponent`/`React.VoidFunctionComponent`?**

You may see this in many React+TypeScript codebases:

```
const App: React.FunctionComponent<{ message: string }> = ({ message }) => (  <div>{message}</div>);
```

However, the general consensus today is that `React.FunctionComponent` (or the shorthand `React.FC`) is [discouraged](https://github.com/facebook/create-react-app/pull/8177). This is a nuanced opinion of course, but if you agree and want to remove `React.FC` from your codebase, you can use [this jscodeshift codemod](https://github.com/gndelia/codemod-replace-react-fc-typescript).

Some differences from the "normal function" version:

- `React.FunctionComponent` is explicit about the return type, while the normal function version is implicit (or else needs additional annotation).
- It provides typechecking and autocomplete for static properties like `displayName`, `propTypes`, and `defaultProps`.

  - Note that there are some known issues using `defaultProps` with `React.FunctionComponent`. See [this issue for details](https://github.com/typescript-cheatsheets/react/issues/87). We maintain a separate `defaultProps` section you can also look up.

- Before the [React 18 type updates](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210), `React.FunctionComponent` provided an implicit definition of `children` (see below), which was heavily debated and is one of the reasons [`React.FC` was removed from the Create React App TypeScript template](https://github.com/facebook/create-react-app/pull/8177).

```
// before React 18 typesconst Title: React.FunctionComponent<{ title: string }> = ({  children,  title,}) => <div title={title}>{children}</div>;
```

(Deprecated)**Using `React.VoidFunctionComponent` or `React.VFC` instead**

- _In the future_, it may automatically mark props as `readonly`, though that's a moot point if the props object is destructured in the parameter list.

In most cases it makes very little difference which syntax is used, but you may prefer the more explicit nature of `React.FunctionComponent`.

**Minor Pitfalls**

These patterns are not supported:

**Conditional rendering**

```
const MyConditionalComponent = ({ shouldRender = false }) =>  shouldRender ? <div /> : false; // don't do this in JS eitherconst el = <MyConditionalComponent />; // throws an error
```

This is because due to limitations in the compiler, function components cannot return anything other than a JSX expression or `null`, otherwise it complains with a cryptic error message saying that the other type is not assignable to `Element`.

**Array.fill**

```
const MyArrayComponent = () => Array(5).fill(<div />);const el2 = <MyArrayComponent />; // throws an error
```

Unfortunately just annotating the function type will not help so if you really need to return other exotic types that React supports, you'd need to perform a type assertion:

```
const MyArrayComponent = () => Array(5).fill(<div />) as any as JSX.Element;
```

[See commentary by @ferdaber here](https://github.com/typescript-cheatsheets/react/issues/57).

## Hooks

Hooks are [supported in `@types/react` from v16.8 up](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a05cc538a42243c632f054e42eab483ebf1560ab/types/react/index.d.ts#L800-L1031).

### useState[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#usestate 'Direct link to heading')

Type inference works very well for simple values:

```
const [state, setState] = useState(false);// `state` is inferred to be a boolean// `setState` only takes booleans
```

See also the [Using Inferred Types](https://react-typescript-cheatsheet.netlify.app/docs/basic/troubleshooting/types/#using-inferred-types) section if you need to use a complex type that you've relied on inference for.

However, many hooks are initialized with null-ish default values, and you may wonder how to provide types. Explicitly declare the type, and use a union type:

```
const [user, setUser] = useState<User | null>(null);// later...setUser(newUser);
```

You can also use type assertions if a state is initialized soon after setup and always has a value after:

```
const [user, setUser] = useState<User>({} as User);// later...setUser(newUser);
```

This temporarily "lies" to the TypeScript compiler that `{}` is of type `User`. You should follow up by setting the `user` state — if you don't, the rest of your code may rely on the fact that `user` is of type `User` and that may lead to runtime errors.

### useCallback[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#usecallback 'Direct link to heading')

You can type the `useCallback` just like any other function.

```
const memoizedCallback = useCallback(  (param1: string, param2: number) => {    console.log(param1, param2)    return { ok: true }  },  [...],);/** * VSCode will show the following type: * const memoizedCallback: *  (param1: string, param2: number) => { ok: boolean } */
```

Note that for React < 18, the function signature of `useCallback` typed arguments as `any[]` by default:

```
function useCallback<T extends (...args: any[]) => any>(  callback: T,  deps: DependencyList): T;
```

In React >= 18, the function signature of `useCallback` changed to the following:

```
function useCallback<T extends Function>(callback: T, deps: DependencyList): T;
```

Therefore, the following code will yield "`Parameter 'e' implicitly has an 'any' type.`" error in React >= 18, but not <17.

```
// @ts-expect-error Parameter 'e' implicitly has 'any' type.useCallback((e) => {}, []);// Explicit 'any' type.useCallback((e: any) => {}, []);
```

### useReducer[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#usereducer 'Direct link to heading')

You can use [Discriminated Unions](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions) for reducer actions. Don't forget to define the return type of reducer, otherwise TypeScript will infer it.

```
import { useReducer } from "react";const initialState = { count: 0 };type ACTIONTYPE =  | { type: "increment"; payload: number }  | { type: "decrement"; payload: string };function reducer(state: typeof initialState, action: ACTIONTYPE) {  switch (action.type) {    case "increment":      return { count: state.count + action.payload };    case "decrement":      return { count: state.count - Number(action.payload) };    default:      throw new Error();  }}function Counter() {  const [state, dispatch] = useReducer(reducer, initialState);  return (    <>      Count: {state.count}      <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>        -      </button>      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>        +      </button>    </>  );}
```

[View in the TypeScript Playground](https://www.typescriptlang.org/play?#code/LAKFEsFsAcHsCcAuACAVMghgZ2QJQKYYDGKAZvLJMgOTyEnUDcooRsAdliuO+IuBgA2AZUQZE+ZAF5kAbzYBXdogBcyAAwBfZmBCIAntEkBBAMIAVAJIB5AHLmAmgAUAotOShkyAD5zkBozVqHiI6SHxlagAaZGgMfUFYDAATNXYFSAAjfHhNDxAvX1l-Q3wg5PxQ-HDImLiEpNTkLngeAHM8ll1SJRJwDmQ6ZIUiHIAKLnEykqNYUmQePgERMQkY4n4ONTMrO0dXAEo5T2aAdz4iAAtkMY3+9gA6APwj2ROvImxJYPYqmsRqCp3l5BvhEAp4Ow5IplGpJhIHjCUABqTB9DgPeqJFLaYGfLDfCp-CIAoEFEFeOjgyHQ2BKVTNVb4RF05TIAC0yFsGWy8Fu6MeWMaB1x5K8FVIGAUglUwK8iEuFFOyHY+GVLngFD5Bx0Xk0oH13V6myhplZEm1x3JbE4KAA2vD8DFkuAsHFEFcALruAgbB4KAkEYajPlDEY5GKLfhCURTHUnKkQqFjYEAHgAfHLkGb6WpZI6WfTDRSvKnMgpEIgBhxTIJwEQANZSWRjI5SdPIF1u8RXMayZ7lSphEnRWLxbFNagAVmomhF6fZqYA9OXKxxM2KQWWK1WoTW643m63pB2u+7e-3SkEQsPamOGik1FO55p08jl6vdxuKcvv8h4yAmhAA)

**Usage with `Reducer` from `redux`**

In case you use the [redux](https://github.com/reduxjs/redux) library to write reducer function, It provides a convenient helper of the format `Reducer<State, Action>` which takes care of the return type for you.

So the above reducer example becomes:

```
import { Reducer } from 'redux';export function reducer: Reducer<AppState, Action>() {}
```

### useEffect / useLayoutEffect[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#useeffect--uselayouteffect 'Direct link to heading')

Both of `useEffect` and `useLayoutEffect` are used for performing **side effects** and return an optional cleanup function which means if they don't deal with returning values, no types are necessary. When using `useEffect`, take care not to return anything other than a function or `undefined`, otherwise both TypeScript and React will yell at you. This can be subtle when using arrow functions:

```
function DelayedEffect(props: { timerMs: number }) {  const { timerMs } = props;  useEffect(    () =>      setTimeout(() => {        /* do stuff */      }, timerMs),    [timerMs]  );  // bad example! setTimeout implicitly returns a number  // because the arrow function body isn't wrapped in curly braces  return null;}
```

**Solution to the above example**

```
function DelayedEffect(props: { timerMs: number }) {  const { timerMs } = props;  useEffect(() => {    setTimeout(() => {      /* do stuff */    }, timerMs);  }, [timerMs]);  // better; use the void keyword to make sure you return undefined  return null;}
```

### useRef[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#useref 'Direct link to heading')

In TypeScript, `useRef` returns a reference that is either [read-only](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/abd69803c1b710db58d511f4544ec1b70bc9077c/types/react/v16/index.d.ts#L1025-L1039) or [mutable](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/abd69803c1b710db58d511f4544ec1b70bc9077c/types/react/v16/index.d.ts#L1012-L1023), depends on whether your type argument fully covers the initial value or not. Choose one that suits your use case.

### Option 1: DOM element ref[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#option-1-dom-element-ref 'Direct link to heading')

**[To access a DOM element](https://reactjs.org/docs/refs-and-the-dom.html):** provide only the element type as argument, and use `null` as initial value. In this case, the returned reference will have a read-only `.current` that is managed by React. TypeScript expects you to give this ref to an element's `ref` prop:

```
function Foo() {  // - If possible, prefer as specific as possible. For example, HTMLDivElement  //   is better than HTMLElement and way better than Element.  // - Technical-wise, this returns RefObject<HTMLDivElement>  const divRef = useRef<HTMLDivElement>(null);  useEffect(() => {    // Note that ref.current may be null. This is expected, because you may    // conditionally render the ref-ed element, or you may forgot to assign it    if (!divRef.current) throw Error("divRef is not assigned");    // Now divRef.current is sure to be HTMLDivElement    doSomethingWith(divRef.current);  });  // Give the ref to an element so React can manage it for you  return <div ref={divRef}>etc</div>;}
```

If you are sure that `divRef.current` will never be null, it is also possible to use the non-null assertion operator `!`:

```
const divRef = useRef<HTMLDivElement>(null!);// Later... No need to check if it is nulldoSomethingWith(divRef.current);
```

Note that you are opting out of type safety here - you will have a runtime error if you forget to assign the ref to an element in the render, or if the ref-ed element is conditionally rendered.

**Tip: Choosing which `HTMLElement` to use**

Refs demand specificity - it is not enough to just specify any old \`HTMLElement\`. If you don't know the name of the element type you need, you can check \[lib.dom.ts\](https://github.com/microsoft/TypeScript/blob/v3.9.5/lib/lib.dom.d.ts#L19224-L19343) or make an intentional type error and let the language service tell you:

![image](https://user-images.githubusercontent.com/6764957/116914284-1c436380-ac7d-11eb-9150-f52c571c5f07.png)

### Option 2: Mutable value ref[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#option-2-mutable-value-ref 'Direct link to heading')

**[To have a mutable value](https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables):** provide the type you want, and make sure the initial value fully belongs to that type:

```
function Foo() {  // Technical-wise, this returns MutableRefObject<number | null>  const intervalRef = useRef<number | null>(null);  // You manage the ref yourself (that's why it's called MutableRefObject!)  useEffect(() => {    intervalRef.current = setInterval(...);    return () => clearInterval(intervalRef.current);  }, []);  // The ref is not passed to any element's "ref" prop  return <button onClick={/* clearInterval the ref */}>Cancel timer</button>;}
```

### See also[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#see-also 'Direct link to heading')

- [Related issue by @rajivpunjabi](https://github.com/typescript-cheatsheets/react/issues/388) - [Playground](https://www.typescriptlang.org/play#code/JYWwDg9gTgLgBAKjgQwM5wEoFNkGN4BmUEIcARFDvmQNwCwAUI7hAHarwCCYYcAvHAAUASn4A+OAG9GjOHAD0CBLLnKGcxHABiwKBzgQwMYGxS4WUACbBWAczgwIcSxFwBXEFlYxkxtgDoVTQBJVmBjZAAbOAA3KLcsOAB3YEjogCNE1jc0-zgAGQBPG3tHOAAVQrAsAGVcKGAjOHTCuDdUErhWNgBabLSUVFQsWBNWA2qoX2hA9VU4AGFKXyx0AFk3H3TIxOwCOAB5dIArLHwgpHcoSm84MGJJmFbgdG74ZcsDVkjC2Y01f7yFQsdjvLAEACM-EwVBg-naWD2AB4ABLlNb5GpgZCsACiO083jEgn6kQAhMJ6HMQfpKJCFpE2IkBNg8HCEci0RisTj8VhCTBiaSKVSVIoAaoLnBQuFgFFYvFEikBpkujkMps4FgAB7VfCdLmY7F4gleOFwAByEHg7U63VYfXVg2Go1MhhG0ygf3mAHVUtF6jgYLtwUdTvguta4Bstjs9mGznCpVcbvB7u7YM90B8vj9vYgLkDqWxaeCAEzQ1n4eHDTnoo2801EknqykyObii5SmpnNifA5GMZmCzWOwOJwudwC3xjKUyiLROKRBLJf3NLJO9KanV64xj0koVifQ08k38s1Sv0DJZBxIx5DbRGhk6J5Nua5mu4PEZPOAvSNgsgnxsHmXZzIgRZyDSYIEAAzJWsI1k+BCovWp58gKcAAD5qmkQqtqKHbyCexoYRecw7IQugcAs76ptCdIQv4KZmoRcjyMRaGkU28A4aSKiUXAwwgpYtEfrcAh0mWzF0ax7bsZx3Lceetx8eqAlYPAMAABa6KJskSXAdKwTJ4kwGxCjyKy-bfK05SrDA8mWVagHAbZeScOY0CjqUE6uOgqDaRAOSfKqOYgb8KiMaZ9GSeCEIMkyMVyUwRHWYc7nSvAgUQEk6AjMQXpReWyWGdFLHeBZHEuTCQEZT8xVwaV8BxZCzUWZQMDvuMghBHASJVnCWhTLYApiH1chIqgxpGeCfCSIxAC+Yj3o+8YvvgSLyNNOLjeBGhTTNdLzVJy3reGMBbTtrB7RoB3XbNBAneCsHLatcbPhdV3GrdB1WYhw3IKNZq-W2DCLYRO7QPAljgsgORcDwVJAA)
- [Example from Stefan Baumgartner](https://fettblog.eu/typescript-react/hooks/#useref) - [Playground](https://www.typescriptlang.org/play/?jsx=2#code/JYWwDg9gTgLgBAJQKYEMDG8BmUIjgIilQ3wFgAoCzAVwDsNgJa4AVJADxgElaxqYA6sBgALAGIQ01AM4AhfjCYAKAJRwA3hThwA9DrjBaw4CgA2waUjgB3YSLi1qp0wBo4AI35wYSZ6wCeYEgAymhQwGDw1lYoRHCmEBAA1oYA5nCY0HAozAASLACyADI8fDAAoqZIIEi0MFpwaEzS8IZllXAAvIjEMAB0MkjImAA8+cWl-JXVtTAAfEqOzioA3A1NtC1wTPIwirQAwuZoSV1wql1zGg3aenAt4RgOTqaNIkgn0g5ISAAmcDJvBA3h9TsBMAZeFNXjl-lIoEQ6nAOBZ+jddPpPPAmGgrPDEfAUS1pG5hAYvhAITBAlZxiUoRUqjU6m5RIDhOi7iIUF9RFYaqIIP9MlJpABCOCAUHJ0eDzm1oXAAGSKyHtUx9fGzNSacjaPWq6Ea6gI2Z9EUyVRrXV6gC+DRtVu0RBgxuYSnRIzm6O06h0ACpIdlfr9jExSQyOkxTP5GjkPFZBv9bKIDYSmbNpH04ABNFD+CV+nR2636kby+BETCddTlyo27w0zr4HycfC6L0lvUjLH7baHY5Jas7BRMI7AE42uYSUXed6pkY6HtMDulnQruCrCg2oA)

## useImperativeHandle[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#useimperativehandle 'Direct link to heading')

Based on this [Stackoverflow answer](https://stackoverflow.com/a/69292925/5415299):

```
// Countdown.tsx// Define the handle types which will be passed to the forwardRefexport type CountdownHandle = {  start: () => void;};type CountdownProps = {};const Countdown = forwardRef<CountdownHandle, CountdownProps>((props, ref) => {  useImperativeHandle(ref, () => ({    // start() has type inference here    start() {      alert("Start");    },  }));  return <div>Countdown</div>;});
```

```
// The component uses the Countdown componentimport Countdown, { CountdownHandle } from "./Countdown.tsx";function App() {  const countdownEl = useRef<CountdownHandle>(null);  useEffect(() => {    if (countdownEl.current) {      // start() has type inference here as well      countdownEl.current.start();    }  }, []);  return <Countdown ref={countdownEl} />;}
```

### See also:[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#see-also-1 'Direct link to heading')

- [Using ForwardRefRenderFunction](https://stackoverflow.com/a/62258685/5415299)

## Custom Hooks[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#custom-hooks 'Direct link to heading')

If you are returning an array in your Custom Hook, you will want to avoid type inference as TypeScript will infer a union type (when you actually want different types in each position of the array). Instead, use [TS 3.4 const assertions](https://devblogs.microsoft.com/typescript/announcing-typescript-3-4/#const-assertions):

```
import { useState } from "react";export function useLoading() {  const [isLoading, setState] = useState(false);  const load = (aPromise: Promise<any>) => {    setState(true);    return aPromise.finally(() => setState(false));  };  return [isLoading, load] as const; // infers [boolean, typeof load] instead of (boolean | typeof load)[]}
```

[View in the TypeScript Playground](https://www.typescriptlang.org/play/?target=5&jsx=2#code/JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wFgAoCpAD0ljkwFcA7DYCZuRgZyQBkIKACbBmAcwAUASjgBvCnDhoO3eAG1g3AcNFiANHF4wAyjBQwkAXTgBeRMRgA6HklPmkEzCgA2vKQG4FJRV4b0EhWzgJFAAFHBBNJAAuODjcRIAeFGYATwA+GRs8uSDFIzcLCRgoRiQA0rgiGEYoTlj4xMdMUR9vHIlpW2Lys0qvXzr68kUAX0DpxqRm1rgNLXDdAzDhaxRuYOZVfzgAehO4UUwkKH21ACMICG9UZgMYHLAkCEw4baFrUSqVARb5RB5PF5wAA+cHen1BfykaksFBmQA)

This way, when you destructure you actually get the right types based on destructure position.

**Alternative: Asserting a tuple return type**

Note that the React team recommends that custom hooks that return more than two values should use proper objects instead of tuples, however.

## More Hooks + TypeScript reading:[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#more-hooks--typescript-reading 'Direct link to heading')

- [https://medium.com/@jrwebdev/react-hooks-in-typescript-88fce7001d0d](https://medium.com/@jrwebdev/react-hooks-in-typescript-88fce7001d0d)
- [https://fettblog.eu/typescript-react/hooks/#useref](https://fettblog.eu/typescript-react/hooks/#useref)

If you are writing a React Hooks library, don't forget that you should also expose your types for users to use.

## Example React Hooks + TypeScript Libraries:[](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#example-react-hooks--typescript-libraries 'Direct link to heading')

- [https://github.com/mweststrate/use-st8](https://github.com/mweststrate/use-st8)
- [https://github.com/palmerhq/the-platform](https://github.com/palmerhq/the-platform)
- [https://github.com/sw-yx/hooks](https://github.com/sw-yx/hooks)

[Something to add? File an issue](https://github.com/typescript-cheatsheets/react/issues/new).
